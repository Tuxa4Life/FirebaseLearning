import React, { useState, useEffect } from "react";
import { onSnapshot, collection, deleteDoc, doc } from 'firebase/firestore'
import Card from "./Card";
import EditCard from "./EditCard";

const CardContainer = ({db}) => {
    const [data, setData] = useState([])
    const [updateState, setUpdateState] = useState(false)
    const [updateId, setUpdateId] = useState('')

    useEffect(() => {
        const usersRef = collection(db, 'Users')

        onSnapshot(usersRef, (snap) => {
            let data = []
            snap.docs.forEach(e => {
                data.unshift({...e.data(), id: e.id})
            })
        
            setData(data)
        })
    }, [])

    const deleteCard = (id) => {
        const targetDoc = doc(db, 'Users', id)
        deleteDoc(targetDoc)
    }

    const cards = data.map(e => {
        return <Card key={e.id} name={e.Name} surname={e.Surname} remove={() => deleteCard(e.id)} update={() => {
            setUpdateId(e.id)
            setUpdateState(!updateState)
        }}/>
    });
    
    return (
        <div style={{justifyContent:'center', marginTop: '50px'}} className="ui cards sixteen width row">
            { cards }
            { updateState ? <EditCard idToUpdate={updateId} db={db} close={() => setUpdateState(!updateState)} /> : null }
        </div>
    )
}

export default CardContainer;