import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
    fetchArticleRecommendations,
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
    ArticleDetainsPageRecommendationsSchema,
} from '../types/articleDetainsPageRecommendationsSchema';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleDetainsPageRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetainsPageRecommendationsSlice = createSlice({
    name: 'articleDetainsPageRecommendations',
    initialState: recommendationsAdapter.getInitialState<ArticleDetainsPageRecommendationsSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(fetchArticleRecommendations.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
        .addCase(fetchArticleRecommendations.fulfilled, (state, action:PayloadAction<Article[]>) => {
            state.isLoading = false;
            recommendationsAdapter.setAll(state, action.payload);
        })
        .addCase(fetchArticleRecommendations.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }),
});

export const {
    reducer: articleDetainsPageRecommendationsReducer,
} = articleDetainsPageRecommendationsSlice;
