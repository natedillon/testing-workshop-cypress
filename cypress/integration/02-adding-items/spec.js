/// <reference types="cypress" />
it('loads', () => {
  // application should be running at port 3000
  cy.visit('localhost:3000')
  cy.contains('h1', 'todos')
})

// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// remember to manually delete all items before running the test
// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

it('adds two items', () => {
  // repeat twice
  //    get the input field
  //    type text and "enter"
  //    assert that the new Todo item
  //    has been added added to the list
  // cy.get(...).should('have.length', 2)
  cy.get('.new-todo').type('buy milk{enter}')
  cy.contains('li', 'buy milk').should('be.visible')
  cy.get('.new-todo').type('buy cookies{enter}')
  cy.contains('li', 'buy cookies').should('be.visible')
})

const addItem = (text) => {
  cy.get('.new-todo').type(`${text}{enter}`)
}

it('can mark an item as completed', () => {
  // adds a few items
  addItem('pay bills')
  addItem('go to the gym')

  // marks the first item as completed
  // My answer:
  // cy.get('.todo:nth-child(1) > .view > .toggle').click()
  cy.contains('li.todo', 'pay bills').should('exist').find('.toggle').check()

  // confirms the first item has the expected completed class
  // My answer:
  // cy.get('.todo:nth-child(1)').should('have.class', 'completed')
  cy.contains('li.todo', 'pay bills').should('have.class', 'completed')

  // confirms the other items are still incomplete
  cy.contains('li.todo', 'go to the gym').should('not.have.class', 'completed')
})

it('can delete an item', () => {
  // adds a few items
  // deletes the first item
  // use force: true because we don't want to hover
  // confirm the deleted item is gone from the dom
  // confirm the other item still exists
})

it('can add many items', () => {
  const N = 5
  for (let k = 0; k < N; k += 1) {
    // add an item
    // probably want to have a reusable function to add an item!
  }
  // check number of items
})

it('adds item with random text', () => {
  // use a helper function with Math.random()
  // or Cypress._.random() to generate unique text label
  // add such item
  // and make sure it is visible and does not have class "completed"
})

it('starts with zero items', () => {
  // check if the list is empty initially
  //   find the selector for the individual TODO items
  //   in the list
  //   use cy.get(...) and it should have length of 0
  //   https://on.cypress.io/get
})

it('does not allow adding blank todos', () => {
  // https://on.cypress.io/catalog-of-events#App-Events
  cy.on('uncaught:exception', () => {
    // check e.message to match expected error text
    // return false if you want to ignore the error
  })

  // try adding an item with just spaces
})

// what a challenge?
// test more UI at http://todomvc.com/examples/vue/
