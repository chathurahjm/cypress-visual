import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand();

describe('template spec', () => {
  // it('passes', () => {
  //   cy.visit('https://www.google.com')

  //   // Assertion to check if the page title contains "Google"
  //   cy.title().should('include', 'Google')
  // });


  it('should compare screenshot of the entire page', () => {
    cy.visit('https://github.com/tgriesser')
     cy.get(':nth-child(5) > [data-layer="Content"]').compareSnapshot('avatar',0.01)

    //cy.compareSnapshot('home-page',0.01)
  })

})