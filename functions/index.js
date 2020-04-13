const { functions } = require("./src/config");
const airTableMatchingFunction = require("./src/match/airtable");
const firestoreMatchingFunction = require("./src/match/firestore");
const updateUserAvailability = require("./src/update/userAvailability");
const matchUsersAndVolunteers = require("./src/match/airtableScheduledMatch");

const { migrate } = require("./src/migrations/V1-oldAvailabilityToMap");

// exports.matchMeAirTable = functions.https.onRequest(airTableMatchingFunction);

// exports.matchMeNow = functions.https.onRequest(firestoreMatchingFunction);

/**
 * Run at 8am, 10am, 12pm, 2pm, 4pm, 6pm, 8pm, 10pm
 */
exports.scheduledmatchUsersAndVolunteers = functions.pubsub
  .schedule(functions.config().scheduledmatchvariables.intervals)
  .timeZone(functions.config().scheduledmatchvariables.timezone)
  .onRun((context) => {
    matchUsersAndVolunteers();
    return null;
  });

// exports.testingMatcher = functions.https.onRequest((req, res) => {
// matchUsersAndVolunteers();
// });

// exports.migrate = functions.https.onRequest(async (req, res) => {
// const result = await migrate();
// res.send(result);
// });

exports.reformatAvailability = functions.firestore
  .document("users/{userId}")
  .onCreate((snap, context) => {
    console.log("---NEW USER CREATED---");
    const newValue = snap.data();
    const timesAsArray = newValue.availability.split(",");
    const daysAsArray = newValue.days.split(",");
    return snap.ref.set(
      {
        ...newValue,
        availability: createAvailabilityObject(daysAsArray, timesAsArray),
      },
      { merge: true }
    );
  });

exports.reformatVolunteerAvailability = functions.firestore
  .document("volunteers/{volunteerId}")
  .onCreate((snap, context) => {
    console.log("---NEW VOLUNTEER CREATED---");
    const newValue = snap.data();
    const timesAsArray = newValue.availability.split(",");
    const daysAsArray = newValue.days.split(",");
    return snap.ref.set(
      {
        ...newValue,
        availability: createAvailabilityObject(daysAsArray, timesAsArray),
      },
      { merge: true }
    );
  });

const MONDAY = "Monday";
const TUESDAY = "Tuesday";
const WEDNESDAY = "Wednesday";
const THURSDAY = "Thursday";
const FRIDAY = "Friday";
const SATURDAY = "Saturday";
const SUNDAY = "Sunday";

/**
 *
 * @param {string[]} days
 * @param {string[]} times
 */
function createAvailabilityObject(days, times) {
  const hasSelectedDay = (day) => (days.includes(day) ? [...times] : []);
  return {
    [MONDAY.toLowerCase()]: hasSelectedDay(MONDAY),
    [TUESDAY.toLowerCase()]: hasSelectedDay(TUESDAY),
    [WEDNESDAY.toLowerCase()]: hasSelectedDay(WEDNESDAY),
    [THURSDAY.toLowerCase()]: hasSelectedDay(THURSDAY),
    [FRIDAY.toLowerCase()]: hasSelectedDay(FRIDAY),
    [SATURDAY.toLowerCase()]: hasSelectedDay(SATURDAY),
    [SUNDAY.toLowerCase()]: hasSelectedDay(SUNDAY),
  };
}
