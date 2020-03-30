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
    let volunteerCollection = db.collection('volunteers');

    let currentUserZipCode = null;
    let currentUsergenderPreference = null;
    let currentUserLanguage = null;

    let matchingVolunteersList = [];

    usersCollection.where('userID', '==', userID).get()
    .then(currentUserDoc => {
        if (currentUserDoc.empty) {
            error = "Did not find any users with id " + userID;
            console.log(error);
            response.send(error);
            }
            
        else {
                let matchingVolunteersSnapshot = null;
                currentUserZipCode = currentUserDoc.data().zipCode;
                currentUsergenderPreference = currentUserDoc.data().genderPreference;
                currentUserLanguage = currentUserDoc.data().currentUserLanguage;
                // might make sense to filter through "CanChat" flag first/create index?
                if (currentUsergenderPref != "no preference") {
                    matchingVolunteersSnapshot = volunteerCollection.where('canChat' == true).where('zipCode' == currentUserZipCode).where('language' == currentUserLanguage).where('gender' == currentUsergenderPreference);
                    }
                else {
                    matchingVolunteersSnapshot = volunteerCollection.where('canChat' == true).where('zipCode' == currentUserZipCode).where('language' == currentUserLanguage);
                    }
                
                    matchingVolunteersSnapshot.forEach(doc => {
                    matchingVolunteersList.push(doc);
                    });
         
                numOfMatches = matchingVolunteersList.length;
                console.log("Number of matches: " + numOfMatches);
                randomSelction = Math.floor((Math.random() * numOfMatches) + 0);
                console.log("Selected entry number: " + randomSelction);
                selectedVulunteerUID  = docList[randomSelction].id;
                response.send(selectedVulunteerUID);
            }
        })
    .catch(err => {
        console.log('Hit an error when trying to find a match', err);
        response.send(err, 500);
  });
});

