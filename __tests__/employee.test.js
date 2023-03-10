const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const employee = new Employee("logan", 123, "logan@test.com");

      expect(employee.name).toEqual("logan");
      expect(employee.id).toEqual(123);
      expect(employee.email).toEqual("logan@test.com");
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Employee();

      expect(cb).toThrow();
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Employee(123, 123, "logan@test.com");

      expect(cb).toThrow();
    });

    it("should throw an error if 'id' is not a number", () => {
      const cb = () => new Employee("logan", "123", "logan@test.com");

      expect(cb).toThrow();
    });

    it("should throw an error if 'email' is not a string", () => {
      const cb = () => new Employee("logan", 123, 123);

      expect(cb).toThrow();
    });
  });

  describe("getName", () => {
    it("should return the employee's name", () => {
      const employee = new Employee("logan", 123, "logan@test.com");

      expect(employee.getName()).toEqual("logan");
    });
  });

  describe("getId", () => {
    it("should return the employee's id", () => {
      const employee = new Employee("logan", 123, "logan@test.com");

      expect(employee.getId()).toEqual(123);
    });
  });

  describe("getEmail", () => {
    it("should return the employee's email", () => {
      const employee = new Employee("logan", 123, "logan@test.com");

      expect(employee.getEmail()).toEqual("logan@test.com");
    });
  });

  describe("getRole", () => {
    it("should return 'Employee'", () => {
      const employee = new Employee("logan", 123, "logan@test.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
