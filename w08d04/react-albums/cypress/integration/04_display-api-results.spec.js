describe('tests for API results', () => {

  it('can display the results of an API request', () => {
    // setup our fake return data
    cy.intercept('GET', '**/search*', { fixture: 'itunes' })
      .as('loadResults');

    // visit the app
    cy.visit('/');

    // find the input field and type 'Daft Punk'
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk');

    // does the spinner show up during the search?
    cy.get('.spinner')
      .should('be.visible')

    // wait for the search results to load
    cy.wait('@loadResults')

    // look for a specific album
    cy.contains('Random Access Memories')
      .should('be.visible');

    // uncheck Explicit checkbox
    cy.get('#Explicit')
      .uncheck();

    // check that the explicit album does not appear in the results
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});
