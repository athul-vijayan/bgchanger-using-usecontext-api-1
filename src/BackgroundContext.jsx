import React, { createContext, useState } from 'react'

const [bgColor, setBgColor]=useState('#ffffff');
export const BgContext=createContext()

export function BgProvider({children}){
    return(
        <BgContext.Provider value={{bgColor, setBgColor}}>
            {children}
        </BgContext.Provider>
    )
};