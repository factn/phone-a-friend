const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.updateUserAvailability = functions.https.onRequest((request, response) => {
    let usersCollection = db.collection('users');
    userID = request.body.userID;
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


exports.matchMe = functions.https.onRequest((request, response) => {
    let usersCollection = db.collection('users');
    usersCollection.where('CanChat', '==', true).get()
    .then(userSnapshot => {
        if (userSnapshot.empty) {
            error = "Did not find anyone available to chat at this time";
            console.log(error);
            response.send(error);
            }
        else {  
            let docList=[];
            userSnapshot.forEach(doc => {
                docList.push(doc);
                });
                
            numOfMatches = docList.length;
            console.log("Number of matches: " + numOfMatches);
            randomSelction = Math.floor((Math.random() * numOfMatches) + 0);
            console.log("Selected entry number: " + randomSelction);
            console.log(docList[randomSelction].data().PhoneNumber);
            selectedDocID = docList[randomSelction].id;
            console.log ("the id: " + selectedDocID);
            usersCollection.doc(selectedDocID).update({CanChat: false});
            response.send("Found ");
            }
    }) 
  .catch(err => {
    console.log('Hit an error when trying to find a match', err);
    response.send(err, 500);
  });
});
