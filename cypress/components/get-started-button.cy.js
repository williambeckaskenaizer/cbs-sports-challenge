import GetStartedButton from '../../app/components/get-started-button';



describe('Get Started Button', () => {
    it('mounts', () => {
        cy.mount(<GetStartedButton toggleGradient={(test) => !test}/>)
        cy.get('button').contains('GET STARTED').and('be.visible').and('have.attr', 'aria-label', 'get started')
        cy.get('button').click()
    })
})