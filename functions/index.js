const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));
var serviceAccount = require('./permissions.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://bingle-backend.firebaseio.com'
});

////// line (1) through (6) => (1) load in your permissions file and then (2) use it to initialize your application. ////
const db = admin.firestore();

app.get('/hello-world', (req, res) => {
  return res.status(200).send('Hello World!');
});

// Create a new user
app.post('/api/create/user', (req, res) => {
  (async () => {
    try {
      await db
        .collection('users')
        .doc('/' + req.body.id + '/')
        .create({
          blurb: req.body.blurb,
          bootcamp: req.body.bootcamp,
          followers: [],
          following: [],
          name: req.body.name,
          photo: 'https://api.adorable.io/avatars/285/abott@adorable.png',
          email: req.body.email,
          projects: [],
          title: req.body.title,
          github: ''
        });
      return res.status(200).send();
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  })();
});

// GET users
app.get("/api/read/users", (req, res) => {
  (async () => {
    try {
      let query = db.collection("users");
      let response = [];
      await query.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        for (let doc of docs) {
            const selectedItem = {
              id: doc.id,
              name: doc.data().name,
              email: doc.data().email,
              bootcamp: doc.data().bootcamp,
              followers: doc.data().followers,
              following: doc.data().following,
              blurb: doc.data().blurb,
              github: doc.data().github,
              photo: doc.data().photo,
              projects: doc.data().projects,
              title: doc.data().title
            };
            console.log(`Current Doc: ${doc}`);
            response.push(selectedItem);
        }
        return response;
      });
      return res.status(200).send(response);
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  })();
});
exports.app = functions.https.onRequest(app);
