class HomePage{
    getshopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}
export default HomePage;