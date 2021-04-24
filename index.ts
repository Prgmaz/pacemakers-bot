//IMPORTS
import { config } from "dotenv";
import fs from "fs";
import discord from "discord.js";
import Command from "./models/Command";

//CONFIGURATIONS
const client = new discord.Client();
let commands: discord.Collection<String, Command> = new discord.Collection();
config();

//ROUTES
client.once("ready", async () => {
	console.log("Hello World!");
	client.user?.setActivity({type: "WATCHING", name: "prgmaz on Twitch",});

	const commandFiles = fs
		.readdirSync("./commands/")
		.filter((file) => file.endsWith(".ts"));
	for (const file of commandFiles) {
		const command: Command = (await import(`./commands/${file}`)).default;
		commands.set(command.name, command);
	}
});

client.on("message", (message) => {
	if (
		!message.content.startsWith(process.env.PREFIX || "!") ||
		message.author.bot
	)
		return;

	const args: Array<String> = message.content
		.slice((process.env.PREFIX ?? "!").length)
		.split(/ +/);
	const command: String = args[0].toLowerCase();
	args.shift();

	if (commands.has(command)) {
		commands?.get(command)?.execute(message, args);
	} else {
		message.channel.send(
			`No command named **${command}** is found. Type **help** for all commands.`
		);
	}
});


client.login(process.env.TOKEN);
