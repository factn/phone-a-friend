const { functions } = require("./src/config");

const airTableMatchingFunction = require("./src/match/airtable");
const firestoreMatchingFunction = require("./src/match/firestore");
const updateUserAvailability = require("./src/update/userAvailability");

exports.updateUserAvailability = functions.https.onRequest(
  updateUserAvailability
);

exports.matchMeAirTable = functions.https.onRequest(airTableMatchingFunction);

exports.matchMeNow = functions.https.onRequest(firestoreMatchingFunction);
