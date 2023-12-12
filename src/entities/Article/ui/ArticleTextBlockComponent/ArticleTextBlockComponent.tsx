import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
    isShowTitle?: boolean;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block, isShowTitle = true } = props;

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && isShowTitle && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map((paragraph) => <Text key={paragraph} text={paragraph} className={cls.paragraph} />)}
        </div>
    );
});
