// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function StartFirebase(){
        const firebaseConfig = {
        apiKey: "AIzaSyDpzcTGzTRkl0EDNvcSihFI6NGosZ82jbA",
        authDomain: "menuze-9fa2f.firebaseapp.com",
        databaseURL: "https://menuze-9fa2f-default-rtdb.firebaseio.com",
        projectId: "menuze-9fa2f",
        storageBucket: "menuze-9fa2f.appspot.com",
        messagingSenderId: "1049639339374",
        appId: "1:1049639339374:web:3092a0f17982db00b86d7f",
        measurementId: "G-TFFCB0XKCJ"
        };

        const app = initializeApp(firebaseConfig);

        return getDatabase(app)

}

export default StartFirebase;