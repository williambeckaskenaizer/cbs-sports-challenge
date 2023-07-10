import Circles from '../../app/components/Circles';

describe('Count Bubbles', () => {
    it('mounts', () => {
        cy.mount(<Circles circleCount={1} />)
    })

    it('should contain 10 bubbles', () => {
        cy.mount(<Circles circleCount={10} />)
        cy.get('span').should('have.length', 20).and('be.visible')
    })
})