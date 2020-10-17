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
            embededMessage = {
                message: 'It is wednesday my dudes',
                imageURI: 'https://i.imgur.com/1Ezcod1.png'
            }
        } else if(today.getDay() == 2) {
            embededMessage = {
                message: 'Brace yourselves, wednesday is coming!',
                imageURI: 'https://i.imgur.com/WohbbRs.png'
            }
        } else if(today.getDay() == 4) {
            embededMessage = {
                message: 'It was yesterday. Do you want more wednesdays? Me too',
                imageURI: 'https://i.imgur.com/1lxuqMV.png'
            }
        } else {
            embededMessage = {
                message: 'It is not :(',
                imageURI: 'https://i.imgur.com/ais8zgq.jpeg'
            }
        }

        channel.send(Util.embedMessage(embededMessage, color))
    },
}
