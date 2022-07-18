import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get, onValue } from "firebase/database";



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
        console.log(`DB Connected`)
        const app_db = getDatabase(app);

        const dbRef = ref(app_db);

        onValue(dbRef,(snapshot)=>{
                let records = [];
                snapshot.forEach(chilsSnapShot => {
                        let keyName = chilsSnapShot.key;
                        let data = chilsSnapShot.val();
                        console.log(keyName)
                        records.push({key:keyName, data:data});
                })
                console.log(records)
                
        })

        return app_db

}

export default StartFirebase;