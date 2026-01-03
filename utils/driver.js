const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { ServiceBuilder } = require("selenium-webdriver/chrome");
require("chromedriver");

async function getDriver() {
  const options = new chrome.Options();

  options.addArguments(
    "--headless",
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu"
  );

  options.setChromeBinaryPath("/usr/bin/chromium");

  
  const service = new ServiceBuilder("/usr/bin/chromedriver");

  return new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .setChromeService(service)
    .build();
}

module.exports = getDriver;

