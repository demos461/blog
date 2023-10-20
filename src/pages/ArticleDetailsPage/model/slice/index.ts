import { combineReducers } from '@reduxjs/toolkit';
import {
    articleDetainsPageRecommendationsReducer,
} from './articleDetainsPageRecommendationsSlice';
import {
    articleDetailsCommentsReducer,
} from './articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetainsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
