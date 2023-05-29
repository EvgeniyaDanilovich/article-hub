import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
// import { classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        children, theme, className, ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            // className={classNames('', {}, [className, ''])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

// import React, { ButtonHTMLAttributes } from 'react';
//
// export enum ThemeButton {
//     CLEAR = 'clear',
//     OUTLINE = 'outline'
// }
//
// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//     className?: string;
//     theme?: ThemeButton;
// }
//
// export const Button: React.FC<ButtonProps> = (props) => {
//     const { children } = props;
//
//     return (
//         <button type="button">
//             {children}
//         </button>
//     );
// };
