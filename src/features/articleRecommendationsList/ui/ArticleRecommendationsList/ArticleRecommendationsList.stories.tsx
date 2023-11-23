import { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

import { Article } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
};
export default meta;

type Story = StoryObj<typeof ArticleRecommendationsList>;

const article: Article = {
    id: '1',
    img: '',
    createdAt: '01.01.2023',
    views: 123,
    user: { id: '1', username: 'user' },
    title: 'Title',
    subtitle: 'Subtitle',
    blocks: [],
    type: [],
};

export const Primary: Story = {
    args: {

    },
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=5`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                ],
            },
        ],
    },
};
