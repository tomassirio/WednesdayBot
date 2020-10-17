const Discord = require('discord.js')

const Utils = {
    embedMessage(embedMessage, color) {
        const embed = new Discord.MessageEmbed()
            .setTitle(embedMessage.message)
            .setColor(color)
            .setImage(embedMessage.imageURI)
        return embed
    }
}

module.exports = Utils
