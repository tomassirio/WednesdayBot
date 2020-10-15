const Discord = require('discord.js')

const Utils = {
    embedMessage(message, color) {
        const embed = new Discord.MessageEmbed()
            .setTitle(message)
            .setColor(color)
        return embed
    }
}

module.exports = Utils
