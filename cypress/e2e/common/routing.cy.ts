describe('Routing', () => {
    describe('User is not auth', () => {
        it('Go to main page', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
        });

        it('Go to profile page', () => {
            cy.visit('/profile/1');
            cy.getByTestId('MainPage').should('exist');
        });

        it('Go to a non-existent route', () => {
            cy.visit('/somebodywantstoldme');
            cy.getByTestId('NotFoundPage').should('exist');
        });
    });

    describe('User is auth', () => {
        beforeEach(() => {
            cy.login();
        });

        it('Go to profile page', () => {
            cy.visit('/profile/1');
            cy.getByTestId('ProfilePage').should('exist');
        });

        it('Go to articles page', () => {
            cy.visit('/articles');
            cy.getByTestId('ArticlesPage').should('exist');
        });
    });
});
