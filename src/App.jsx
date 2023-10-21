//import React from "react";
import "./App.css";
import BgChanger from "./bgChanger";
import { BgProvider } from './BackgroundContext.jsx'

function App(){
  return(
    <BgProvider>
    <h1 className="text-3xl text-white text-center p-8">Background Changer Using useContext API</h1>
    <BgChanger />
    </BgProvider>

   

  )
}

export default App;
