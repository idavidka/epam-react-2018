describe('Search', function () {
    it('should search by button', function () {
        cy.visit('http://localhost:8080');

        cy.get('input[type="button"]').click();
    })

});