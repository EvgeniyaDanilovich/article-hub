import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwither';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { Navbar } from 'widgets/Navbar';
import cls from './Sidebar.module.scss';
import { selectSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(selectSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div>
            <Navbar />
            <menu
                data-testid="sidebar"
                className={
                    classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])
                }
            >
                <div className={cls.menu}>
                    {sidebarItemsList.map((item) => (
                        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
                    ))}
                </div>

                {/* <Button */}
                {/*     data-testid="sidebar-toggle" */}
                {/*     onClick={onToggle} */}
                {/*     className={cls.collapsedButton} */}
                {/*     theme={ButtonTheme.BACKGROUND_INVERTED} */}
                {/*     fontSize={ButtonFontSize.L} */}
                {/* > */}
                {/*     {collapsed ? <Text text=">" theme={TextTheme.LINK} /> : <Text text="<" theme={TextTheme.LINK} />} */}
                {/* </Button> */}
                <div className={classNames(cls.switchers)}>
                    <ThemeSwitcher short={collapsed} />
                    <LangSwitcher short={collapsed} />
                </div>
            </menu>
        </div>
    );
});
