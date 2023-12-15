import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firestoreAccount'; // Auth örneğinizi import edin

export default class PocketFirestoreAuthentication {
     async authenticate(email, password) {
          try {
               await signInWithEmailAndPassword(auth, email, password);
               return true;
          } catch (error) {
               throw new Error(error.message);
          }
     }
}
