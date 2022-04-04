import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const PageContext = createContext();

export const usePage = () => useContext(PageContext);


export const PageProvider = ({children}) =>{

    const [current, setCurrent] = useState(0);

    return(
        <PageContext.Provider value={{current, setCurrent}}>
            {children}
        </PageContext.Provider>
    )
}