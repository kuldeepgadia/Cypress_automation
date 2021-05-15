describe('Delete User flow tests',  {
   viewportHeight: 768,
   viewportWidth: 1366,
 }, () => {
   it('Click Delete Account link from left Nav', () => {
      cy
      .get('.registered-options', { includeShadowDom: true })
      .find('.delete-link .together-highlight-text', { includeShadowDom: true })
      .contains('Delete Account').click({force: true});
      cy.wait(5000);
    });

    it('Click Delete button from Delete Account popup', () => {
      cy
      .get('.confirmation-footer', { includeShadowDom: true })
      .find('div', { includeShadowDom: true }).eq(1)
      .should('contain','Delete account');
      cy
      .get('.confirmation-footer', { includeShadowDom: true })
      .trigger('mouseover');

      cy.wait(7000);
      cy
      .get('.confirmation-footer', { includeShadowDom: true })
      .find('div', { includeShadowDom: true }).eq(1)
      .contains('Delete account').click();
      cy.wait(7000);
    });



});





