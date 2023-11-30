import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { SortOrder } from '@/shared/types/sort';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        error: undefined,
        isLoading: false,
        view: ArticleView.SMALL,
        ids: [],
        entities: {},
        hasMore: true,
        page: 1,
        _initiated: false,
        limit: 9,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY,
            ) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._initiated = true;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }),
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
    articlesPageSlice;
