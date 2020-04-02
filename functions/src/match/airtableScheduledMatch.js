const { db } = require("../config");
const {
  USERS_COLLECTION,
  VOLUNTEERS_COLLECTION,
  airTableFields
} = require("../config/constants");

async function matchUsersAndVolunteers(req, res) {
  const usersCollection = db.collection(USERS_COLLECTION);
  const volunteersCollection = db.collection(VOLUNTEERS_COLLECTION);

  const currentHour = getCurrentHour();

  /**
   * Find users available
   * @typedef User[]
   */
  const usersAvailable = await usersCollection
    .where(airTableFields.language, "==", "None") // just for testing while we work out availability
    .get()
    .then(querySnapshot => querySnapshot.docs.map(s => s.data()));

  // Find volunteer available
  const volunteersAvailable = await volunteersCollection
    //  .where(airTableFields.language, "==", "None") // just for testing while we work out availability
    .get()
    .then(querySnapshot => querySnapshot.docs.map(s => s.data()));

  const matches = buildMatches(usersAvailable, volunteersAvailable);

  return res.status(200).send(matches);
}

/**
 * At the moment they aren't sending through gender preference from airtable
 * So we are just matching on available
 * @param {User[]} users
 * @param {Volunteer[]} volunteers
 */
function buildMatches(users, volunteers) {
  let matches = [];
  let usersAvailable = [...users];
  let volunteersAvailable = [...volunteers];

  while (usersAvailable.length > 0 && volunteersAvailable.length > 0) {
    matches.push({
      user: usersAvailable[0],
      volunteer: volunteersAvailable[0]
    });
    usersAvailable.shift();
    volunteersAvailable.shift();
  }

  return matches;
}

function getCurrentTimeInMinutes() {
  const date = new Date();
  return date.getHours() * 60 + date.getMinutes();
}
function getCurrentHour() {
  const date = new Date();
  return date.getHours();
}

module.exports = matchUsersAndVolunteers;

/**
 * A User
 * @typedef {Object} User
 * @property {string} name - Users name
 * @property {string} gender -
 * @property {string} introduction -
 * @property {string} phoneNumbeer -
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
 * @property {string} phoneNumbeer -
 * @property {string} zipCode -
 * @property {string} createdtime -
 * @property {string} uid -
 * @property {string[]} availability -
 */
