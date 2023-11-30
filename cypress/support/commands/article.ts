import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    userId: '4',
    subtitle: 'Что нового в React за 2022 год?',
    img: 'https://ru.legacy.reactjs.org/logo-og.png',
    views: 653,
    createdAt: '21.01.2022',
    type: ['ECONOMIC'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'abc' },
        body: article ?? defaultArticle,
    }).then((res) => res.body);
};

export const removeArticle = (articleId: string) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'abc' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;

            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
