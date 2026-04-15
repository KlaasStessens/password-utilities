const { generateStrongPassword } = require("../index");

test("generates a password of a given number of characters", () => {
    password = generateStrongPassword(1);
    expect(password.() == 1 );
});

const { isStrongPassword } = require("../index");

test("checks if a password is secure enough", () => {
  expect(isStrongPassword("Hello World")).toBe(false);
});

