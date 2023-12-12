import React, { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps, NavLink } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        children, to,
        theme,
        className,
    } = props;

    return (
        <NavLink to={to} className={classNames(cls.AppLink, {}, [className, cls[theme || 'theme']])}>
            {children}
        </NavLink>
    );
});
