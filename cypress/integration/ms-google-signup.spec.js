describe('Logout Flow tests',  {
   viewportHeight: 768,
   viewportWidth: 1000,
 }, () => {
  it('should open home page', () => {
    cy.visit('https://together-msb-stage-web.healthline.com/');
    cy.title().should('eq', 'MS Healthline');
 cy.wait(5000);
 });

 it('Click ACCEPT buuton from privacy policy popup', () => {
   cy
   .get('app-privacy', { includeShadowDom: true })
   .find('.privacy-message-button-container', { includeShadowDom: true })
   .find('together-button', { includeShadowDom: true })
   .click({force: true});
});

it('Logo is not broken', () => {
   cy
   .get('ion-app')
   .find('app-header', { includeShadowDom: true })
   .find('header', { includeShadowDom: true })
   .find('.left-pane')
   .find('.logo-holder', { includeShadowDom: true })
   .find('img')
   .invoke('attr', 'src').should('contain', '/assets/logo.svg');
     
});  

it('Click Facebook Sign up button', () => {
  cy.visit("https://facebook.com");
 
   cy.wait(5000);
   cy.get('input[name="email"]').type('dipti.gorecha@prodigyinfosoft.com');
   cy.get('input[name="pass"]').type('prodigy1969');
   //cy.get('input[type="checkbox"]').click({force:true});
   cy.get('button[name="login"]').click({force:true});
   cy.wait(5000);
  });


it('Click Sign up button', () => {
  cy
  .get('ion-app')
  .find('app-header', { includeShadowDom: true })
  .find('header', { includeShadowDom: true })
  .find('.right-pane')
  .find('together-button', { includeShadowDom: true })
  .find('.together-button', { includeShadowDom: true })
  .find('.button-text', { includeShadowDom: true,timeout: 10000 }).should('be.visible')
  .contains('Sign up') .click({force: true});
 // cy.location('href').should('eq', 'https://psa.healthline.com/registration/STEP_ONE');
}); 


it.skip('Click Google Sign up button', () => {
        
        

  // cy
   //.get('app-registration', { includeShadowDom: true})
  // .find('.left-panel', { includeShadowDom: true,timeout: 10000 }).should('be.visible')
   //.find('.google', { includeShadowDom: true,timeout: 10000 }).eq(0).should('be.visible').click({force: true});
   //cy.wait(5000);
   //cy.get("@popup").should("be.called");
   //cy.wait(5000);
   //console.log(newUrl+"  -->");
 //       cy.visit("https://accounts.google.com");
  //      cy.wait(2000);
  // cy.get('#identifierId').type('prodigyinfosoft.p.ltd@gmail.com');
  // cy.get('#identifierNext button', { includeShadowDom: true})
  // .click({force: true});
   cy.wait(12000);
});  
})


 





