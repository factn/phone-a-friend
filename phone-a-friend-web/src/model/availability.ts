import { as } from "../utils/types.util";

export const TIME_PERIOD_LOOKUP = {
  "0": "00:00-02:00",
  "2": "02:00-04:00",
  "4": "04:00-06:00",
  "6": "06:00-08:00",
  "8": "08:00-10:00",
  "10": "10:00-12:00",
  "12": "12:00-14:00",
  "14": "14:00-16:00",
  "16": "16:00-18:00",
  "18": "18:00-20:00",
  "20": "20:00-22:00",
  "22": "22:00-00:00",
} as const;

export type DaysOfTheWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type TimePeriodIndex = keyof typeof TIME_PERIOD_LOOKUP;
export type TimePeriod = typeof TIME_PERIOD_LOOKUP[TimePeriodIndex];

export type Availability = {
  [day in DaysOfTheWeek]: TimePeriodIndex[];
};

export type AvailabilityDto = {
  [day in DaysOfTheWeek]: TimePeriod[];
};

export const emptyAvailability: Availability = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};

export function mapDayToDayOfWeek(day: DaysOfTheWeek): number {
  switch (day) {
    case "sunday":
      return 0;
    case "monday":
      return 1;
    case "tuesday":
      return 2;
    case "wednesday":
      return 3;
    case "thursday":
      return 4;
    case "friday":
      return 5;
    case "saturday":
      return 6;
  }
}

export function mapDayOfWeekToDay(index: number): DaysOfTheWeek {
  const i = as<0 | 1 | 2 | 3 | 4 | 5 | 6>(index);
  switch (i) {
    case 0:
      return "sunday";
    case 1:
      return "monday";
    case 2:
      return "tuesday";
    case 3:
      return "wednesday";
    case 4:
      return "thursday";
    case 5:
      return "friday";
    case 6:
      return "saturday";
  }
}
