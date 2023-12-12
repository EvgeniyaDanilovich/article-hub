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

export enum ButtonFontFamily {
    TEXT = 'font_text',
    TITLE = 'font_title',
}

export enum ButtonColor {
    PRIMARY = 'primary_color',
    LINK = 'link_color',
}

export enum ButtonSize {
    LITTLE = 'little',
    LARGE = 'large',
}

export enum ButtonFontSize {
    M = 'size_m',
    L = 'size_l',
    one = 'size_one',
    two = 'size_two',
    three = 'size_three',
    four = 'size_four',
    five = 'size_five',
    six = 'size_six',
    seven = 'size_seven',
    eight = 'size_eight',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    fontSize?: ButtonFontSize;
    fontFamily?: ButtonFontFamily;
    disabled?: boolean;
    color?: ButtonColor;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        children, theme = ButtonTheme.OUTLINE, fontSize, fontFamily = ButtonFontFamily.TEXT, size = ButtonSize.LARGE,
        color = ButtonColor.PRIMARY, className, disabled, ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={
                classNames(
                    cls.Button,
                    { [cls.disabled]: disabled },
                    [className, cls[theme], cls[fontSize || ''], cls[fontFamily], cls[color], cls[size]],
                )
            }
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
