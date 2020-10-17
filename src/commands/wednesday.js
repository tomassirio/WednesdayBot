const Util = require('../utils/utils.js')

module.exports = {
    name: 'wednesday',
    description: 'Is it Wednesday?',
    execute: async (message, args) => {
        const today = new Date()
        const { channel } = message
        const color = '0xffff00'

        let embededMessage;
        if(today.getDay() == 3) {
            embededMessage = 'It is wednesday my dudes'
        } else if(today.getDay() == 2) {
            embededMessage = 'Brace yourselves, wednesday is coming!'
        } else if(today.getDay() == 4) {
            embededMessage = 'It was yesterday. Do you want more wednesdays? Me too'
        } else {
            embededMessage = 'It is not :('
        }

        channel.send(Util.embedMessage(embededMessage, color))
    },
}
