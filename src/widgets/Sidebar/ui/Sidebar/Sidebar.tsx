import React, { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwither';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/items';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])
            }
        >
            <div className={cls.menu}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem item={item} collapsed={collapsed} key={item.path} />
                ))}
            </div>

            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedButton}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
});
