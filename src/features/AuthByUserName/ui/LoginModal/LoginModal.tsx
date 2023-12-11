import React, { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { SignupFormAsync } from '../SignupForm/SignupForm.async';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    isLogIn: boolean;
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
    const { isOpen, onClose, isLogIn } = props;
    // const dispatch = useAppDispatch();
    // const username = useSelector(selectLoginUsername);
    // const password = useSelector(selectLoginPassword);
    //
    // const onLoginClick = useCallback(async () => {
    //     const result = await dispatch(loginByUsername({ username, password }));
    //     if (result.meta.requestStatus === 'fulfilled') {
    //         onClose();
    //     }
    // }, [dispatch, onClose, password, username]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy>
            <Suspense fallback={<Loader />}>
                {isLogIn ? <LoginFormAsync onSuccess={onClose} /> : (<SignupFormAsync onSuccess={onClose} />)}
            </Suspense>
        </Modal>
    );
};
