const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

const loginAndCheckMenus = async () => {
  const url = "http://localhost:3001/";
  const userEmail = "testmail4mef@gmail.com";
  const userPassword = "S19xu0$uT*";
  // Launch Browser App
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    // await driver.wait(1000);

    await driver.get(url);

    // add email and password to Login and Password and press login, admin Password is ``
    await driver.findElement(By.id("email")).sendKeys(userEmail);
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
    // const ulDepth0 = await driver.findElement(By.className("depth-0"));
    // const depth0LiCategory = await ulDepth0.findElement(
    //   By.className("category")
    // );
    // const depth0LiCategoryItem = await depth0LiCategory.findElement(
    //   By.className("item")
    // );
    // assert.notEqual(await depth0LiCategoryItem.getText(), "");
    // await driver.wait(until.elementIsSelected(depth0LiCategory), 2000);

    // const ulDepth1 = await depth0LiCategory.findElement(
    //   By.className("depth-1")
    // );
    // const depth1LiCategoryItem = await ulDepth1.findElement(
    //   By.className("item")
    // );
    // const linkText = await depth1LiCategoryItem
    //   .findElement(By.css("a"))
    //   .getText();
    const depth1LiCategoryItem = await driver.findElement(
      By.xpath('//div[@class="TreeView"]')
    );
    const linkText = await depth1LiCategoryItem
      .findElement(By.className("item"))
      .getText();
    assert.strictEqual(linkText, "Org's Configuration");
  } catch (error) {
    console.log(`Error: ${error}`);
    await driver.quit();
  } finally {
    await driver.quit();
  }
};

module.exports = loginAndCheckMenus;
