import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


export class Firebase {

    constructor() {

         // Your web app's Firebase configuration
        this._config = {
            apiKey: "AIzaSyAjQV9_dbBpgO-Tbh85zuAzIeuTbulai-w",
            authDomain: "whatsapp-clone-10d38.firebaseapp.com",
            projectId: "whatsapp-clone-10d38",
            storageBucket: "whatsapp-clone-10d38.appspot.com",
            messagingSenderId: "151502959867",
            appId: "1:151502959867:web:829119f1a3214fda772c5e"
        };
        
        this.init();

    }

    init() {

        if(!this._initialized) {            

            // Initialize Firebase
            firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshot: true
            });

            this._initialized = true;

        }

    }

    static db() {

        return firebase.firestore();

    }

    static hd() {

        return firebase.storage();

    }


}