import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps{
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({className}) => {
    const { theme, switchTheme } = useTheme();

    return (
            <Button onClick={switchTheme} theme={ThemeButton.CLEAR}
                    className={classNames(cls.ThemeSwitcher, {}, [])}>
                {theme === Theme.LIGHT ? <ThemeIcon className={cls.light}  /> : <ThemeIcon className={cls.dark} /> }
            </Button>
    );
};