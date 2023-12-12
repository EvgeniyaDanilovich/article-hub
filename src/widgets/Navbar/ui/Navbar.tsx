import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonColor, ButtonFontFamily, ButtonFontSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAuthData, userActions } from 'entities/User';
import ArrowIcon from 'shared/assets/icons/arrow.svg';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }:NavbarProps) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(selectUserAuthData);
    const dispatch = useDispatch();
    const [isLogIn, setIsLogIn] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsOpenModal((prev) => !prev);
    }, []);

    const onToggleLogInModal = useCallback(() => {
        setIsLogIn(true);
        onToggleModal();
        // setIsOpenModal((prev) => !prev);
    }, [onToggleModal]);

    const onToggleSignUpModal = useCallback(() => {
        setIsLogIn(false);
        onToggleModal();
        // setIsOpenModal((prev) => !prev);
    }, [onToggleModal]);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [])}>
                <Button
                    onClick={onLogout}
                    theme={ButtonTheme.CLEAR}
                    fontSize={ButtonFontSize.four}
                    fontFamily={ButtonFontFamily.TEXT}
                    className={cls.btn}
                    color={ButtonColor.LINK}
                >
                    <ArrowIcon className={cls.icon} />
                    {t('Log out')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [])}>
            <Button
                onClick={onToggleLogInModal}
                theme={ButtonTheme.CLEAR}
                fontSize={ButtonFontSize.four}
                color={ButtonColor.LINK}
                fontFamily={ButtonFontFamily.TEXT}
            >
                {t('Log in')}
            </Button>
            <Button
                onClick={onToggleSignUpModal}
                theme={ButtonTheme.CLEAR}
                fontSize={ButtonFontSize.four}
                color={ButtonColor.LINK}
                fontFamily={ButtonFontFamily.TEXT}
            >
                {t('Sign up')}
            </Button>
            {isOpenModal && <LoginModal isOpen={isOpenModal} onClose={onToggleModal} isLogIn={isLogIn} />}
        </header>
    );
});
