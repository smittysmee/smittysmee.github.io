/// <reference types="cypress" />

describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('/');
  ***REMOVED***);

  it('should render the logo', () => {
    cy.get('img[alt="ButterFlat.io logo"]').should('be.visible');
  ***REMOVED***);

  it('should have navigation links', () => {
    cy.get('nav').within(() => {
      cy.get('a').contains('Home').should('exist');
      cy.get('a').contains('About').should('exist');
      cy.get('a').contains('Contact').should('exist');
***REMOVED***);
  ***REMOVED***);
***REMOVED***);
