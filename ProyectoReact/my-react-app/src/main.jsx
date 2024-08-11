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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card title="burro" content="ded"/>
    <Card title="2" content="ded"/>
    <Card title="bur32ro" content="ded"/>
    <Card title="burro" content="de32d"/>
    <Cards3 title="burrdsao" content="deddwa"/>

  </StrictMode>,
)
