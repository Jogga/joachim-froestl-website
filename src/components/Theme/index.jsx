import lightTheme from "./light"
import darkTheme from "./dark"

const defaultTheme = {
    space: [
        '0px', // 0
        '4px', // 1
        '8px', // 2
        '16px', // 3
        '24px', // 4
        '32px', // 5
        '48px', // 6
        '64px', // 7
        '96px', // 8
        '128px', // 9
    ],
    fonts: {
        body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        monospace: 'SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace',
    },
    fontSizes: [
        '0.8rem', // 0
        '1rem', // 1
        '1.2rem', // 2
        '1.5rem', // 3
        '1.875rem', // 4
        '2.25rem', // 5
        '2.75rem', // 6
    ],
    fontWeights: {
        body: 400,
        heading: 700,
    },
    lineHeights: {
        body: 1.6,
        heading: 1.2,
        code: 1.6,
    },
    borderRadius: [
        '6px',
        '12px',
    ]
}

export const light = { ...defaultTheme, ...lightTheme }
export const dark = { ...defaultTheme, ...darkTheme }
export default defaultTheme