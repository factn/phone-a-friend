const { db } = require("../config");

function updateUserAvailability(request, response) {
  let userID = request.body.userID;
  // isAvailable = request.body.isAvailable;
  isAvailable = true;
  let usersCollection = db.collection("users");
  usersCollection
    .where("uid", "==", userID)
    .get()
    .then(userSnapshot => {
      if (userSnapshot.empty) {
        let error = "Did not find any documents matching user id " + userID;
        console.log(error);
        response.status(404).send(error);
      } else {
        db.collection("users")
          .doc(userID)
          .update({ CanChat: isAvailable });
        response.status(200).send("updated");
      }
    })
    .catch(error => {
      console.log(
        "Hit an unexpected error when trying to update availablity ",
        error
      );
      response.status(500).send(error);
    });
}

module.exports = updateUserAvailability;
