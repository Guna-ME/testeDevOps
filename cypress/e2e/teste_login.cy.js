describe('Teste E2E de Login', () => {
  it('Visita página e verifica título', () => {
    cy.visit('https://example.com');
    cy.title().should('include', 'Example Domain');
    // Simule login: cy.get('input[name="username"]').type('user');
    // cy.get('input[name="password"]').type('pass');
    // cy.get('button[type="submit"]').click();
    // cy.url().should('include', '/dashboard');
  });
});
  