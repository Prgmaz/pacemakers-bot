import { MessageEmbed, Message } from "discord.js";
import Command from "../models/Command";

export default new Command(
	"socials",
	"Gets all Social Media profiles.",
	(message: Message, args: Array<any>) => {
		if (args.length < 1) {
			const embed1 = new MessageEmbed()
				.setTitle(`Social Profiles of ${message.author.username}`)
				.setColor(0xff0000)
				.addField(
					"Youtube",
					"https://youtube.com/channel/UCLc2o8AZPuApCs9GfA6sVrw"
				)
				.addField("Facebook", "https://facebook.com/programmer101n")
				.addField(
					"Twitter (BARELY ACTIVE)",
					"https://twitter.com/programmer101n"
				)
				.addField("Instagram", "https://instagram.com/programmer101n")
				.addField("Twitch", "https://twitch.tv/prgmaz");

			const embed2 = new MessageEmbed()
				.setTitle(`Social Profiles of Raunaq Soneja(RAUQ Gaming)`)
				.setColor(0xff0000)
				.addField(
					"Youtube",
					"https://www.youtube.com/channel/UCB5W2a5sH6LiS7Uv73Dls7w"
				)
				.addField(
					"Twitter",
					"https://twitter.com/raunaq_soneja"
				)
				.addField("Instagram", "https://instagram.com/raunaq_soneja");
			message.reply(embed1);
			message.reply(embed2);
		}
	}
);
