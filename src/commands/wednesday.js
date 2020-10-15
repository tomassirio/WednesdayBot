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
        } else {
            embededMessage = 'It is not :('
        }

        channel.send(Util.embedMessage(embededMessage, color))
    },
}
