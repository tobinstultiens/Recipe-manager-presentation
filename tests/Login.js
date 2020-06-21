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
        .assert.visible('#app > div > div > div.col.col-6 > div > div.container > div > div > div.col-sm-8.col-6 > div.elevation-12.v-card.v-sheet.theme--dark > div.v-card__actions > button')
        .click('#app > div > div > div.col.col-6 > div > div.container > div > div > div.col-sm-8.col-6 > div.elevation-12.v-card.v-sheet.theme--dark > div.v-card__actions > button')
        .assert.visible('#app > div > div:nth-child(2) > button:nth-child(1)')
        .end();
    },
    'Demo test logout' : function (browser) {
      browser
        .url('http://localhost:8080/Login')
        .waitForElementVisible('body')
        .assert.titleContains('recipe')
        .assert.visible('input[name=email]')
        .setValue('input[name=email]', 'nightwatch@mail.com')
        .assert.visible('input[name=password]')
        .setValue('input[name=password]', 'testpassword')
        .assert.visible('#app > div > div > div.col.col-6 > div > div.container > div > div > div.col-sm-8.col-6 > div.elevation-12.v-card.v-sheet.theme--dark > div.v-card__actions > button')
        .click('#app > div > div > div.col.col-6 > div > div.container > div > div > div.col-sm-8.col-6 > div.elevation-12.v-card.v-sheet.theme--dark > div.v-card__actions > button')
        .assert.visible('#app > div > div:nth-child(2) > button:nth-child(1)')
        .click('#app > div > div:nth-child(2) > button:nth-child(1)')
        .assert.visible('#app > div > div > div.col.col-6 > div > div.container > div > div > div.col-sm-8.col-6 > div.elevation-12.v-card.v-sheet.theme--dark > div.v-card__actions > button')
        .end();
    }
  };