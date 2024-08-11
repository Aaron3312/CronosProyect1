import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import KApp from './KeeperApp/KApp.jsx'
import Card from './props/cardFam.jsx'

function Cards3(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.content}</p> 
    </div>
  )
}

function CardAnimal(animals){
  return (
    <Card 
    key= {animals} 
    title={animals}
    content={descriptions[animals.indexOf(animals)]} />
  )
}
//    <p> {animals.map(CardAnimal)}</p>

//generamos una lista de nombres de animales y otra de sus descripciones
const animals = ['burro', 'gato', 'perro', 'elefante', 'jirafa']
const descriptions = ['animal de carga', 'animal doméstico', 'animal doméstico', 'animal salvaje', 'animal salvaje']

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cards3 title="burrdsao" content="deddwa"/>
    

  </StrictMode>
)
