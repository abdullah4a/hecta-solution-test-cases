const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

const loginUser = async () => {
  const url = "http://localhost:3001/";
  const userEmail = "testmail4mef@gmail.com";
  const userPassword = "S19xu0$uT*";
  const errorMsg='Services are not accessible at this moment.'
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

    const getErrorMessage = await driver.findElement(
      By.className("message-body")
    );

    const errorMessageText = await getErrorMessage.getText()

    assert.strictEqual(errorMessageText, errorMsg)
  } finally {
    await driver.quit();
  }
};

module.exports = loginUser;
