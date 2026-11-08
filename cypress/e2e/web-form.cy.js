// Goal: fill in every kind of field on Selenium's web form, send
// the form, and check that the next page says Received!.
describe("Selenium Web Form Test", () => {
  it("fills in the fields and sends the form", () => {
    cy.visit("https://www.selenium.dev/selenium/web/web-form.html");
    cy.title().should("eq", "Web form");

    // กรอกข้อมูลช่อง Text, Password และ Textarea
    cy.get("#my-text-id").type("Cypress");
    cy.get("#my-text-id").should("have.value", "Cypress");
    cy.get('input[name="my-password"]').type("Secret123");
    cy.get('textarea[name="my-textarea"]').type("Hello from Cypress");

    // เลือกตัวเลือก Dropdown
    cy.get('select[name="my-select"]').select("Two");
    cy.get('select[name="my-select"]').should("have.value", "2");

    // ติ๊ก Checkbox และเลือก Radio Button
    cy.get("#my-check-2").check();
    cy.get("#my-check-2").should("be.checked");
    cy.get("#my-radio-2").check();
    cy.get("#my-radio-1").should("not.be.checked");

    // กดปุ่ม Submit และตรวจสอบผลลัพธ์ในหน้าถัดไป
    cy.get('button[type="submit"]').click();
    cy.title().should("eq", "Web form target page");
    cy.get("#message").should("have.text", "Received!");
  });
});
