import { Dispatch, SetStateAction, createContext } from "react";
import { DEFAULT_THEME } from "../utils/contstants";

export const getIntialTheme = (): string => {
    const currentTheme = localStorage.getItem(DEFAULT_THEME);
    if (currentTheme) {
        return currentTheme
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return "dark"
        } else {
            return "light"
        }
    }
}
export interface ThemeContextValue {
    currentTheme: string;
    setCurrentTheme: Dispatch<SetStateAction<string>>;
}

const ThemeProvider = createContext<ThemeContextValue>({ currentTheme: "", setCurrentTheme: () => { }});
export default ThemeProvider


export const Theme = ["light",
    "dark",];

export const setTheme = (currenttheme:number) => {
    localStorage.setItem(DEFAULT_THEME, currenttheme.toString());
    return Theme[currenttheme]
}
