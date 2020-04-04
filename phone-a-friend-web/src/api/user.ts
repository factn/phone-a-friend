import { db } from "../config/firebase";
import { UserDto, User, UserDtoWithTimePeriods } from "../model/user";
import { mapResponseError } from "./responseMappers";
import {
  Availability,
  DaysOfTheWeek,
  TIME_PERIOD_LOOKUP,
  AvailabilityDto,
  TimePeriodIndex,
  mapDayToDayOfWeek,
  mapDayOfWeekToDay,
} from "../model/availability";
import { as } from "../utils/types.util";
import moment from "moment-timezone";

const USERS_COLLECTIONS = "users";

export async function createUser(user: UserDto): Promise<void> {
  const userWithUTCAvailability = updateAvailabilitySlotsToUTCTimePeriods(user);
  return db
    .collection(USERS_COLLECTIONS)
    .doc(user.id)
    .set(userWithUTCAvailability)
    .catch(mapResponseError);
}

export async function getUser(userId: string): Promise<User | undefined> {
  return db
    .collection(USERS_COLLECTIONS)
    .doc(userId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return mapUTCTimePeriodsToLocalTime(
          as<UserDtoWithTimePeriods>(doc.data())
        );
      } else {
        return undefined;
      }
    })
    .catch(mapResponseError);
}

/**
 * Maps user availability to TimePeriods
 * @param user
 */
function updateAvailabilitySlotsToUTCTimePeriods(
  user: UserDto
): UserDtoWithTimePeriods {
  const dateTimeNow = new Date();
  const offsetAvailability = mapLocalTimePeriodsToUTC(
    user.availability,
    dateTimeNow
  );
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(offsetAvailability);
  delete user.availability;
  return {
    ...user,
    utcAvailability: offsetAvailability,
    timezone,
  };
}

/**
 * Maps local time to the UTC equivalent
 * @param availability
 * @param dateTime
 */
function mapLocalTimePeriodsToUTC(
  availability: Availability,
  dateTime: Date
): AvailabilityDto {
  const utcAvailability: AvailabilityDto = {
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
    const timePeriodIndexes = availability[day];

    timePeriodIndexes.forEach((index) => {
      const tempDate = new Date(dateTime.getTime());
      const dayOfTheWeek = mapDayToDayOfWeek(day);
      const hour = parseInt(index);

      // Set date to be of day {day}
      tempDate.setDate(
        7 - Math.abs(tempDate.getDay() - dayOfTheWeek) + tempDate.getDate()
      );

      // Set date hours with offset applied (may change day)
      tempDate.setHours(
        hour + calculateLocalToUTCOffset(tempDate.getTimezoneOffset()),
        0,
        0
      );

      const utcDay = mapDayOfWeekToDay(tempDate.getDay());
      const utcHourPeriod = as<TimePeriodIndex>(`${tempDate.getHours()}`);

      utcAvailability[utcDay].push(TIME_PERIOD_LOOKUP[utcHourPeriod]);
    });
  }

  return utcAvailability;
}

/**
 * Maps UTC times to local time equivalents
 * @param availability
 * @param dateTime
 */
function mapUTCTimePeriodsToLocalTime(user: UserDtoWithTimePeriods): User {
  const utcAvailability = user.utcAvailability;
  const timezone = user.timezone;
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
      const localHourPeriod = as<TimePeriodIndex>(`${localDateTime.hours()}`);

      localAvailability[localDay].push(localHourPeriod);
    });
  }

  delete user.utcAvailability;

  return {
    ...user,
    availability: localAvailability,
  };
}

/**
 * Rounds down to the nearrest two hours
 * @param timezoneOffset
 */
function calculateLocalToUTCOffset(timezoneOffset: number): number {
  const offsetToNearestTwoHours =
    2 * Math.floor(Math.floor(timezoneOffset / 120) / 2);
  return offsetToNearestTwoHours;
}

/**
 * Rounds up to the nearest two hours
 * @param timezoneOffset
 */
function calculateUTCToLocalOffset(timezoneOffset: number): number {
  const offsetToNearestTwoHours =
    2 * Math.ceil(Math.ceil(timezoneOffset / 120) / 2);
  return offsetToNearestTwoHours;
}
