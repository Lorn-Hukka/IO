describe('Strona koszyka', () => {
    it('Użytkownik powinien móc przejść ze strony głównej na stronę koszyka', () => {

        cy.visit('http://localhost:3000/');

        cy.get('a[href*="/cart"]').click();

        cy.url().should('include', '/cart');

        cy.get('h1').contains('Koszyk');
    })
})