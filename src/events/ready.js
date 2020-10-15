const cron = require('node-cron');
const express = require('express');
module.exports = async (client) => {

    app = express();

    cron.schedule('0 0 10 * * WED', () => {
      client.channels.cache.find(channel => channel.name === 'is-it-wednesday')
        .send('It is wednesday my dudes');
        console.log('Runing a job on Wednesdays at 10:00');
      }, {
        scheduled: true,
        timezone: "America/Sao_Paulo"
      });

      app.listen(3000);
    console.log(`Logged in as ${client.user.tag}!`)
}
