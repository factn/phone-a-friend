const { db, deleteField } = require("../config/index");
const {
  VOLUNTEERS_COLLECTION,
  USERS_COLLECTION,
} = require("../config/constants");

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

function needsMigrating(volunteer) {
  return volunteer.availability && Array.isArray(volunteer.availability);
}

async function migrate() {
  const batch = db.batch();
  let changes = [];
  await db
    .collection(USERS_COLLECTION)
    // .collection(VOLUNTEERS_COLLECTION)
    .limit(66)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const volunteer = doc.data();
        if (needsMigrating(volunteer)) {
          const daysArray =
            volunteer.days && volunteer.days.length > 0
              ? volunteer.days.split(",")
              : [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ];
          const availabilityArray = volunteer.availability
            ? volunteer.availability
            : [];
          const fieldsToUpdate = {
            availability: createAvailabilityObject(
              daysArray,
              availabilityArray
            ),
            days: deleteField(),
          };
          changes.push(doc.ref.id);
          batch.set(doc.ref, fieldsToUpdate, { merge: true });
        } else {
          console.log("not migrating " + volunteer.uid);
        }
      });
    });

  // return changes;

  return batch.commit().then((commitResponse) => {
    console.log(commitResponse);
    return changes;
  });
}

module.exports = {
  migrate,
};
