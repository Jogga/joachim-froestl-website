import { createGlobalStyle } from 'styled-components'
import { h1, h2, h3, h4, h5, h6, p, ul, ol, blockquote } from '../Typography'

const GlobalMarkdownStyles = createGlobalStyle`
    h1 {
        ${ h1 };
    }
    h2 {
        ${ h2 };
    }
    h3 {
        ${ h3 };
    }
    h4 {
        ${ h4 };
    }
    h5 {
        ${ h5 };
    }
    h6 {
        ${ h6 };
    }
    p {
        ${ p };
    }
    ul{
        ${ ul };
    }
    ol {
        ${ ol };
    }
    blockquote {
        ${ blockquote };
    }

`
export default GlobalMarkdownStyles