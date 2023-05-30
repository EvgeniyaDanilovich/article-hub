import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        setIsClosing(true);

        timerRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, ANIMATION_DELAY);
    }, [onClose]);

    const stopClosing = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    // На каждый перерендер компонента функция создается занаво,
    // у каждой из этих функций новая ссылка
    // поэтому нужно ссылку на эту func сохранять => useCallback
    // она мемоизирует значение func, запоминает его и всегда возвращает ссылку на одну и ту же func
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [cls.close])}>
                <div onClick={closeHandler} className={cls.overlay}>
                    <div onClick={stopClosing} className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
