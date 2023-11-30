import { HTMLAttributeAnchorTarget, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import cls from './ArticleList.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, view = ArticleView.SMALL, isLoading, target } = props;
    const { t } = useTranslation('article');

    const renderArticles = (article: Article) => (
        <ArticleListItem key={article.id} article={article} view={view} target={target} />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div
            className={classNames('', {}, [className, cls[view]])}
            data-testid="ArticleList"
        >
            {articles.length > 0 ? articles.map(renderArticles) : null}
            {isLoading && (
                <HStack justify="center" max>
                    <Loader />
                </HStack>
            )}
        </div>
    );
});
