import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUserAuthData } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    className?: string;
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { className, item, collapsed } = props;
    const { t } = useTranslation();
    const isAuth = useSelector(selectUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [className, cls.link])}
        >
            <item.Icon className={cls.icon} />
            {!collapsed && <Text text={item.text} theme={TextTheme.LINK} />}
        </AppLink>
    );
});
