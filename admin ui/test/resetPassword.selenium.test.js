const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

const loginUser = async () => {
  const url = "http://localhost:3000/";
  const userEmail='abdullahkhan4a@gmail.com'
  const successMsg = 'Your password has been updated successfully'

  // Launch Browser App
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    // await driver.wait(1000);

    await driver.get(url);

    // Reset Password Link must needs to be handled
    // http://localhost:3000/forgot-password
    const resetPasswordLink = await driver.findElement(
      By.partialLinkText("Reset Password")
    );
    await resetPasswordLink.click();
    const emailTag = await driver
      .findElement(By.id("email"))
      .sendKeys(userEmail);

    const submitButton = await driver.findElement(
      By.css("button[type=submit]")
    );
    await submitButton.click();


    await driver.wait(until.elementLocated(By.className('message-body')), 10000)
    setTimeout(async ()=>{
      const msg = await driver.findElement(By.className('message-body'))
    const msgText = msg.getText()

    assert.strictEqual(msgText, successMsg)
    })
  } finally {
      await driver.quit();
  }
};

module.exports = loginUser;
