import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
    } = props;

    const renderArticles = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
        />
    );

    if (isLoading) {
        return (
            <div className={cls.loader}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            <div className={cls.articles}>
                {articles.length > 0
                    ? articles.map(renderArticles)
                    : null}
            </div>
        </div>
    );
});
