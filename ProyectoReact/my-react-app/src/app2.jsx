import { useState } from 'react'

const name = 'Aaron'
const currenyear = new Date().getFullYear()

const hey = {color : "red"}

if (currenyear % 2 === 0){
    hey.color = "blue"
}

if (name === 'Aaron'){
    hey.color = "green"
}


function app2(){
    return (
        <div>
            <h1 style={hey}>App2</h1>
            <p className='redded'> pene {name} </p>
            <p> peneson {currenyear}</p>
        </div> 
    )
}

export default app2