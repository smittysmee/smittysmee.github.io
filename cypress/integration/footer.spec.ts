/// <reference types="cypress" />

describe('Footer Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the footer text', () => {
    cy.get('footer').contains('© 2024 ButterFlat.io. All rights reserved.').should('be.visible');
  });
});
