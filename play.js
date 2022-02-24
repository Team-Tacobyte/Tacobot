const { Player } = require('discord-player');

module.exports.run = async (client, message, args) =>
{
    const player = new Player(client);
    client.player = player

    let track = await client.player.play(message.member.voice.channel, args[0], message.member.user.tag);
    message.channel.send(`Currently playing ${track.name}! - Requested by `);
}
module.exports.config =
{
    name: 'play',
    description: '',
    usage: '+play',
    accessableby: 'Members',
    aliases: []
}