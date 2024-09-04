describe('Success Login', () =>{
  beforeEach(() =>{
      cy.clearAllBeforeVisit()
  })

  it('Should login with for each user', () =>{
    cy.fixture('users').then((users) =>{
      cy.login(users.userName, users.password).each()
      cy.url().should('include', '/inventory.html')
      cy.log('Login Success')
    }) 
  })

  it('Should login with user 2', () =>{
    cy.fixture('users').then((users) =>{
      cy.login(users.user2.userName, users.user2.password)
    }) 
  })
  
  it('Should login with user 3', () =>{
    cy.fixture('users').then((users) =>{
      cy.login(users.user3.userName, users.user3.password)
    }) 
  })

  it('Should login with user 4', () =>{
    cy.fixture('users').then((users) =>{
      cy.login(users.user4.userName, users.user4.password)

    }) 
  })

  it('Should login with user 5', () =>{
    cy.fixture('users').then((users) =>{
      cy.login(users.user5.userName, users.user5.password)

    }) 
  })

  it('Should login with user 6', () =>{
    cy.fixture('users').then((users) =>{
      cy.login(users.user6.userName, users.user6.password)

    }) 
  })

  it('Should login with user 7', () =>{
    cy.fixture('users').then((users) =>{
      cy.login(users.user7.userName, users.user7.password)
    }) 
  })
})