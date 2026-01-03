const getDriver = require("../utils/driver");
const { By, until } = require("selenium-webdriver");

(async function loginTest() {
  const driver = await getDriver();

  try {
    await driver.get("https://the-internet.herokuapp.com/login");

    await driver.findElement(By.id("username")).sendKeys("tomsmith");
    await driver.findElement(By.id("password")).sendKeys("SuperSecretPassword!");
    await driver.findElement(By.css("button[type='submit']")).click();

    await driver.wait(
      until.elementLocated(By.id("flash")),
      5000
    );

    console.log("✅ Selenium Test Passed");
  } catch (err) {
    console.error("❌ Selenium Test Failed");
    console.error(err);
    process.exit(1);
  } finally {
    await driver.quit();
  }
})();
