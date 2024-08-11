import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppGood from './appGood.jsx'
import App2, {Dead} from './app2.jsx' //<Dead />
import * as maths from'./matassets/maths.jsx'
//import * as App2 from './app2.jsx' //<App2.Dead />
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>{maths.divide(5, 2)}</p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="redded">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          sex? sdwa
        </p>
      </div>
    </>
  )
}

export default App
