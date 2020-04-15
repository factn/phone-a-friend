const { functions, deleteField } = require("./src/config");
const matchUsersAndVolunteers = require("./src/match/airtableScheduledMatch");
const matchUsersAndVolunteersUS = require("./src/match/ScheduledMatch");

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

const allDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

exports.reformatAvailability = functions.firestore
  .document("users/{userId}")
  .onCreate((snap, context) => {
    console.log("---NEW USER CREATED---");
    const newValue = snap.data();
    const timesAsArray = newValue.availability
      ? newValue.availability.split(",")
      : [];
    const daysAsArray = newValue.days ? newValue.days.split(",") : allDays;
    return snap.ref.set(
      {
        ...newValue,
        availability: createAvailabilityObject(daysAsArray, timesAsArray),
        days: deleteField(),
      },
      { merge: true }
    );
  });

exports.reformatVolunteerAvailability = functions.firestore
  .document("volunteers/{volunteerId}")
  .onCreate((snap, context) => {
    console.log("---NEW VOLUNTEER CREATED---");
    const newValue = snap.data();
    const timesAsArray = newValue.availability
      ? newValue.availability.split(",")
      : [];
    const daysAsArray = newValue.days ? newValue.days.split(",") : allDays;
    return snap.ref.set(
      {
        ...newValue,
        availability: createAvailabilityObject(daysAsArray, timesAsArray),
        days: deleteField(),
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
  const hasSelectedDay = (day) =>
    days.includes(day) || days.includes("Anytime") ? [...times] : [];
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
