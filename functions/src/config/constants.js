const USERS_COLLECTION = "users";
const VOLUNTEERS_COLLECTION = "volunteers";

const airTableFields = {
  availabilityStart: "availability_Start",
  availabilityEnd: "availability_End",
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

module.exports = {
  USERS_COLLECTION,
  VOLUNTEERS_COLLECTION,
  airTableFields
};
