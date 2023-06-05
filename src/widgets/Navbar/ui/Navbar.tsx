import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsOpenModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <Button
                onClick={onToggleModal}
                theme={ButtonTheme.CLEAR}
                size={ButtonSize.M}
            >
                {t('Log in')}
            </Button>
            <LoginModal isOpen={isOpenModal} onClose={onToggleModal} />
        </div>
    );
};
