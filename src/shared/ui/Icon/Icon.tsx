import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconColor {
    PRIMARY = 'primaryColor',
    SECONDARY = 'secondaryColor',
}

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    color?: IconColor;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, color = IconColor.PRIMARY } = props;

    return (
        <Svg className={classNames(cls.Icon, {}, [cls[color], className])} />
    );
});
