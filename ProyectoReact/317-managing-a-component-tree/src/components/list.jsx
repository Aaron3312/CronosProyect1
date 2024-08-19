import React from "react";

function linetext(event){
    if (event.target.style.textDecoration === "line-through"){
        event.target.style.textDecoration = "none";
    } else {
        event.target.style.textDecoration = "line-through";
    }
}

function List(props) {
    return (
        <div>
        <li onClick={linetext}>{props.text}</li>
        </div>
    );
    }

export default List;