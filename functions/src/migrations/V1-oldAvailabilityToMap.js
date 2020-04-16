const { db } = require("../config/index");
const { VOLUNTEERS_COLLECTION } = require("../config/constants");

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

async function migrate() {
  const batch = db.batch();

  await db
    .collection(VOLUNTEERS_COLLECTION)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const volunteer = doc.data();
        const fieldsToUpdate = {
          availability: createAvailabilityObject(
            volunteer.days.split(","),
            volunteer.availability
          ),
        };
        batch.set(doc.ref, fieldsToUpdate, { merge: true });
      });
    });

  return batch.commit().then((commitResponse) => {
    console.log(commitResponse);
    return;
  });
}

module.exports = {
  migrate,
};
