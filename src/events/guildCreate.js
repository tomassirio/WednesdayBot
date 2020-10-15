module.exports = async (client, guild) => {
    guild.channels.create('Is-it-Wednesday?', { reason: 'You need to know if its wednesday my dudes' })
            .then(console.log)
            .catch(console.error);
    console.log('I have joined a new server!')
}
