import React from "react"
import DarkMode from "./DarkMode"
import GlobalStyles from '../GlobalStyles'

export default({ children }) => {
    return (
        <DarkMode>
            <GlobalStyles.ResetStyles />
            { children }
        </DarkMode>
    )
}
