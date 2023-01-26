import React from "react";

const NewUserFrom = ({ addUser }) => {
    return (
        <form style={{marginTop: '50px'}} className="ui form six wide column" onSubmit={addUser}>
            <h1 className="title">Add new user</h1>
            <div className="field">
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="First Name" required/>
            </div>
            <div className="field">
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Last Name" required/>
            </div>
            <button className="ui button primary" type="submit">Submit</button>
        </form>
    )
}

export default NewUserFrom;