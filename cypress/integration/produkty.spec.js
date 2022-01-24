describe('Strona z produktami', () => {
  it('Po wczytaniu strony użytkownik powinien móc przejść do strony z produktami.', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href*="/products"]').click()

    cy.url().should('include', '/products')

    cy.get('h3').contains('Nasze Produkty:')
  })
})
