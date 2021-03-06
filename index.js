const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const client = new Discord.Client({disableEveryone: true});

require("./util/eventHandler")(client)

const fs = require("fs");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


fs.readdir("./commands/", (err, files) => 
{

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) 
    {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => 
    {
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => 
        {
            client.aliases.set(alias, pull.config.name)
        });
    });
});


client.on("message", async message => {

    // Prefix
    let prefix = botsettings.prefix;

    var messageArray = message.content.toLowerCase().split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix) || message.author.bot || message.channel.type === "dm") return;
    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(client,message,args)
})


client.login(botsettings.token);
