const { functions } = require("./src/config");

const airTableMatchingFunction = require("./src/match/airtable");
const firestoreMatchingFunction = require("./src/match/firestore");
const updateUserAvailability = require("./src/update/userAvailability");
const matchUsersAndVolunteers = require("./src/match/airtableScheduledMatch");
const saveUserFromAirtable = require("./src/save/userFromAirtable");

exports.updateUserAvailability = functions.https.onRequest(
  updateUserAvailability
);

exports.matchMeAirTable = functions.https.onRequest(airTableMatchingFunction);

exports.matchMeNow = functions.https.onRequest(firestoreMatchingFunction);

exports.scheduledAirtableMatcher = functions.https.onRequest(
  matchUsersAndVolunteers
);

exports.saveUserFromAirtable = functions.https.onRequest(saveUserFromAirtable);
