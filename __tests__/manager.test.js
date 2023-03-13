const Manager = require("../lib/manager");

test("testing getOfficeNumber", () => {
    const testOfficeNumber = 101;
    const employeeInstance = new Manager("Logan", 14, "logan@test.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("testing getRole", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Logan", 101, "logan@test.com", 14);
    expect(employeeInstance.getRole()).toBe(returnValue);
});