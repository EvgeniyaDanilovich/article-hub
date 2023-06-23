import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        children, theme = ButtonTheme.OUTLINE, size = ButtonSize.M, className, disabled, ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls.disabled]: disabled }, [className, cls[theme], cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});

// import React, { ButtonHTMLAttributes } from 'react';
//
// export enum ButtonTheme {
//     CLEAR = 'clear',
//     OUTLINE = 'outline'
// }
//
// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//     className?: string;
//     theme?: ButtonTheme;
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
