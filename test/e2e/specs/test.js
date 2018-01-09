// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer, function(result) {
        this.verify.urlContains('8080')
      })
      .waitForElementVisible('#app', 5000, true, function() {
        testApp(this)
      })
  }
}

const testApp = function(browser) {
  console.log('testApp')
  browser.saveScreenshot('test/e2e/testApp.png')
  browser.expect.element('.hello').to.be.present
  browser.expect.element('img').to.be.present
  browser.expect.element('.hello h1').to.be.visible
  browser.expect.element('.hello h1').text.to.equal('Vuex testing App')
  browser.expect.element('#vuejs').to.be.an('a')
  browser.expect.element('#vuejs').to.have.attribute('href').equals('https://vuejs.org/')
  browser.expect.element('#vuejs').to.have.attribute('target').equals('_blank')
  browser.expect.element('#vuejs').to.have.css('color').which.equals('rgba(66, 185, 131, 1)') // Color converted needed?
}
