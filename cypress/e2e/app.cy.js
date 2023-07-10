// const { describe } = require("node:test")

describe('Landing Text', () => {
    it('Should contain landing page text', () => {
        cy.visit("http://localhost:3000/")
        cy.get('h1').contains('WATCH LIVE').and('be.visible')
        cy.get('h1').contains('CBS SPORTS').and('be.visible')
    })
})

describe('Get Started Button', () => {
    it('should contain get started button', () => {
        cy.visit("http://localhost:3000/")
        cy.get('button').contains('GET STARTED').and('be.visible').and('have.attr', 'aria-label', 'get started')
    })
})

describe('Update Local Storage', () => {
    it('should update localstorage', () => {
        cy.visit("http://localhost:3000/")
        cy.getAllLocalStorage().then((result) => {
            expect(result).to.deep.equal({
                'http://localhost:3000': {
                    'visits': '1'
                }
            })
        })
        cy.reload()
        cy.getAllLocalStorage().then((result) => {
            expect(result).to.deep.equal({
                'http://localhost:3000': {
                    'visits': '2'
                }
            })
        })
    })
})

describe('Reset Local Storage', () => {
    it('should reset localstorage when query "?reset=1" provided', () => {
        cy.visit("http://localhost:3000/")
        cy.getAllLocalStorage().then((result) => {
            expect(result).to.deep.equal({
                'http://localhost:3000': {
                    'visits': '1'
                }
            })
        })
        cy.reload()
        cy.getAllLocalStorage().then((result) => {
            expect(result).to.deep.equal({
                'http://localhost:3000': {
                    'visits': '2'
                }
            })
        })
        cy.visit("http://localhost:3000/?reset=1")
        cy.getAllLocalStorage().then((result) => {
            expect(result).to.deep.equal({
                'http://localhost:3000': {
                    'visits': '1'
                }
            })
        })

    })
})

