import lightTheme from "./light"
import darkTheme from "./dark"

const defaultTheme = {

}

export const light = { ...defaultTheme, ...lightTheme }
export const dark = { ...defaultTheme, ...darkTheme }
export default defaultTheme