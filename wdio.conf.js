const allure = require("allure-commandline");
const { join } = require("path");

exports.config = {
  tsNode: {
    transpileOnly: true,
    require: 'tsconfig-paths/register',
    hooks: {
      after: [/* Adicione outras lógicas de hooks se necessário */]
    }
  },

  waitforTimeout: 300000,
  runner: "local",
  port: 4723,
  path: "/wd/hub",
 // services: ["appium"],
  specs: ["./test/specs/**/*.js"],
  framework: "mocha",
  mochaOpts: {
    timeout: 300000,
  },
  capabilities: [
    {
      maxInstances: 1,
      platformName: "Android",
      "appium:platformVersion": "9",
      "appium:deviceName": "Pixel",
      "appium:automationName": "UiAutomator2",
      "appium:app": join(process.cwd(), "./app/app-release.apk"),
      "appium:appPackage": "com.nickelpay",
      "appium:appActivity": "com.nickelpay.MainActivity",
      "appium:disableIdLocatorAutocompletion": true,
      "appium:autoGrantPermissions": true,
  }
  ],

  // ... outras configurações ...

  reporters: [
    "spec",
    [
      "video",
      {
        saveAllVideos: false,
        videoSlowdownMultiplier: 50,
      },
    ],
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  // ... outras configurações ...

  onComplete: function () {
    // ... Código para gerar relatório Allure após a conclusão dos testes ...
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    // ... Código para tirar screenshots após cada teste ...
  },
};
