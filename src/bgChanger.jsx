import React, { useContext } from 'react'
import { BgContext } from './BackgroundContext'

function BgChanger() {
    const {bgColor, setBgColor}=useContext(BgContext)
  return (
    <div 
    className='p-8 m-4 text-3xl text-center h-36'
    style={{backgroundColor:bgColor}}>
        <button onClick={()=>{
            setBgColor('#'+Math.floor(Math.random()*16777215).toString(16));
        }}>
            Change Background Color
        </button>
    </div>
  )
}




export default BgChanger