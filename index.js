const axios = require('axios')
require('dotenv').config()

const yandexPassportOauthToken = process.env.YANDEX_PASSPORT_OAUTH_TOKEN
const telegramKey = process.env.TELEGRAM_KEY
const iamToken = 't1.9euelZqbi43NypbGkcfHiZvJmc-Sle3rnpWanMvKnZSJlY7HnIqazs_IipLl9Pd0JApp-e8eVUOV3fT3NFMHafnvHlVDlQ.xEkBwDhY7grBCs6jQzdjJBXX3UF6HfD7L3HpvrvSV4vibIUSbjYKe1e3Ak3iPbglq10pVHtUlCf2PyqFp2LdCg'
const folderId = 'b1g46p8b7uvgdtfsgneb'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Authorization: Bearer ${iamToken}`
}
//GET TOKEN
// axios.post('https://iam.api.cloud.yandex.net/iam/v1/tokens', { yandexPassportOauthToken }).then(res => {
//     console.log(res.data)
// })
// translate("Hello")

function translate(text) {
    return new Promise((resolve, reject) => {
        const data = {
            folderId,
            texts: [text],
            targetLanguageCode: "en"
        }
        axios.post('https://translate.api.cloud.yandex.net/translate/v2/translate', data, { headers }).then(res => {
            console.log(res.data.translations[0].text)
            resolve(res.data.translations[0].text)
        })

    })

}
// TELEGRAM BOT

const { Telegraf } = require('telegraf')

const bot = new Telegraf(telegramKey);
bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my PolyglotEnoty bot.', {})
})
bot.on('message', function (ctx, next) {
    console.log(ctx.update.message.text)
    translate(ctx.update.message.text).then(res => {
        ctx.reply(res)
    })

});

bot.launch();