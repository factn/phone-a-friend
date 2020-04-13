import { GenderPreference, Gender } from './gender';
import { Availability, UTCAvailabilityPeriods } from './availability';

export type User = {
  phoneNumber: string;
  name: string;
  email: string;
  country: string;
  zipcode: string;
  languages: string[];
  introduction: string;
  genderPreference: GenderPreference;
  gender: Gender;
  localTimeAvailability: Availability;
  utcAvailability: UTCAvailabilityPeriods;
  timezone: string;
};

export type UserDto = {
  id: string;
} & User;
