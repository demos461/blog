import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSwitcher } from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import {
    initArticlesPage,
} from '../../model/services/initArticlesPage/initArticlesPage';
import {
    fetchNextArticlesPage,
} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageIsView,
} from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlePage.module.scss';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../../model/slice/articlesPageSlice';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlePage = (props: ArticlePageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageIsView);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <Text title={t('Статьи')} />
                <ArticleViewSwitcher view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlePage);
