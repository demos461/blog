import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleView, ArticleSortField, ArticleType,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

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
    type: ArticleType

    _initiated: boolean;
}
