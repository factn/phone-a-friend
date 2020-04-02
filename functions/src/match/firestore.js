const { db } = require("../config");

function firestoreMatcher(request, response) {
  let userID = request.body.userID;
  console.log(request.body);
  console.log(userID);
  let usersCollection = db.collection("users");
  let volunteersCollection = db.collection("volunteers");
  usersCollection
    .doc(userID)
    .get()
    .then(currentUserDoc => {
      if (!currentUserDoc.exists) {
        error = "Did not find any users with id " + userID;
        console.log(error);
        response.status(404).send(error);
      } else {
        console.log("User found");
        let matchingVolunteersList = [];
        let matchingVolunteersSnapshot;
        let currentUserZipCode = currentUserDoc.data().zipCode;
        let currentUsergenderPreference = currentUserDoc.data()
          .genderPreference;
        let currentUserLanguage = currentUserDoc.data().language;
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let nowInMinutes = hours * 60 + minutes;
        let dayOfWeek = now.getDay();
        let today = getDay(dayOfWeek);

        if (currentUsergenderPreference != "noPreference") {
          matchingVolunteersSnapshot = volunteersCollection
            .where(`${today}.start`, "<", nowInMinutes)
            .where("languages", "array-contains", currentUserLanguage)
            .where("canChat", "==", true)
            .where("zipCode", "==", currentUserZipCode)
            .where("gender", "==", currentUsergenderPreference);
        } else {
          matchingVolunteersSnapshot = volunteersCollection
            .where(`${today}.start`, "<", nowInMinutes)
            .where("languages", "array-contains", currentUserLanguage)
            .where("canChat", "==", true)
            .where("zipCode", "==", currentUserZipCode);
        }

        matchingVolunteersSnapshot.get().then(matchingVolunteersSnapshot => {
          if (matchingVolunteersSnapshot.empty) {
            message = "Could not find any available matches for user " + userID;
            console.log(message);
            response.status(200).send(null);
          } else {
            matchingVolunteersSnapshot.forEach(doc => {
              let windowEnd = doc.get(`${today}.end`);
              if (windowEnd >= nowInMinutes + 30) {
                matchingVolunteersList.push(doc);
              }
            });
            numOfMatches = matchingVolunteersList.length;
            if (numOfMatches) {
              randomSelction = Math.floor(Math.random() * numOfMatches + 0);
              selectedVulunteerUID = matchingVolunteersList[randomSelction].id;
              response.status(200).send(selectedVulunteerUID);
            } else {
              message =
                "Could not find any available matches for user " + userID;
              console.log(message);
              response.status(200).send(null);
            }
          }
        });
      }
    })
    .catch(error => {
      console.log("Hit an unexpected error when trying to find a match", error);
      response.status(500).send(error);
    });
}

function getDay(dayOfWeek) {
  let today = "";
  switch (dayOfWeek) {
    case 1:
      today = "mon";
      break;
    case 2:
      today = "tue";
      break;
    case 3:
      today = "wed";
      break;
    case 4:
      today = "thu";
      break;
    case 5:
      today = "fri";
      break;
    case 6:
      today = "sat";
      break;
    case 7:
      today = "sun";
      break;
  }
  return today;
}

module.exports = firestoreMatcher;
