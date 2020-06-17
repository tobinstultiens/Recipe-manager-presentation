module.exports = {
    'Demo test login' : function (browser) {
      browser
        .url('http://localhost:8080/Login')
        .waitForElementVisible('body')
        .assert.titleContains('recipe')
        .assert.visible('input[name=email]')
        .setValue('input[name=email]', 'nightwatch@mail.com')
        .assert.visible('input[name=password]')
        .setValue('input[name=password]', 'testpassword')
        .assert.visible('button[type=button]')
        .click('button[type=button]')
        .end();
    }
  };