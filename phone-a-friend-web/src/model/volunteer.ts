import { Gender } from "./gender";
import { Availability, UTCAvailabilityPeriods } from "./availability";

export type VolunteerDto = {
  id: string;
} & Volunteer;

export type Volunteer = {
  phoneNumber: string;
  name: string;
  email: string;
  country: string;
  zipcode: string;
  languages: string[];
  introduction: string;
  gender: Gender;
  dateOfBirth: string;
  localTimeAvailability: Availability;
  utcAvailability: UTCAvailabilityPeriods;
  timezone: string;
};
