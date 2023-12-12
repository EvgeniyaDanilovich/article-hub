import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    NORMAL = 'normal',
    ERROR = 'error',
    BLACK = 'black',
    LINK = 'link',
    SECONDARY = 'secondary'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextWeight {
    REGULAR = 'regular',
    MEDIUM = 'medium',
    SEMIBOLD = 'semiBold',
    BOLD = 'bold',
    EXTRABOLD = 'extraBold',
}

export enum TextSize {
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

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    weight?: TextWeight;
}

export const Text = memo((props: TextProps) => {
    const {
        className, text, title, theme = TextTheme.NORMAL,
        align = TextAlign.LEFT, size = TextSize.two, weight = TextWeight.REGULAR,
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[weight]])}>
            {title && <p className={classNames(cls.title, {}, [cls[size]])}>{title}</p>}
            {text && <p className={classNames(cls.text, {}, [cls[size]])}>{text}</p>}
        </div>
    );
});
