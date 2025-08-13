import './App.css'
import {Route, Routes} from "react-router"

import HomePage from "./Components/HomePage"
import MainFilter from "./Components/MainFilter"
import OptionalFilter from "./Components/OptionalFilter"

function App() {
  

  return (
    <>
     <div>
      <Routes>
          <Route path="/" element ={<HomePage/>} />
          <Route path="/maintask" element ={<MainFilter/>} />
          <Route path="/optionaltask" element ={<OptionalFilter/>} />
      </Routes>
     </div>
    </>
  )
}

export default App
