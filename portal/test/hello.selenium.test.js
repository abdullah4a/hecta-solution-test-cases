const {Builder}=require('selenium-webdriver')

const sayHello=async ()=>{
    // Launch Browser App
    const driver = await new Builder().forBrowser("chrome").build()

    // await driver.wait(1000);

    await driver.get('http://localhost:3002/')

    await driver.quit()
}

module.exports = sayHello