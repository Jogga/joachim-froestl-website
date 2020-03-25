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
    ]
}

export const light = { ...defaultTheme, ...lightTheme }
export const dark = { ...defaultTheme, ...darkTheme }
export default defaultTheme