describe('Email Signin Flow tests',  {
   viewportHeight: 768,
   viewportWidth: 1366,
 }, () => {

it('Click Log in link', () => {
   cy
   .get('ion-app')
   .find('app-header', { includeShadowDom: true })
   .find('header', { includeShadowDom: true })
   .find('.right-pane')
   .find('together-highlight-text', { includeShadowDom: true })
   .find('.together-highlight-text', { includeShadowDom: true ,timeout: 10000 }).should('be.visible')
   .contains('Log In') .click({force: true});
   cy.wait(5000);
   cy.location('href').should('eq', Cypress.config('baseUrl')+'/signin/SIGNIN');
});  

it('Enter email ID , Password and click Login button on SignIn page', () => {
  cy
   .get('app-signin', { includeShadowDom: true })
   .find('.left-panel', { includeShadowDom: true })
   .find('.together-form-prompt', { includeShadowDom: true })
   .find('span', { includeShadowDom: true}).eq(0)
   .click({force: true});
   //cy.wait(1000);
   cy
   .get('app-signin', { includeShadowDom: true })
   .find('.left-panel', { includeShadowDom: true })
   .find('.together-input-field', { includeShadowDom: true })
   .find('input[name="name"]', { includeShadowDom: true ,timeout: 10000 }).should('be.visible').type('{selectall}{backspace}{selectall}{backspace}').type(Cypress.config('user')+'@healthline.com');
  
   cy
   .get('app-signin', { includeShadowDom: true })
   .find('.together-input-field', { includeShadowDom: true })
   .find('span', { includeShadowDom: true}).eq(1)
   .click({force: true});

   cy
   .get('app-signin', { includeShadowDom: true })
   .find('input[name="password"]', { includeShadowDom: true }).type('12345678');
   
   cy
   .get('app-signin', { includeShadowDom: true })
   .find('.button-text', { includeShadowDom: true ,timeout: 10000 }).should('be.visible')
   .contains('Log in').click({force: true});

   cy.wait(5000);

}); 


});




