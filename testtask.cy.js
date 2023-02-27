import { faker } from '@faker-js/faker';
const email =faker.internet.email();
const password = faker.internet.password(10,true);
const firstname = faker.name.firstName();
const lastname = faker.name.lastName();
const mobile= faker.phone.phoneNumber('##########');
const street=faker.address.street();
const number=faker.phone.phoneNumber('###');
const city=faker.address.city();
const zip=faker.address.zipCode();
const card=faker.finance.creditCardNumber();
const cvv=faker.finance.creditCardCVV();
const expDate=faker.phone.phoneNumber('###');


describe('test task', () => {

  beforeEach(() =>{
    cy.visit('/')

  }); 

  it('should remove item from the shopping cart', () => {
  
    cy.get('[id="usercentrics-root"]')
    .shadow()
    .find('[data-testid="uc-accept-all-button"]')
    .click()

    cy.contains('Browse products')
    .click()

    cy.contains('Dresses')
    .click()

    cy.contains('Linen Dress')
    .click()

    cy.wait(1000)

    cy.contains('Select size')
    .click()

    cy.contains('EU 40')
    .click()

    cy.contains('Add to bag')
    .click()

    cy.get('[data-test-id="features.sitelayout.header.cart"]')
    .should('contains.text','1')
    .click()

    cy.get('[data-test-id="features.sitelayout.minicart.removebutton"]')
    .click()

    cy.wait(2000)

    cy.contains('Your cart is empty')
    .should('exist')

  })

  it.only('should add item to the shopping cart and checkout', () => { //было бы неплохо написать еще проверок и сделать селекторы лучше

    cy.get('[id="usercentrics-root"]')
    .shadow()
    .find('[data-testid="uc-accept-all-button"]')
    .click()

    cy.contains('Browse products')
    .click()

    cy.contains('Dresses')
    .click()

    cy.contains('Linen Dress')
    .click()

    cy.wait(1000)

    cy.contains('Select size')
    .click()

    cy.contains('EU 40')
    .click()

    cy.contains('Add to bag')
    .click()

    cy.get('[data-test-id="features.sitelayout.header.cart"]')
    .should('contains.text','1')
    .click()

    cy.contains('To checkout')
    .click()

    cy.get('[name="billing_fname"]')
    .type(firstname)

    cy.get('[name="billing_lname"]')
    .type(lastname)

    cy.get('[name="email"]')
    .type(email)

    cy.get('[name="emailConfirmed"]')
    .type(email)

    cy.get('[name="mobile"]')
    .type(mobile)

    cy.get('[name="billing_address"]')
    .type(street+number)
    
    cy.get('[class="pcaautocomplete pcatext"]')
    .click({force: true})

    cy.get('[class="pcaautocomplete pcatext"]')
    .click()

    cy.get('[class="pcaautocomplete pcatext"]')
    .click()
    
    cy.wait(3000)

    cy.contains('PayPal')
    .click()

    cy.wait(3000)

    cy.get('[class="adyen-checkout__paypal"]')
    .click({force:true})

  })

  it('should sign up,sign out and sign in', () => { 

    cy.get('[id="usercentrics-root"]')
    .shadow()
    .find('[data-testid="uc-accept-all-button"]')
    .click()

    cy.get('[class="qbo qbp qbq qg1 qbr qbs"]')
    .click()

    cy.get('[class="sg-header-my-pages-button qj qa8 qce qcf"]')
    .click()

    cy.contains('Sign up')
    .click()

    cy.get('[name="email"]')
    .type(email)

    cy.get('[name="password"]')
    .type(password)

    cy.get('[name="confirmPassword"]')
    .type(password)

    cy.get('[class="qf7 qt qbj"]')
    .click('center')

    cy.wait(3000)

    cy.get('[class="sg-header-my-pages-button qj qa8 qce qcf"')
    .click()
    .contains('My account')
    .should('exist')  
  
    cy.get('[class="sg-header-my-pages-button qj qa8 qce qcf"').contains('Sign out')
    .click()

    cy.get('[class="sg-header-my-pages-button qj qa8 qce qcf"')
    .click()
  
    cy.contains('[type="button"]','Sign in')
    .click()

    cy.get('[name="email"]')
    .type(email)

    cy.get('[name="password"]')
    .type(password)

    cy.get('[class="qb qc qa0 qbj qa8 qt"]')
    .click()

    cy.get('[class="sg-header-my-pages-button qj qa8 qce qcf"')
    .click()
    .contains('My account')
    .should('exist') 

  }) 
  
})