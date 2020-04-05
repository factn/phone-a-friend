import { GenderPreference } from "./gender";
import { Availability, AvailabilityDto } from "./availability";

type BaseUser = {
  phoneNumber: string;
  name: string;
  country: string;
  zipcode: string;
  languages: string[];
  introduction: string;
  genderPreference: GenderPreference;
};

type BaseUserDto = {
  id: string;
} & BaseUser;

export type User = BaseUser & {
  availability: Availability;
};

export type UserDto = {
  id: string;
} & User;

export type UserDtoWithTimePeriods = {
  utcAvailability: AvailabilityDto;
  timezone: string;
} & BaseUserDto;
