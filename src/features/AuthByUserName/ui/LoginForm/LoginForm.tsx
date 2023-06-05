import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [])}>
            <Input placeholder={t('Enter name')} type="text" />
            <Input type="text" placeholder={t('Enter password')} />
            <Button theme={ButtonTheme.BACKGROUND}>{t('Log in')}</Button>
        </div>
    );
};
