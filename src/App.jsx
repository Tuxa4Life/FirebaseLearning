import React, { useState } from "react";
import { initializeApp } from 'firebase/app';
import { 
    getFirestore, collection, 
    addDoc, serverTimestamp, 
} from 'firebase/firestore'
import CardContainer from "./Components/CardContainer";
import NewUserFrom from "./Components/NewUserForm";

const firebaseConfig = {
    apiKey: "AIzaSyBsL2lQfSTi6PVncaIVWMWjaSkONDVF4g0",
    authDomain: "steel-wharf-345314.firebaseapp.com",
    projectId: "steel-wharf-345314",
    storageBucket: "steel-wharf-345314.appspot.com",
    messagingSenderId: "570997900256",
    appId: "1:570997900256:web:c4e0e5062dbe3553986185",
    measurementId: "G-E1FHRJQVLB"
};

initializeApp(firebaseConfig)
const db = getFirestore()
const usersRef = collection(db, 'Users')

const addNewUser = (e) => {
    e.preventDefault()
    
    addDoc(usersRef, {
        Name: e.target.firstName.value,
        Surname: e.target.lastName.value,
        Date: serverTimestamp(),
    })
    .then(() => {
        e.target.reset()
    })
}

const App = () => {
    const [newForm, setNewForm] = useState(false)

    return (
        <div className="ui centered grid">
            <button style={{
                position: 'fixed',
                top: '20px', right: '20px'
            }} className="ui icon button" onClick={() => setNewForm(!newForm)}>
                <i className="user plus icon"></i>
            </button>
            { newForm ? <NewUserFrom addUser={addNewUser}/> : null }

            <CardContainer db={db}/>
        </div>
    )
}

export default App;