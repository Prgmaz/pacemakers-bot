import { MessageEmbed, Message, } from 'discord.js';
import Command from '../models/Command';

export default new Command(
	"avatar",
	"Gets the avatar of the requested user.",
	(message: Message, args: Array<any>) => {
		if (args.length < 1) {
			const embed = new MessageEmbed()
				.setTitle(`Avatar of ${message.author.username}`)
				.setColor(0xff0000)
				.setImage(message.author.displayAvatarURL({size: 4096}));
			message.reply(embed);
		}
	}
);
