const { MessageEmbed } = require("discord.js");
const fs = require("fs");

module.exports = {
	name: "help",
	description: "Help command gives you the information about the commands",
	execute: function (message, args) {
		const embed = new MessageEmbed();
		embed.setTitle("Help");
		embed.setDescription("Type help <command> to get help for the command");

		if (args.length < 1) {
			const commandFiles = fs
				.readdirSync("./commands/")
				.filter((file) => file.endsWith(".js"));
			console.log(commandFiles);

			for (const file of commandFiles) {
				const command = require(`./${file}`);

				embed.addField(command.name, command.description, true);
			}
		} else {
			const command = require(`./${args[0]}.js`);
			if (!command) {
				return message.channel.send("No command found");
			}

			embed.addField(command.name, command.description, true);
		}
		message.channel.send(embed);
	},
};
