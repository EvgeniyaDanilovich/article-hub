import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, switchTheme } = useTheme();

    return (
        <Button
            onClick={switchTheme}
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [])}
        >
            {theme === Theme.LIGHT
                ? <ThemeIcon className={cls.light} /> : <ThemeIcon className={cls.dark} />}
        </Button>
    );
});
