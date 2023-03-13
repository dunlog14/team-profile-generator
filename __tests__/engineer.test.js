const Engineer = require("../lib/engineer");

test("testing getGithub", () => {
    const testGithub = "dunlog14";
    const employeeInstance = new Engineer("Logan", 14, "logan@test.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("testing getRole", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Logan", 14, "logan@test.com", "dunlog14");
    expect(employeeInstance.getRole()).toBe(returnValue);
});