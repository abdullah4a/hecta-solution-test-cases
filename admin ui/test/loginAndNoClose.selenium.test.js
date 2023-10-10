const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

const loginTheUser = async () => {
  const url = "http://localhost:3000/";
  // Launch Browser App
  const driver = await new Builder().forBrowser("chrome").build();

  // await driver.wait(1000);

  await driver.get(url);

  // add email and password to Login and Password and press login, admin Password is ``
  await driver.findElement(By.id("email")).sendKeys("abdullahkhan4a@gmail.com");
  const emailInputText = await driver
    .findElement(By.id("email"))
    .getAttribute("value");

  assert.strictEqual(emailInputText, "abdullahkhan4a@gmail.com");

  await driver.findElement(By.id("password")).sendKeys("6njjh%ZUX%");
  const passwordInputText = await driver
    .findElement(By.id("password"))
    .getAttribute("value");

  assert.strictEqual(passwordInputText, "6njjh%ZUX%");

  const submitButton = await driver.findElement(By.css("button[type=submit]"));

  await submitButton.click();

  await driver.wait(until.urlContains(`${url}home`), 10000, "Visited");
};

module.exports = loginTheUser;
