describe('Testy nawigacji', () => {
  it('Po wczytaniu strony użytkownik powinien móc przejść na stronę kontaktową.', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href*="/contact"]').click()

    cy.url().should('include', '/contact')

    cy.get('h1').contains('Skontaktuj się z nami')
  })

  it('Po wczytaniu strony kontaktowej użytkownik powinien móc uzupełnić pola.', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href*="/contact"]').click()

    cy.get('#name').type("Wojciech Kasolik")
    cy.get('#email').type("Test@test.pl")
    cy.get('#message').type("Testowy tekst, który jest długi aby sprawdzić czy działa input.")
    cy.get('button[type*="submit"]').click()
  })
})
