const Discord = require('discord.js');
const botsettings = require('../botsettings.json');
const colorEmbed = require('../entities/color.json');
const av = require('../entities/images.json');

module.exports.run = async (client, message, args) =>
{
    let prefix = botsettings.prefix;

    let cmd = message.content.toLowerCase().split(`${prefix}urgay`);
    const user = message.mentions.users.first() || message.author

    try
    {
        if (cmd)
        {
            await message.delete({ timeout: 1000 });
            var a = [];
            a.push(cmd.slice(prefix));
            var again = a.slice(' ').shift();
        }
        if (again[1] || again[1] != '' || again[0] == '')
        {
                user.send('lmao ur gay');
        }
    }
    catch (err)
    {
        console.log(err);
        message.channel.send('Something went wrong.');
    }
}


module.exports.config =
{
    name: 'urgay',
    description: 'dm you a secret',
    usage: '/urgay',
    accessableby: 'Members',
    aliases: []
}
