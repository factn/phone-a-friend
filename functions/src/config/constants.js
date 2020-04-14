const USERS_COLLECTION = "users";
const VOLUNTEERS_COLLECTION = "volunteers";
const CURRENT_MATCHES_COLLECTION = "currentMatches";

const airTableFields = {
  availability: "availability",
  email: "email",
  gender: "gender",
  introduction: "introduction",
  language: "language",
  name: "name",
  surname: "name_surname",
  phoneNumber: "phoneNumber",
  yearBorn: "yearBorn",
  id: "uid",
  zipCode: "zipCode"
};

const TIME_PERIODS = {
  "8": "8am-10am",
  "10": "10am-12pm",
  "12": "12pm-2pm",
  "14": "2pm-4pm",
  "16": "4pm-6pm",
  "18": "6pm-8pm",
  "20": "8pm-10pm",
  "22": "10pm-12am"
};

const TIME_PERIODS_US = {
  "8": "08:00-10:00",
  "10": "10:00-12:00",
  "12": "12:00-14:00",
  "14": "14:00-16:00",
  "16": "16:00-18:00",
  "18": "18:00-20:00",
  "20": "20:00-22:00",
  "22": "22:00-00:00",
  "0": "00:00-02:00",
  "2": "02:00-04:00",
  "4": "04:00-06:00",
  "6": "06:00-08:00"
};

module.exports = {
  USERS_COLLECTION,
  VOLUNTEERS_COLLECTION,
  airTableFields,
  TIME_PERIODS,
  TIME_PERIODS_US,
  CURRENT_MATCHES_COLLECTION
};
