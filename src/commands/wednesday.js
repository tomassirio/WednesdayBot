const Util = require('../utils/utils.js')

module.exports = {
    name: 'wednesday',
    description: 'Is it Wednesday?',
    execute: async (message, args) => {
        let { channel } = message
        let embededMessage = Util.embedMessage(
          "It is not :(",
          '0xffff00'
        )

        var today = new Date();
        if(today.getDay() == 3) {
          embededMessage = Util.embedMessage(
            "It is wednesday my dudes",
            '0xffff00'
          )
        }
        channel.send(embededMessage)
    },
  };
