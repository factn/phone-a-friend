// var serviceAccount = require("../../.env.airtable.json");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// admin.initializeApp({
// credential: admin.credential.cert(serviceAccount),
// databaseURL: "https://phoneafriend-airtable.firebaseio.com",
// });
admin.initializeApp();
const db = admin.firestore();
const createTimestamp = () => admin.firestore.FieldValue.serverTimestamp();
const deleteField = admin.firestore.FieldValue.delete;

module.exports = {
  db,
  functions,
  createTimestamp,
  deleteField,
};
