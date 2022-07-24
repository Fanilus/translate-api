const axios = require('axios')
require('dotenv').config()

const yandexPassportOauthToken = process.env.YANDEX_PASSPORT_OAUTH_TOKEN
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
translate("Hello")

async function translate(text) {
    const data = {
        folderId,
        texts: [text],
        targetLanguageCode: "ru"
    }
    axios.post('https://translate.api.cloud.yandex.net/translate/v2/translate', data, { headers }).then(res => {
        console.log(res.data.translations[0].text)
    })
}