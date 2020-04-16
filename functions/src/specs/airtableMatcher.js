const { db } = require("../config");
const { VOLUNTEERS_COLLECTION } = require("../config/constants");

function test() {
  console.log("starting test");
  const users = db
    .collection(VOLUNTEERS_COLLECTION)
    .where("availability.monday", "array-contains", "6pm-8pm")
    .get()
    .then((snapshot) => snapshot.forEach((doc) => console.log(doc.data())));
  return users;
}

module.exports = {
  test,
};
