let currentArticleId = '';

describe('User go to article details page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`/articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('Article success loading', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('Article recommendation list success loading', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('Enter rating', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true').should('have.length', 4);
    });
});
