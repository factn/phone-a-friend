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
            let error = "Did not any documents matching this user";
            console.log(error);
            response.send(error);
            }
        else {
            db.collection('users').doc(userID).update({CanChat: isAvailable});
        }
    })
    .catch(err => {
        console.log("Hit an error when trying to update availablity ", err);
        response.send(err, 500);
      });
});

exports.matchMeNow = functions.https.onRequest((request, response) => {
    let userID = request.body.userID;
    let usersCollection = db.collection('users');
    let volunteersCollection = db.collection('volunteers');

    usersCollection.doc(userID).get()
    .then(currentUserDoc => {
        if (currentUserDoc.empty) {
            error = "Did not find any users with id " + userID;
            console.log(error);
            response.status(500).send(error);
            }

        else {
                let matchingVolunteersList=[];
                let matchingVolunteersSnapshot;
                let currentUserZipCode = currentUserDoc.data().zipCode;
                let currentUsergenderPreference = currentUserDoc.data().genderPreference;
                let currentUserLanguage = currentUserDoc.data().language;
                // might make sense to filter through "CanChat" flag first/create index?
                if (currentUsergenderPreference != "no preference") {
                    matchingVolunteersSnapshot = volunteersCollection.where('canChat', '==', true).where('zipCode', '==', currentUserZipCode).where('language', '==', currentUserLanguage).where('gender', '==', currentUsergenderPreference);
                    }
                else {
                    matchingVolunteersSnapshot = volunteersCollection.where('canChat', '==', true).where('zipCode', '==', currentUserZipCode).where('language', '==', currentUserLanguage);
                    }
                
                    matchingVolunteersSnapshot.get()
                .then(matchingVolunteersSnapshot => {
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
                });
                
            }
        })
    .catch(err => {
        console.log('Hit an error when trying to find a match', error);
        response.status(500).send(error);
  });
});