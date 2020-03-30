import React from "react"
import ResetStyles from "./reset"
import MarkdownStyles from './markdown'

export const WithMarkdownStyles = ({ children }) => (
    <React.Fragment>
        <MarkdownStyles />
        {children}
    </React.Fragment>
)

export default {
    ResetStyles,
    WithMarkdownStyles,
}