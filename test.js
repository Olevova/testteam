const { describe } = require("mocha");
const { Builder, By } = require("selenium-webdriver");
const should = require("chai").should();
const chrome = require("selenium-webdriver/chrome");



describe('testselenium', ()=>{
    let driver = null

    beforeEach(async()=>{
        const options = new chrome.Options();
        options.addArguments("--incognito");

        driver = await new Builder()
        .forBrowser('chrome')
        .usingServer("http://localhost:4444/wd/hub/")
        .setChromeOptions(options)
        .build()
        console.log('her');

    }

    );

    afterEach(async()=>{
        if (driver) {
            await driver.quit();
          };

    });

    it("run test", async ()=>{
        console.log('http://192.168.0.103:8080/');
        await driver.get('http://192.168.0.103:8080/');
        await driver.sleep(2000);
        const logo = await driver.findElement(By.xpath('//a[@class="logo"]'));
        const logotext = await logo.getText();
        await driver.sleep(2000);
        logotext.should.to.equal("LOGO")

    })
})