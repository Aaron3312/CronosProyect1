import { useState } from 'react'

const stlrs = {color : "blue"}
//si es entre la media noche y las 12 del dia
if (new Date().getHours() > 0 && new Date().getHours() < 12){
    var greting = "Good Morning"
    var gretstlye = {color : "red"}
}else if (new Date().getHours() > 12 && new Date().getHours() < 18){
    var greting = "Good Afternoon"
    var gretstlye = {color : "green"}
}else{
    var greting = "Good evening"
    var gretstlye = {color : "blue"}
}


function AppGood() {

    return (
        <div>
            <h1 style={stlrs}>AppGood</h1>
            <h1 style= {gretstlye}>{greting}</h1>
        </div>
    )
}

export default AppGood