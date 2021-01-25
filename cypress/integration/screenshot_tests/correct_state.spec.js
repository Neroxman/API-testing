import { onlyOn } from '@cypress/skip-test'
//import { marketingPageLinks, adminPanelPageLinks } from '../../../support/arrays.js'
import { format } from 'date-fns'

const day = format(new Date(), "d")
let start_test = true

if (day == '30') {
  start_test = true
}

onlyOn(start_test === true, () => {
  context('Correct screenshots', () => {
    before(() => {
      cy.viewport(1920, 1024)
        .visit('http://localhost:4200/')
    })

    it('Correct state buissnes page/admin panel', () => {
      cy.closeCookiesAlert()
        .correctScreenshot(marketingPageLinks)
    })
  })
})