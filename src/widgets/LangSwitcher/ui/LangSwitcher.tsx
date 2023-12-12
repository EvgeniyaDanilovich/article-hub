import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonFontSize, ButtonTheme } from 'shared/ui/Button/Button';
import LangIcon from 'shared/assets/icons/lang.svg';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            fontSize={ButtonFontSize.M}
            onClick={toggleLang}
            className={classNames(cls.LangSwitcher, {}, [cls.langBtn])}
        >
            <LangIcon className={cls.icon} />
            {!short && <Text text={t('lang')} theme={TextTheme.LINK} /> }
        </Button>
    );
});
