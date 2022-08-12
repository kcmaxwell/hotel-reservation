describe('Main app', () => {
  it ('should have a search bar for a location', () => {
    cy.visit('/');
    cy.get('[data-cy="search-location"]');
  });

  it ('should have a map below the search bar', () => {
    cy.visit('/');
    cy.get('[data-cy="map"]');
  });

  it ('should have a list of hotels', () => {
    cy.visit('/');

    //cy.get('cy-location-search').type('Calgary');

    cy.get('[data-cy="hotel-list"]');
  })
});