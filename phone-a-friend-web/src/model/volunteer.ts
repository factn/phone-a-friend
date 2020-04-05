import { Gender } from "./gender";
import { Availability } from "./availability";

export type VolunteerDto = {
  id: string;
} & Volunteer;

export type Volunteer = {
  phoneNumber: string;
  name: string;
  country: string;
  zipcode: string;
  languages: string[];
  introduction: string;
  gender: Gender;
  dateOfBirth: string;
  canChat: boolean;
  availability: Availability;
};
