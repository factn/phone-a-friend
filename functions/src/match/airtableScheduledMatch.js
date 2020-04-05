const { db, createTimestamp } = require("../config");
const {
  USERS_COLLECTION,
  VOLUNTEERS_COLLECTION,
  airTableFields,
  TIME_PERIODS,
  CURRENT_MATCHES_COLLECTION
} = require("../config/constants");

  async function matchUsersAndVolunteers() {
  const usersCollection = db.collection(USERS_COLLECTION);
  const volunteersCollection = db.collection(VOLUNTEERS_COLLECTION);

  const currentPeriod = getCurrentHourAsString();
  console.log(currentPeriod);
  /**
   * Find users available
   * @typedef User[]
   */
  const usersAvailable = await usersCollection
    .where(airTableFields.availability, "array-contains", currentPeriod)
    .get()
    .then(querySnapshot => querySnapshot.docs.map(s => s.data()));

  console.log("Users found: " + usersAvailable.length);
  // Find volunteer available
  const volunteersAvailable = await volunteersCollection
    .where(airTableFields.availability, "array-contains", currentPeriod)
    .get()
    .then(querySnapshot => querySnapshot.docs.map(s => s.data()));

  console.log("Volunteers found: " + volunteersAvailable.length);

  const matches = buildMatches(usersAvailable, volunteersAvailable);

  if (matches.length === 0) {
    return;
  } else {
    let batch = db.batch();

    matches.forEach(match => {
      let docRef = db.collection(CURRENT_MATCHES_COLLECTION).doc();
      const currentMatchDocument = {
        id: docRef.id,
        createdTimestamp: createTimestamp(),
        timePeriod: currentPeriod,
        volunteerId: match.volunteer.uid,
        volunteerName: match.volunteer.name,
        volunteerPhoneNumber: match.volunteer.phoneNumber,
        volunteerEmail: match.volunteer.email,
        volunteerIntroduction: match.volunteer.introduction,
        userId: match.user.uid,
        userName: match.user.name,
        userPhoneNumber: match.user.phoneNumber,
        userIntroduction: match.user.introduction
      };
      batch.set(docRef, currentMatchDocument);
    });

    return batch.commit().then(commitResponse => {
      console.log(commitResponse);
      return;
    });
  }
}

/**
 * Matches on gender preference
 * @param {User[]} users
 * @param {Volunteer[]} volunteers
 */
function buildMatches(users, volunteers) {
  let matches = [];
  let usersAvailable = [...users];
  let volunteersAvailable = [...volunteers];

  while (usersAvailable.length > 0 && volunteersAvailable.length > 0) {
    const currentUserToMatch = usersAvailable[0];

    const matchingVolunteer =
      currentUserToMatch["genderPreference"] && // If they dont have this answered, we assume no preference - for backwards compatibility with older data
      currentUserToMatch.genderPreference !== "Anyone"
        ? volunteersAvailable.find(
            volunteer =>
              volunteer.gender === currentUserToMatch.genderPreference
          )
        : volunteersAvailable[0];

    if (matchingVolunteer) {
      matches.push({
        user: currentUserToMatch,
        volunteer: matchingVolunteer
      });

      // Remove the matched volunteer
      volunteersAvailable.splice(
        volunteersAvailable.findIndex(
          volunteer => matchingVolunteer === volunteer
        ),
        1
      );
    } else {
      console.log("No match found for user: " + currentUserToMatch.uid);
    }

    // Always remove the user we tried to match, as we either found or match or we couldn't and they will never find a match this period
    usersAvailable.shift();
  }

  return matches;
}

function getCurrentHourAsString() {
  const hour = new Date().getHours();
  const startOfPeriod = hour % 2 == 0 ? hour : hour - 1;
  return TIME_PERIODS[`${startOfPeriod}`];
}

module.exports = matchUsersAndVolunteers;

/**
 * A User
 * @typedef {Object} User
 * @property {string} name - Users name
 * @property {string} gender -
 * @property {string} genderPreference -
 * @property {string} introduction -
 * @property {string} phoneNumber -
 * @property {string} zipCode -
 * @property {string} createdtime -
 * @property {string} uid -
 * @property {string[]} availability -
 */

/**
 * A Volunteer
 * @typedef {Object} Volunteer
 * @property {string} name -
 * @property {string} gender -
 * @property {string} introduction -
 * @property {string} phoneNumber -
 * @property {string} email -
 * @property {string} zipCode -
 * @property {string} createdtime -
 * @property {string} uid -
 * @property {string[]} availability -
 */
