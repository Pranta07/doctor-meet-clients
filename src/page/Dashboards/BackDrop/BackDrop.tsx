import React from 'react';
import "./BackDrop.css"

const BackDrop = (props:{backDropClickHandler:any}) => {
    return (
        <div className="backdrop" onClick={props.backDropClickHandler}>

        </div>
    )
};

export default BackDrop;