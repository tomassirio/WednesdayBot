/* eslint-disable import/no-unresolved */
const path = require('path')
const result = require('dotenv').config({ path: path.join(__dirname, '.env') })

if (result.error) throw result.error // Throw an error if it failed to load the content off the .env file.

module.exports = {
    prefix: process.env.PREFIX,
    botToken: process.env.BOT_TOKEN,
}
