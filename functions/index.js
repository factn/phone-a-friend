const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.updateUserAvailability = functions.https.onRequest((request, response) => {
    let usersCollection = db.collection('users');
    let userID = request.body.userID;
    isAvailable = request.body.isAvailable;
    usersCollection.where('userID', '==', userID).get()
    .then(userSnapshot => {
        if (userSnapshot.empty) {
            let error = "Did not find any documents matching user id " + userID;
            console.log(error);
            response.status(404).send(error);
            }
        else {
            db.collection('users').doc(userID).update({CanChat: isAvailable});
        }
    })
    .catch(error => {
        console.log("Hit an unexpected error when trying to update availablity ", error);
        response.status(500).send(error);
      });
});

// curl -X POST <local path to firebase fuunction> -H "Content-Type:application/json"  -d '{"userID":"<id>"}'
exports.matchMeNow = functions.https.onRequest((request, response) => {
    let userID = request.body.userID;
    let usersCollection = db.collection('users');
    let volunteersCollection = db.collection('volunteers');
    usersCollection.doc(userID).get()
    .then(currentUserDoc => {
        if (!currentUserDoc.exists) {
            error = "Did not find any users with id " + userID;
            console.log(error);
            response.status(404).send(error);
            }

        else {
                let matchingVolunteersList=[];
                let matchingVolunteersSnapshot;
                let currentUserZipCode = currentUserDoc.data().zipCode;
                let currentUsergenderPreference = currentUserDoc.data().genderPreference;
                let currentUserLanguage = currentUserDoc.data().language;
                // might make sense to filter through "CanChat" flag first/create index?
                if (currentUsergenderPreference != "no preference") {
                    matchingVolunteersSnapshot = volunteersCollection.where('languages', 'array-contains', currentUserLanguage).where('canChat', '==', true).where('zipCode', '==', currentUserZipCode).where('gender', '==', currentUsergenderPreference);
                    }
                else {
                    matchingVolunteersSnapshot = volunteersCollection.where('languages', 'array-contains', currentUserLanguage).where('canChat', '==', true).where('zipCode', '==', currentUserZipCode);
                    }
                
                    matchingVolunteersSnapshot.get()
                    .then(matchingVolunteersSnapshot => {
                        if (matchingVolunteersSnapshot.empty) {
                            message = "Could not find any available matches for user " + userID;
                            console.log(message);
                            response.status(200).send(null);
                            }
                        else {
                        matchingVolunteersSnapshot.forEach(doc=> {
                            console.log("id: " + doc.id);
                            matchingVolunteersList.push(doc);
                            numOfMatches = matchingVolunteersList.length;
                            console.log("Number of matches: " + numOfMatches);
                            randomSelction = Math.floor((Math.random() * numOfMatches) + 0);
                            console.log("Selected entry number: " + randomSelction);
                            selectedVulunteerUID  = matchingVolunteersList[randomSelction].id;
                            response.status(200).send(selectedVulunteerUID);
                            })
                        }
                    })
                }
        })
    .catch(error => {
        console.log('Hit an unexpected error when trying to find a match', error);
        response.status(500).send(error);
  });
});