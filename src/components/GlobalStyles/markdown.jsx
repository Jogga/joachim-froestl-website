import { createGlobalStyle } from 'styled-components'
import { h1 } from '../Typography'

const GlobalMarkdownStyles = createGlobalStyle`
    h1 {
        ${ h1 };
    }
`
export default GlobalMarkdownStyles