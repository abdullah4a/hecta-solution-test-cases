const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

const loginUser = async () => {
  const url = "http://localhost:3000/";
  const userEmail = "abdullahkhan4a@gmail.com";
  const userPassword = "%z$S%@c0qn";

  // Launch Browser App
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    // await driver.wait(1000);

    await driver.get(url);

    // add email and password to Login and Password and press login, admin Password is ``
    await driver
      .findElement(By.id("email"))
      .sendKeys(userEmail);
    const emailInputText = await driver
      .findElement(By.id("email"))
      .getAttribute("value");

    assert.strictEqual(emailInputText, userEmail);

    await driver.findElement(By.id("password")).sendKeys(userPassword);
    const passwordInputText = await driver
      .findElement(By.id("password"))
      .getAttribute("value");

    assert.strictEqual(passwordInputText, userPassword);

    const submitButton = await driver.findElement(
      By.css("button[type=submit]")
    );

    await submitButton.click();

    await driver.wait(until.urlContains(`${url}home`), 1000, "Visited");
  } finally {
    // setTimeout(async () => {
      await driver.quit();
    // }, 10000);
  }
};

module.exports = loginUser;
