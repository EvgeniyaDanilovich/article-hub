import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
    short: boolean;
}

export const ThemeSwitcher = memo(({ className, short }: ThemeSwitcherProps) => {
    const { t } = useTranslation();
    const { theme, switchTheme } = useTheme();

    return (
        <Button
            onClick={switchTheme}
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [])}
        >
            <ThemeIcon className={cls.theme} />
            {!short && <Text text={t('Change theme')} theme={TextTheme.LINK} />}
        </Button>
    );
});
