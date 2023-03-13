const Employee = require("../lib/employee");

test("testing getName method.", () => {
    const testName = "Logan";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("testing getID method.", () => {
    const testID = 14;
    const employeeInstance = new Employee("Logan", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("testing getEmail method.", () => {
    const testEmail = "logan@test.com";
    const employeeInstance = new Employee("Logan", 14, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("testing getRole.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Logan", 14, "logan@test.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})