import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
const initializationAuth = () => {
    initializeApp(firebaseConfig);
}
export default initializationAuth;