import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';
import { selectLoginPage } from '../../model/selectors/selectLoginState/selectLoginPage';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(selectLoginPage);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    // if (isLoading) <div>Loading...</div>;

    return (
        <div className={classNames(cls.LoginForm, {}, [])}>
            <Text title={t('Authorization form')} />
            {error && <Text text={t('Wrong name or password')} theme={TextTheme.ERROR} />}
            <Input onChange={onChangeUsername} placeholder={t('Enter name')} type="text" value={username} />
            <Input onChange={onChangePassword} type="text" placeholder={t('Enter password')} value={password} />
            <Button
                onClick={onLoginClick}
                theme={ButtonTheme.OUTLINE}
                disabled={isLoading}
                className={cls.loginBtn}
            >
                {t('Log in')}
            </Button>
        </div>
    );
});
