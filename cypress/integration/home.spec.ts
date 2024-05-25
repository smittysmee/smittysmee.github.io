/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  ***REMOVED***);

  it('should render About ButterFlat.io section', () => {
    cy.contains('About ButterFlat.io').should('be.visible');
  ***REMOVED***);

  it('should render Our Expertise section', () => {
    cy.contains('Our Expertise').should('be.visible');
  ***REMOVED***);

  it('should render Our Templates section', () => {
    cy.contains('Our Templates').should('be.visible');
  ***REMOVED***);
***REMOVED***);
