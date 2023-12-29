describe('Cura make appoinment', () => {

  it('Visit the URL', function () {

    cy.visit('https://katalon-demo-cura.herokuapp.com/');
  });
  it('Make appoinment', function () {
    cy.get('#btn-make-appointment').click();

  });

  it('Login to the app', () => {
   
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPasswordDoe');
    cy.get('#btn-login').click();

  });

  it('Make appionment', () => {

    cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');
    cy.get('[type="checkbox"]').check();
    cy.get('[type="radio"]').check('Medicaid');
    cy.get('#txt_visit_date').type('29/12/2023');
    cy.get('#txt_comment').click({force: true}); // to close the calender
    cy.get('#txt_comment').type('Nothing special');
    cy.xpath('//button[@id="btn-book-appointment"]').click();// using xpath 

  });

  it('Verify appoiunment', () => {

  });
});