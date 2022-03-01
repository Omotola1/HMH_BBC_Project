///<reference types = "Cypress" />


describe('Verify the menu items', ()=>{

    it ('should have menu items', ()=> {

        cy.visit('https://www.bbc.com/')
        cy.get('.fc-cta-consent > .fc-button-label').click()
        cy.get('#bbccookies-continue-button > [data-region-filter="eu"]').click()

        const menuList = [

            "Home", "News", "Sport", "Reel", "Worklife", "Travel", "Future", "Culture", "Music", "TV", "Weather", "Sound"
        ]
        
        cy.get("div[id='orb-nav-links'] li[class*='orb-nav").should("have.length", 12)
        cy.get("div[id='orb-nav-links'] li[class*='orb-nav").each((item, index, list)=>{

        cy.wrap(item).should("contain.text", menuList[index])

    })



    it('should verify that the date and day are correct', ()=>{

         // Get the current date and save in a variable 'date'

         const date = new Date()

         // Get the date displayed on the bbc website and compare the current date to the date in the element
 
        // cy.get('').should('eq', date)
    })
            
        
        
    })

    it('shoud veify the url', ()=>{

        cy.get('#orb-nav-links > ul > .orb-nav-newsdotcom > a').click()
        cy.url().should('eq', 'https://www.bbc.com/news')
    })

    it('should search for query term', ()=> {

        cy.get('#orb-search-q').type('Houghton Mifflin Harcourt')
        cy.get('#orb-search-button').click()
        
        cy.contains('Houghton Mifflin Harcourt')
    })

})