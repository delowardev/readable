import app from 'firebase/app';

const config = {
  apiKey: "AIzaSyBIHGKdyWx1nKB5oc5ho1prz6uy2l0FToI",
  authDomain: "readable-f8dc0.firebaseapp.com",
  databaseURL: "https://readable-f8dc0.firebaseio.com",
  projectId: "readable-f8dc0",
  storageBucket: "readable-f8dc0.appspot.com",
  messagingSenderId: "912883312162",
  appId: "1:912883312162:web:4378173556270da44acc7b",
  measurementId: "G-3F4M72F79D",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
 
export default Firebase;