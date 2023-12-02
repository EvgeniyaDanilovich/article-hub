import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/articles.svg';

export interface SidebarItemType {
    path: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    text: string;
    authOnly?: boolean;
}
