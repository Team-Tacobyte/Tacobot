const Discord = require('discord.js');
const botsettings = require('../botsettings.json');
const colorEmbed = require('../entities/color.json');
const av = require('../entities/images.json');

module.exports.run = async (client, message, args) =>
{
    try
    {
        //We have to set a argument for the help command beacuse its going to have a seperate argument.
        let helpArray = message.content.split(" ");
        let helpArgs = helpArray.slice(1);
        let prefix = botsettings.prefix;

        let cmd = message.content.toLowerCase().split(`${prefix}help `).pop();

        //Custom Help command by using the second argument.
        if (helpArgs[0] != 'fun' && helpArgs[0] != 'mod' && helpArgs[0] != 'general' && helpArgs[0] != 'ctf'
            && helpArgs[0] != 'flag'
            && helpArgs[0] != 'hi' && helpArgs[0] != 'bye' && helpArgs[0] != 'uwu' && helpArgs[0] != 'owo' && helpArgs[0] != 'ping' && helpArgs[0] != 'whoasked' && helpArgs[0] != 'urgay'
            && helpArgs[0] != 'bins' && helpArgs[0] != 'avatar' && helpArgs[0] != 'membercount' && helpArgs[0] != 'creator'
            && helpArgs[0] != 'clear' && helpArgs[0] != 'kick'
            && helpArgs[0] != 'fkick' && helpArgs != 'fban'
            && helpArray != `${prefix}help`)
        {
            message.channel.send(`${cmd} is not a command/category, idiot.`);
        }

        if (helpArgs[0] == 'ctf')
        {
            var embed = new Discord.MessageEmbed()
                .setColor(colorEmbed.color)
                .setAuthor(`TacoByte's server personal bot !, av.avatarBot`)
                .addFields
                (
                    { name: 'Commands in **ctf**', value:
                    '``flag     :`` compare your flag to the real one', inline: true }
                )

            message.channel.send(embed);
        }

        if (helpArgs[0] == 'fun') 
        {
            var embed = new Discord.MessageEmbed()
                .setColor(colorEmbed.color)
                .setAuthor(`TacoByte's server personal bot !, av.avatarBot`, av.avatarBot)
                .addFields
                (
                    { name: 'Commands in **fun**', value: 
                    '``biguwu      :`` spam UwU\n' +
                    '``bye      :`` @user, bye!\n' +
                    '``fkick    :`` fake kick\n' +
                    '``fban     :`` fake ban\n' +
                    '``hi       :`` @user, hi!\n' +  
                    '``owo      :`` OwO\n' +
                    '``ping     :`` pong\n' +
                    '``urgay    :`` dm you or someone (if you specify) a secret\n' +
                    '``uwu      :`` UwU\n' +
                    '``whoasked :`` whoasked\n', inline: true }
                )

            message.channel.send(embed);
        }

        if (helpArgs[0] == 'general')
        {
            var embed = new Discord.MessageEmbed()
                .setColor(colorEmbed.color)
                .setAuthor(`TacoByte's server personal bot !, av.avatarBot`, av.avatarBot)
                .addFields
                (
                    { name: 'Commands in **general**', value: 
                    '``avatar       :`` user avatar in an embed\n' +
                    '``bins         :`` list of bins\n' +
                    '``creator      :`` informations about the bot\n' +
                    '``membercount  :`` show the number of members', inline: true }
                )

            message.channel.send(embed);
        }

        if (helpArgs[0] == 'mod')
        {
            var embed = new Discord.MessageEmbed()
                .setColor(colorEmbed.color)
                .setAuthor(`TacoByte's server personal bot !, av.avatarBot`, av.avatarBot)
                .addFields
                (
                    { name: 'Commands in **mod**', value: '``kick   :`` Kick @user', inline: true }
                )

            message.channel.send(embed);
        }

        //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
        if(!helpArgs[0]) 
        {
            var embed = new Discord.MessageEmbed()
                .setColor(colorEmbed.color)
                .setAuthor(`TacoByte's server personal bot !, av.avatarBot`, av.avatarBot)
                .addFields
                (
                    { name: '**Command Categories**\n', value: 
                    '``ctf      :`` Commands for ctf of the server\n' +
                    '``fun      :`` Commands for entertainment!\n' +
                    '``general  :`` Commands for general usage\n' +
                    '``mod      :`` Commands for mods\n', inline: true }
                )
                
            message.channel.send(embed);
        }


        //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
        if(helpArgs[0]) 
        {
            let command = helpArgs[0];

            if(client.commands.has(command)) 
            { 
                command = client.commands.get(command);
                var embed = new Discord.MessageEmbed()
                    .setAuthor(`${command.config.name} ☆`, av.avatarBot)
                    .setDescription(`
                    - **Command's Description** __${command.config.description || "There is no Description for this command."}__
                    - **Command's Usage:** __${command.config.usage || "No Usage"}__
                    - **Command's Permissions:** __${command.config.accessableby || "Members"}__
                    - **Command's Aliases:** __${command.config.aliases || "No Aliases"}__
                    `)
                    .setColor(colorEmbed.color)

                message.channel.send(embed);
            }
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
    name: 'help',
    description: 'Display informations about the commands',
    usage: '+help',
    accessableby: 'Members',
    aliases: []
}