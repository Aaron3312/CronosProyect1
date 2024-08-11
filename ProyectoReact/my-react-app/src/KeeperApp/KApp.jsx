import { useState } from 'react'
import Footer from './Footer.jsx'
import Note from './Note.jsx'
import './KApp.css'

function KApp(){
    return(
        <div>
            <h1>Keeper App</h1>
            <Footer />
            <Note />
            <Note />
            <Note />

        </div>
    )
}

export default KApp