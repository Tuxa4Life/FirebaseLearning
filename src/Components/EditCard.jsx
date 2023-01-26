import React from "react";
import { doc, updateDoc } from "firebase/firestore";

const EditCard = ({ close, db, idToUpdate }) => {

    const _updateDoc = (e) => {
        e.preventDefault()
        const targetDoc = doc(db, 'Users', idToUpdate)
        const data = {}
        
        if (e.target.firstName.value) {
            data.Name = e.target.firstName.value
        }
        if (e.target.lastName.value) {
            data.Surname = e.target.lastName.value
        }

        updateDoc(targetDoc, data)
            .then(() => {
                e.target.reset()
                close()
            })
    }

    return (
        <div style={{
            width: '100%', height: '100vh',
            position: 'fixed',
            top: '0', bottom: '0',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <form onSubmit={_updateDoc} style={{
                backgroundColor: 'white', 
                border: '1px black solid', borderRadius: '10px',
                padding: '10px', minWidth: '200px', width: '300px'
            }} className="ui form">
                <div className="field">
                    <label>First Name</label>
                    <input type="text" name="firstName" placeholder="First Name" />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="Last Name" />
                </div>
                <button className="ui button primary" type="submit">Update</button>
                <button className="ui button" type="submit" onClick={close}>Cancel</button>
            </form>
        </div>
    )
}

export default EditCard;