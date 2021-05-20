describe('Feedback Download prompt & Learn More popup tests',  {
   viewportHeight: 768,
   viewportWidth: 1366,
 }, () => {
  it('should open home page', () => {
       cy.visit('https://together-msb-stage-web.healthline.com/');

    cy.title().should('eq', 'MS Healthline');
 cy.wait(5000);
 });

 it('Click ACCEPT button from privacy policy popup', () => {
   cy
   .get('app-privacy', { includeShadowDom: true })
   .find('.privacy-message-button-container', { includeShadowDom: true })
   .find('together-button', { includeShadowDom: true })
   .click({force: true});
});

it('Drill down to a Live Discussion Group Channel', () => {
    
   cy
   .get('together-group-list-item', { includeShadowDom: true })
   .find('.group-list-item-label', { includeShadowDom: true })
   .contains('Live Discussions').click({force: true});

   cy.wait(3000);
  // cy.get('main', { includeShadowDom: true }).scrollTo(900,890);
 
   cy
   .get('together-reply', { includeShadowDom: true })
   .find('.more-link', { includeShadowDom: true })
   .contains('See all replies...').click({force: true});

   cy
   .get('together-thread-title', { includeShadowDom: true })
   .find('.thread-title-label', { includeShadowDom: true })
   .should('contain', 'All replies');

  
   cy
   .get('ion-router-link', { includeShadowDom: true })
   .find('together-nav-item', { includeShadowDom: true })
   .find('.nav-item-label', { includeShadowDom: true })
   .should('contain', 'Home').click({force: true});

});  


it('Feedcard Download prompt should display for Unregistered flow', () => {
   cy.wait(3000);
   cy.get('main', { includeShadowDom: true }).scrollTo(900,890);
   
   cy
   .get('together-download-card', { includeShadowDom: true })
   .find('.download-card-heading', { includeShadowDom: true })
   .should('contain', 'Download the MS Healthline app');
});  

it('Click Learn More link from Feedcard Download prompt', () => {
   cy
   .get('together-download-card', { includeShadowDom: true })
   .find('.together-highlight-text', { includeShadowDom: true })
   .contains('Learn More').click({force: true});
   cy.wait(3000);

   cy
   .get('app-learn-more', { includeShadowDom: true })
   .find('.email-form-heading', { includeShadowDom: true })
   .should('contain','Want to see more?');

   cy
   .get('app-learn-more', { includeShadowDom: true })
   .find('.together-form-prompt', { includeShadowDom: true })
   .click({force: true});

   cy
   .get('app-learn-more', { includeShadowDom: true })
   .find('input[placeholder="Enter your email"]', { includeShadowDom: true }).type('abc@xyz.com');

   cy
   .get('app-learn-more', { includeShadowDom: true })
   .find('.together-button', { includeShadowDom: true,timeout: 10000 }).should('be.visible').click({force: true});
   cy.wait(3000);

   cy
   .get('app-learn-more', { includeShadowDom: true })
   .find('.signup-thanks-heading', { includeShadowDom: true })
   .should('contain','Thanks for signing up');

   cy
   .get('app-learn-more', { includeShadowDom: true })
   .find('together-close-icon', { includeShadowDom: true })
   .click({force: true});

   cy.wait(3000);



   


}); 



});





