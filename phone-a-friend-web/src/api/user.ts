import { db } from '../config/firebase';
import { UserDto, User } from '../model/user';
import { mapResponseError } from './responseMappers';
import { as } from '../utils/types.util';
import { mapLocalTimePeriodsToUTC } from './availabilityTransformer';

const USERS_COLLECTIONS = 'users';

export const USER_NOT_FOUND_MESSAGE = 'No user found';

export async function createUser(user: UserDto): Promise<void> {
  const userWithAvailabilityInUTCTime = {
    ...user,
    ...mapLocalTimePeriodsToUTC(user.localTimeAvailability),
  };
  return db.collection(USERS_COLLECTIONS).doc(user.id).set(userWithAvailabilityInUTCTime).catch(mapResponseError);
}

type UpdateUser = Partial<User> & { id: string };

export async function updateUser(user: UpdateUser): Promise<UpdateUser> {
  const finalUser = user.localTimeAvailability
    ? {
        ...user,
        ...mapLocalTimePeriodsToUTC(user.localTimeAvailability),
      }
    : {
        ...user,
      };
  return db
    .collection(USERS_COLLECTIONS)
    .doc(user.id)
    .set(finalUser, { merge: true })
    .then(() => finalUser)
    .catch(mapResponseError);
}

export async function getUser(userId: string): Promise<User> {
  return db
    .collection(USERS_COLLECTIONS)
    .doc(userId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return as<User>(doc.data());
      } else {
        throw new Error(USER_NOT_FOUND_MESSAGE);
      }
    })
    .catch(mapResponseError);
}
