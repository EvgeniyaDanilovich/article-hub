import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwither';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
      <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [])}>
          <button onClick={onToggle}>toggle</button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher />
            </div>
        </div>
    );
};
