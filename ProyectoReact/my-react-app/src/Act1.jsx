import { useState } from 'react'
import _ from 'lodash';
import random from 'random'

const name = 'React'
const randomNum = random.int(1, 100)
console.log(randomNum)

let num = random.int(1, 100)

// generate a random number


function Act1() {
    return (
        <div className="Act1">
            <h1 class="redded">Actividad 1</h1>
            <ul class="redded">
                <li>{randomNum}</li>
                <li>{name}</li>
                <li>elemento3</li>
                <li>elemento4</li>
            </ul>
            <p>your lucky number is {num}</p>
            <p>your ded is {3+4+num+randomNum}</p>
        </div>
    )
}

export default Act1
