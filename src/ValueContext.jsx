import React, {createContext, createCOntext, useState} from "react";

export const ValueContext = createContext();

export function ValueProvider({children}){
    const [value, setValue] = useState(0);

    return <>
        <ValueContext.Provider value = {{value, setValue}}>
            {children}
        </ValueContext.Provider>
    </>
}