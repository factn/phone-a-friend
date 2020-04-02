const { functions } = require("./src/config");

const airTableMatchingFunction = require("./src/match/airtable");
const firestoreMatchingFunction = require("./src/match/firestore");
const updateUserAvailability = require("./src/update/userAvailability");
const matchUsersAndVolunteers = require("./src/match/airtableScheduledMatch");

// exports.updateUserAvailability = functions.https.onRequest(
// updateUserAvailability
// );

// exports.matchMeAirTable = functions.https.onRequest(airTableMatchingFunction);

// exports.matchMeNow = functions.https.onRequest(firestoreMatchingFunction);

/**
 * Run at 8am, 10am, 12pm, 2pm, 4pm, 6pm, 8pm, 10pm
 */
exports.scheduledAirtableMatcher = functions.https.onRequest(
  matchUsersAndVolunteers
);

exports.reformatAvailability = functions.firestore
  .document("users/{userId}")
  .onCreate((snap, context) => {
    console.log("---NEW USER CREATED---");
    const newValue = snap.data();
    const newAvailability = newValue.availability.split(",");
    return snap.ref.set(
      {
        ...newValue,
        availability: newAvailability
      },
      { merge: true }
    );
  });

exports.reformatVolunteerAvailability = functions.firestore
  .document("volunteers/{volunteerId}")
  .onCreate((snap, context) => {
    console.log("---NEW VOLUNTEER CREATED---");
    const newValue = snap.data();
    const newAvailability = newValue.availability.split(",");
    return snap.ref.set(
      {
        ...newValue,
        availability: newAvailability
      },
      { merge: true }
    );
  });
