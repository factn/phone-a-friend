var serviceAccount = require("../../.env.airtable.json");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://phoneafriend-dev.firebaseio.com"
});
const db = admin.firestore();

module.exports = {
  db,
  functions
};
