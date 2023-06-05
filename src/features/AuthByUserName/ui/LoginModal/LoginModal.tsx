import React from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
    const { isOpen, onClose } = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy>
            <LoginForm />
        </Modal>
    );
};
