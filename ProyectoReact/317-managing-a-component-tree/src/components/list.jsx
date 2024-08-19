import React from "react";



function linetext(event){
    if (event.target.style.textDecoration === "line-through"){
        event.target.style.textDecoration = "none";
    } else {
        event.target.style.textDecoration = "line-through";
    }
}

function List(props) {
    const [isDone, setIsDone] = React.useState(false);

    function handleClick() {
        setIsDone((prevValue) => {
            return !prevValue;
        });
    }

    return (
        <div>
        <li onClick={() => {props.onChecked(props.id)}} style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li>
        </div>
    );
    }

export default List;