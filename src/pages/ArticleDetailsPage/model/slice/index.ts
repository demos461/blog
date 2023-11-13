import { combineReducers } from '@reduxjs/toolkit';

import { ArticleDetailsPageSchema } from '../types';

import {
    articleDetailsCommentsReducer,
} from './articleDetailsCommentsSlice';
import {
    articleDetainsPageRecommendationsReducer,
} from './articleDetainsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetainsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
