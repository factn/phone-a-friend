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
  zipCode: "zipCode",
};

const TIME_PERIODS = {
  "8": "8am-10am",
  "10": "10am-12pm",
  "12": "12pm-2pm",
  "14": "2pm-4pm",
  "16": "4pm-6pm",
  "18": "6pm-8pm",
  "20": "8pm-10pm",
  "22": "10pm-12am",
};

module.exports = {
  USERS_COLLECTION,
  VOLUNTEERS_COLLECTION,
  airTableFields,
  TIME_PERIODS,
  CURRENT_MATCHES_COLLECTION,
};
