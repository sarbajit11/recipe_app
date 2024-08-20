import React, { useState } from 'react'
import './App.css'
import Mainpage from './Components/Mainpage'
import {Route,Routes} from 'react-router-dom'
import Mealinfo from './Components/Mealinfo'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    // <Mainpage/>
    <Routes>
      <Route path='' element= {<Mainpage/>}/>
      <Route path='/:mealId' element= {<Mealinfo/>}/>
    </Routes>

  )
}

export default App
