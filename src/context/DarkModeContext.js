import React, { createContext, useState } from "react";

const DarkModeContext = createContext()

const DarkModeProvider = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    return(
        <div>
            <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
}

export {DarkModeContext, DarkModeProvider};






