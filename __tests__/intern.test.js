const Intern = require("../lib/intern");

test("testing getSchool", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Logan", 101, "logan@test.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("testing getRole", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Logan", 101, "logan@test.com", "UCLA");
    expect(employeeInstance.getRole()).toBe(returnValue);
});