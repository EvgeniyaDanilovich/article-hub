import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export interface UseThemeResult {
    theme: Theme;
    switchTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const switchTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, switchTheme };
};

