import { MessageEmbed, Message } from "discord.js";
import Command from "../models/Command";
import fs from "fs";

export default new Command(
	"help",
	"Lists all commands available.",
	async (message: Message, args: Array<any>) => {
		if (args.length < 1) {
			const embed = new MessageEmbed();
			embed.setTitle("List of all commands").setColor("blue");

			const commandFiles = fs
				.readdirSync("./commands/")
				.filter((file) => file.endsWith(".ts"));

			for (const file of commandFiles) {
				const command: Command = (await import(`./${file}`)).default;

				embed.addField(
					command.name.toUpperCase(),
					command.description,
					true
				);
			}

			message.channel.send(embed);
		} else {
			const embed = new MessageEmbed();
			embed.setTitle("Help of Command").setColor("blue");

			try{
                const command: Command = (await import(`./${args[0].toLowerCase()}`)).default;

			embed.addField(
				command.name.toUpperCase(),
				command.description,
				true
			);

			message.channel.send(embed);
            }catch(e){
                message.channel.send("No command available.");
            }
		}
	}
);
