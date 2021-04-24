require("dotenv").config();
const discord = require("discord.js");
const client = new discord.Client();
const fs = require('fs');

client.once("ready", () => {
	console.log("Hello World!");
    client.commands = new discord.Collection();

    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    for(const file of commandFiles){
        const command = require(`./commands/${file}`);

        client.commands.set(command.name, command);
    }
});

client.on("message", (message) => {
    if(!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

    const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(client.commands.has(command)){
        client.commands.get(command).execute(message);
    }else{
        message.channel.send(`No command named **${command}** is found. Type **help** for all commands.`)
    }  
});

client.login(process.env.TOKEN);
