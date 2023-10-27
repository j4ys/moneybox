import { FirebaseApp, initializeApp } from "firebase/app";
import FirebaseConfig from "../../configs/firebase.config";

class FirebaseService {
  private static _firebaseApp: FirebaseApp = initializeApp(FirebaseConfig);

  getFirebaseAppInstance(): FirebaseApp {
    return FirebaseService._firebaseApp;
  }
}

const firebaseService = new FirebaseService();

export default firebaseService;

