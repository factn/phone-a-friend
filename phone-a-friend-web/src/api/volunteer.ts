import { db } from "../config/firebase";
import { VolunteerDto } from "../model/volunteer";
import { mapResponseError } from "./responseMappers";
import { as } from "../utils/types.util";
import {
  mapLocalTimePeriodsToUTC,
  mapUTCTimePeriodsToLocalTime,
} from "./availabilityTransformer";

const VOLUNTEER_COLLECTIONS = "volunteers";

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

export async function getVolunteer(volunteerId: string): Promise<VolunteerDto> {
  return db
    .collection(VOLUNTEER_COLLECTIONS)
    .doc(volunteerId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const volunteer = as<VolunteerDto>(doc.data());

        const volunteerWithAvailabilityInLocalTime: VolunteerDto = {
          ...volunteer,
          ...mapUTCTimePeriodsToLocalTime(
            volunteer.utcAvailability,
            volunteer.timezone
          ),
        };

        return volunteerWithAvailabilityInLocalTime;
      } else {
        throw new Error("No user found");
      }
    })
    .catch(mapResponseError);
}
