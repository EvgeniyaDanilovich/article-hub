import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useTranslation } from 'react-i18next';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    className?: string;
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { className, item, collapsed } = props;
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [className, cls.link])}
        >
            <item.Icon className={cls.icon} />
            <span>{t(item.text)}</span>
        </AppLink>
    );
});
