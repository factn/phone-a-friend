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
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday"];
const times = ["6pm-8pm", "4pm-6pm"];
console.log(createAvailabilityObject(days, times));
