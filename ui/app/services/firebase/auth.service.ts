import { GoogleAuthProvider, UserCredential, getAuth, signInWithPopup } from "firebase/auth";
import firebaseService from "./firebase.service";

class AuthService {
  SignInWithGooglePopup(): Promise<UserCredential> {
    const auth = getAuth(firebaseService.getFirebaseAppInstance());
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider);
  }

}

const authService = new AuthService();

export default authService;
