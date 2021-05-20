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

        if(!window._initializedFirebase) {            

            firebase.initializeApp(this._config);

            firebase.firestore().settings({
                timestampsInSnapshot: true
            });

            window._initializedFirebase = true;

        }

    }

    static db() {

        return firebase.firestore();

    }

    static hd() {

        return firebase.storage();

    }

    initAuth() {

        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then((result)=>{

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user, 
                    token
                });


            }).catch(err=>{

                f(err);
            
            });

        })

    }


}