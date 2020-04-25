import { db } from '../config/firebase';
import { VolunteerDto, Volunteer } from '../model/volunteer';
import { mapResponseError } from './responseMappers';
import { as } from '../utils/types.util';
import { mapLocalTimePeriodsToUTC } from './availabilityTransformer';

const VOLUNTEER_COLLECTIONS = 'volunteers';

export const VOLUNTEER_NOT_FOUND_MESSAGE = 'No volunteer found';

export async function createVolunteer(volunteer: VolunteerDto): Promise<void> {
  const volunteerWithAvailabilityInUTCTime = {
    ...volunteer,
    ...mapLocalTimePeriodsToUTC(volunteer.localTimeAvailability),
  };

  return db
    .collection(VOLUNTEER_COLLECTIONS)
    .doc(volunteer.id)
    .set(volunteerWithAvailabilityInUTCTime)
    .catch(mapResponseError);
}

type UpdateVolunteer = Partial<Volunteer> & { id: string };

export async function updateVolunteer(volunteer: UpdateVolunteer): Promise<UpdateVolunteer> {
  const finalVolunteer = volunteer.localTimeAvailability
    ? {
        ...volunteer,
        ...mapLocalTimePeriodsToUTC(volunteer.localTimeAvailability),
      }
    : {
        ...volunteer,
      };
  return db
    .collection(VOLUNTEER_COLLECTIONS)
    .doc(volunteer.id)
    .set(finalVolunteer, { merge: true })
    .then(() => finalVolunteer)
    .catch(mapResponseError);
}

export async function getVolunteer(volunteerId: string): Promise<VolunteerDto> {
  return db
    .collection(VOLUNTEER_COLLECTIONS)
    .doc(volunteerId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return as<VolunteerDto>(doc.data());
      } else {
        throw new Error(VOLUNTEER_NOT_FOUND_MESSAGE);
      }
    })
    .catch(mapResponseError);
}
