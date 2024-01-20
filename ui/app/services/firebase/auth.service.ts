import { GoogleAuthProvider, UserCredential, getAuth, signInWithPopup } from "firebase/auth";
import firebaseService from "./firebase.service";

class AuthService {
  SignInWithGooglePopup(): Promise<UserCredential> {
    const auth = this.getAuthInstance();
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider);
  }

  public getAuthInstance = () => {
    return getAuth(firebaseService.getFirebaseAppInstance());
  }

}

const authService = new AuthService();

export default authService;
