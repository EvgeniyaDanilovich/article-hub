import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
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
            <Modal isOpen={isOpenModal} onClose={onToggleModal}>
                45464654654
            </Modal>
        </div>
    );
};
