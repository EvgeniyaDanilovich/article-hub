import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article';
import ListIcon from 'shared/assets/icons/list.svg';
import TiledIcon from 'shared/assets/icons/tile.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon, IconColor } from 'shared/ui/Icon/Icon';
import cls from './ViewSwitcher.module.scss';

interface ViewSwitcherProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.LARGE,
        icon: ListIcon,
    },
];

export const ViewSwitcher = memo(({ view, onViewClick, className }: ViewSwitcherProps) => {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ViewSwitcher, {}, [className])}>
            {viewTypes.map((viewType, index) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={index}
                >
                    <Icon
                        Svg={viewType.icon}
                        color={IconColor.SECONDARY}
                        className={classNames('', { [cls.selected]: viewType.view === view })}
                    />
                </Button>
            ))}
        </div>
    );
});
