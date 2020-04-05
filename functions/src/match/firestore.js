const { db } = require("../config");

function firestoreMatcher(request, response) {
  let userID = request.body.userID;
  console.log("User ID from request: " + userID);
  let usersCollection = db.collection("users");
  let volunteersCollection = db.collection("volunteers");
  return usersCollection
    .doc(userID)
    .get()
    .then(currentUserDoc => {
      if (!currentUserDoc.exists) {
        console.log("Did not find any users with id " + userID);
        response.status(404).send("Did not find any users with id " + userID);
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
            console.log(
              "Could not find any available matches for user " + userID
            );
            return response.status(200).send(null);
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
              return response.status(200).send(selectedVulunteerUID);
            } else {
              console.log(
                "Could not find any available matches for user " + userID
              );
              return response.status(200).send(null);
            }
          }
        });
      }
    })
    .catch(error => {
      console.log("Hit an unexpected error when trying to find a match", error);
      return response.status(500).send(error);
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
