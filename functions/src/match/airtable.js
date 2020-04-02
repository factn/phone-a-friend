const { db } = require("../config");

function airTableMatching(request, response) {
  let userID = request.body.userID;
  let usersCollection = db.collection("users");
  let volunteersCollection = db.collection("volunteers");
  usersCollection
    .where("uid", "==", userID)
    .get()
    .then(userSnapshot => {
      if (userSnapshot.empty) {
        error = "Did not find any users with id " + userID;
        console.log(error);
        response.status(404).send(error);
      } else {
        id = userSnapshot.docs[0].id; //assumimng only one doc for now. Should add a check for this
        usersCollection
          .doc(id)
          .get()
          .then(currentUserDoc => {
            let matchingVolunteersList = [];
            let matchingVolunteersSnapshot;
            let currentUsergenderPreference = currentUserDoc.data().gender;
            let currentUserLanguage = currentUserDoc.data().language;
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let nowInMinutes = hours * 60 + minutes + 60; // adding 60 minute to adjust to UK time
            console.log("Now: " + nowInMinutes);

            if (
              currentUsergenderPreference == "Male" ||
              currentUsergenderPreference == "Female"
            ) {
              matchingVolunteersSnapshot = volunteersCollection
                .where("availability_Start", "<=", nowInMinutes)
                .where("languages", "==", currentUserLanguage)
                .where("gender", "==", currentUsergenderPreference);
            } else {
              matchingVolunteersSnapshot = volunteersCollection
                .where("availability_Start", "<=", nowInMinutes)
                .where("languages", "==", currentUserLanguage);
            }

            matchingVolunteersSnapshot
              .get()
              .then(matchingVolunteersSnapshot => {
                if (matchingVolunteersSnapshot.empty) {
                  message =
                    "Could not find any available matches for user " + userID;
                  console.log(message);
                  response.status(200).send(message);
                } else {
                  console.log(
                    "Number of potential matches: " +
                      matchingVolunteersSnapshot.size
                  );
                  matchingVolunteersSnapshot.forEach(doc => {
                    console.log(
                      "availability start: " + doc.get("availability_Start")
                    );
                    console.log(
                      "availability end: " + doc.get("availability_End")
                    );
                    if (doc.get("availability_End") >= nowInMinutes) {
                      matchingVolunteersList.push(doc);
                    }
                  });
                  numOfMatches = matchingVolunteersList.length;
                  if (numOfMatches) {
                    randomSelction = Math.floor(
                      Math.random() * numOfMatches + 0
                    );
                    response
                      .status(200)
                      .send(
                        matchingVolunteersList[randomSelction].data().email
                      );
                  } else {
                    message =
                      "Could not find any available matches for user" + userID;
                    console.log(message);
                    response.status(200).send(null);
                  }
                }
              });
          });
      }
    })
    .catch(error => {
      console.log("Hit an unexpected error when trying to find a match", error);
      response.status(500).send(error);
    });
}

module.exports = airTableMatching;
