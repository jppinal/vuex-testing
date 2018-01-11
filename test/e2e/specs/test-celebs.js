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

  'step 0: rendering': function(browser) {
    browser.expect.element('#celebs-list').to.not.be.present
    browser.saveScreenshot('test/e2e/specs/test-celbs/step0_rendering.png')
  },

  'step 1: click @who': function(browser) {
    browser.click('#who', function() {
      // #celebs-list must be shown
      browser.expect.element('#celebs-list').to.be.visible.after(2000)
      browser.saveScreenshot('test/e2e/specs/test-celbs/step1_click@who.png')
    })
  }
}
