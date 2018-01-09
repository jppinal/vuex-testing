// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  before: function(browser) {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer, function(result) {
        this.verify.urlContains('8080')
      })
      .waitForElementVisible('#app', 5000)
  },

  after: function(browser) {
    browser.end()
  },

  'test App Rendering': function(browser) {
    browser.expect.element('.hello').to.be.present
    browser.expect.element('img').to.be.present
    browser.expect.element('.hello h1').to.be.visible
    browser.expect.element('.hello h1').text.to.equal('Vuex testing App')
    browser.expect.element('#vuejs').to.be.an('a')
    browser.expect.element('#vuejs').to.have.attribute('href').equals('https://vuejs.org/')
    browser.expect.element('#vuejs').to.have.attribute('target').equals('_blank')
    browser.expect.element('#vuejs').to.have.css('color').which.equals('rgba(66, 185, 131, 1)') // Color converted needed?
    browser.expect.element('#numb').to.be.an('input')
    browser.expect.element('#numb').to.have.attribute('type').equals('number')
    browser.expect.element('#numb').to.have.value.equals('')
    browser.expect.element('#send').to.be.an('input')
    browser.expect.element('#send').to.have.attribute('type').equals('submit')
    browser.expect.element('#send').to.have.value.equals('send')
    browser.expect.element('#result').to.not.be.present
    browser.saveScreenshot('test/e2e/testAppRendering.png')
  },

  'test App Number Functionality': function(browser) {
    browser.setValue('#numb', '13', function() {
      browser.click('#send', function() {
        // #result must be shown
        browser.expect.element('#result').to.be.visible
        browser.expect.element('#result').text.to.equal('The number is greater than 10')
        browser.saveScreenshot('test/e2e/testAppNumberFunctionality.png')
      })
    })
  },

  'test App hide result': function(browser) {
    browser.expect.element('#numb').to.have.value.equals(13)
    browser.expect.element('#result').to.be.present
    browser.clearValue('#numb', function() {
      browser.expect.element('#numb').to.have.value.equals('')
      browser.setValue('#numb', '9', function() {
        browser.click('#send', function() {
          // #result must be hidden
          browser.expect.element('#result').to.not.be.present
          browser.saveScreenshot('test/e2e/testAppHideResult.png')
        })
      })
    })
  }
}
