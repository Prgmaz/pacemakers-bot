import { Message, } from 'discord.js';
import Command from '../models/Command';

export default new Command(
	"ping",
	"Gets the ping of the bot.",
	(message: Message, args: Array<any>) => {
		message.channel.send(`Pong! ${Date.now() - message.createdTimestamp}ms`);
	}
);
