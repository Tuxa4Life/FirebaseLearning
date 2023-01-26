import React from "react";

const Card = ({name, surname, update, remove}) => {
    return (
        <div className="card">
            <div className="content">
                <div className="header">
                    {`${name} ${surname}`}
                </div>
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui button" onClick={update}>Update</div>
                    <div className="ui red button" onClick={remove}>Delete</div>
                </div>
            </div>
        </div>
    )
}

export default Card;