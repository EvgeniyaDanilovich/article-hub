import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectLoginUsername } from '../../model/selectors/selectLoginUsername/selectLoginUsername';
import { selectLoginPassword } from '../../model/selectors/selectLoginPassword/selectLoginPassword';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { addNewUser } from '../../model/services/addNewUser/addNewUser';
import { selectLoginIsLoading } from '../../model/selectors/selectLoginIsLoading/selectLoginIsLoading';
import cls from './SignupForm.module.scss';

export interface SignupFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const SignupForm = memo(({ className, onSuccess }: SignupFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(selectLoginUsername);
    const password = useSelector(selectLoginPassword);
    const isLoading = useSelector(selectLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onSendData = useCallback(() => {
        dispatch(addNewUser({ username, password }));
        onSuccess();
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.SignupForm, {}, [className])}>
                <Text
                    title={t('Registration form')}
                    size={TextSize.six}
                    weight={TextWeight.SEMIBOLD}
                    align={TextAlign.CENTER}
                    className={cls.title}
                />

                <Input onChange={onChangeUsername} placeholder={t('Enter name')} type="text" value={username} />
                <Input onChange={onChangePassword} type="text" placeholder={t('Enter password')} value={password} />

                <Button
                    onClick={onSendData}
                    theme={ButtonTheme.OUTLINE}
                    disabled={isLoading}
                    className={cls.loginBtn}
                    size={ButtonSize.LITTLE}
                >
                    {t('Sign up')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default SignupForm;
