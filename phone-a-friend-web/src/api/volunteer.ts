import { db } from "../config/firebase";
import { VolunteerDto } from "../model/volunteer";
import { mapResponseError } from "./responseMappers";

const VOLUNTEER_COLLECTIONS = "volunteers";

export async function createVolunteer(volunteer: VolunteerDto): Promise<void> {
  return db
    .collection(VOLUNTEER_COLLECTIONS)
    .doc(volunteer.id)
    .set(volunteer)
    .catch(mapResponseError);
}
