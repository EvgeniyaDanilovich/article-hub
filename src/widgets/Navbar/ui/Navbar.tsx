import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }:NavbarProps) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(selectUserAuthData);
    const dispatch = useDispatch();

    const onToggleModal = useCallback(() => {
        setIsOpenModal((prev) => !prev);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [])}>
                <Button
                    onClick={onLogout}
                    theme={ButtonTheme.CLEAR}
                    size={ButtonSize.M}
                >
                    {t('Log out')}
                </Button>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [])}>
            <Button
                onClick={onToggleModal}
                theme={ButtonTheme.CLEAR}
                size={ButtonSize.M}
            >
                {t('Log in')}
            </Button>
            {isOpenModal && <LoginModal isOpen={isOpenModal} onClose={onToggleModal} />}
        </header>
    );
});
