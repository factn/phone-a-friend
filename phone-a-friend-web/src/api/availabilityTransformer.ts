import {
  Availability,
  UTCAvailabilityPeriods,
  DaysOfTheWeek,
  mapDayToDayOfWeek,
  mapDayOfWeekToDay,
  TimePeriodIndex,
  TIME_PERIOD_LOOKUP,
  getStartingHourOfTimePeriod,
  getTimePeriodForHour,
} from "../model/availability";
import { as } from "../utils/types.util";
import moment from "moment-timezone";

/**
 * Maps local time to the UTC equivalent
 * @param availability
 * @param dateTime
 */
export function mapLocalTimePeriodsToUTC(
  availability: Availability
): {
  utcAvailability: UTCAvailabilityPeriods;
  timezone: string;
} {
  const dateTimeNow = new Date();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const utcAvailability: UTCAvailabilityPeriods = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  };

  for (const d in availability) {
    const day: DaysOfTheWeek = as<DaysOfTheWeek>(d);
    const timePeriods = availability[day];

    timePeriods.forEach((timePeriod) => {
      const tempDate = new Date(dateTimeNow.getTime());
      const dayOfTheWeek = mapDayToDayOfWeek(day);
      const timePeriodStartingHour = parseInt(
        getStartingHourOfTimePeriod(timePeriod)
      );

      // Set date to be of day {day}
      tempDate.setDate(
        7 - tempDate.getDay() + dayOfTheWeek + tempDate.getDate()
      );

      // Set date hours with offset applied (may change day)
      tempDate.setHours(
        timePeriodStartingHour +
          calculateLocalToUTCOffset(tempDate.getTimezoneOffset()),
        0,
        0
      );

      const utcDay = mapDayOfWeekToDay(tempDate.getDay());
      const utcHourPeriod = as<TimePeriodIndex>(`${tempDate.getHours()}`);

      utcAvailability[utcDay].push(TIME_PERIOD_LOOKUP[utcHourPeriod]);
    });
  }

  return {
    utcAvailability,
    timezone,
  };
}

/**
 * Maps UTC times to local time equivalents
 * @param availability
 * @param dateTime
 */
export function mapUTCTimePeriodsToLocalTime(
  utcAvailability: UTCAvailabilityPeriods,
  timezone: string
): {
  availability: Availability;
  timezone: string;
} {
  const localAvailability: Availability = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  };

  for (const d in utcAvailability) {
    const day: DaysOfTheWeek = as<DaysOfTheWeek>(d);
    const timePeriods = utcAvailability[day];

    timePeriods.forEach((timePeriod) => {
      const tempDate = new Date(Date.now());
      const dayOfTheWeek = mapDayToDayOfWeek(day);
      const hour = parseInt(timePeriod.split(":")[0]);

      // Set date to be of day {day}
      tempDate.setDate(
        7 - Math.abs(tempDate.getDay() - dayOfTheWeek) + tempDate.getDate()
      );

      // Build current date string without any offset
      const dateString = `${tempDate.getUTCFullYear()}-${
        tempDate.getUTCMonth() + 1
      }-${
        7 - Math.abs(tempDate.getDay() - dayOfTheWeek) + tempDate.getDate()
      } ${hour}:00`;

      const utcDateMoment = moment(dateString);
      const offsetDateMoment = moment.tz(dateString, timezone);

      const offset = calculateUTCToLocalOffset(
        offsetDateMoment.diff(utcDateMoment) / 1000 / 60
      );
      const localDateTime = utcDateMoment.add(offset, "hours");

      const localDay = mapDayOfWeekToDay(localDateTime.day());
      const localTimePeriodStartingHour = as<TimePeriodIndex>(
        `${localDateTime.hours()}`
      );
      const localHourPeriod = getTimePeriodForHour(localTimePeriodStartingHour);

      localAvailability[localDay].push(localHourPeriod);
    });
  }

  return {
    availability: localAvailability,
    timezone,
  };
}

/**
 * Rounds down to the nearest two hours (local to UTC)
 * @param timezoneOffset
 */
function calculateLocalToUTCOffset(timezoneOffset: number): number {
  const offsetToNearestTwoHours =
    2 * Math.floor(Math.floor(timezoneOffset / 120) / 2);
  return offsetToNearestTwoHours;
}

/**
 * Rounds up to the nearest two hours (UTC to local)
 * @param timezoneOffset
 */
function calculateUTCToLocalOffset(timezoneOffset: number): number {
  const offsetToNearestTwoHours =
    2 * Math.ceil(Math.ceil(timezoneOffset / 120) / 2);
  return offsetToNearestTwoHours;
}
