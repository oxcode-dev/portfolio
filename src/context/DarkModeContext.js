import React, { createContext, useState } from "react";

const DarkModeContext = createContext()

const DarkModeProvider = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setIsDarkMode(isDarkMode)
    }
}