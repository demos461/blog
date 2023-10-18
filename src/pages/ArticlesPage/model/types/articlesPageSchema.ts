import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    // Pagination
    view: ArticleView;
    page: number;
    limit: number;
    hasMore: boolean;
    // Filters
    order: SortOrder;
    sort: ArticleSortField;
    search: string;

    _initiated: boolean;
}
