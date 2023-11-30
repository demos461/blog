import { ArticleType } from '../consts/consts';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

import { articleDetailsReducer } from './articleDetailsSlice';

const data = {
    id: '1',
    user: {
        id: '1',
        username: 'user',
    },
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [],
};

describe('articleDetailsReducer.test', () => {
    test('test fetch profile data service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: undefined,
            data: undefined,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test fetch profile data service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, '', ''),
            ),
        ).toEqual({
            isLoading: false,
            error: undefined,
            data,
        });
    });
});
