let profileId: string;

describe('User go to profile page', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`/profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Profile success loading', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'Test');
    });

    it('Edit profile', () => {
        const newFirstname = 'firstname';
        const newLastname = 'lastname';
        cy.updateProfile(newFirstname, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstname);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
