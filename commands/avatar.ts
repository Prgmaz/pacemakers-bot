import { MessageEmbed, Message, User, GuildMember } from "discord.js";
import Command from "../models/Command";

export default new Command(
	"avatar",
	"Gets the avatar of the requested user.",
	async (message: Message, args: Array<any>) => {
		if (args.length < 1) {
			const embed = new MessageEmbed()
				.setTitle(`Avatar of ${message.author.username}`)
				.setColor(0xff0000)
				.setImage(message.author.displayAvatarURL({ size: 4096 }));
			message.reply(embed);
		} else {
			let users: any = await message.guild?.members.fetch({
				query: args[0].toLowerCase(),
				limit: 1,
			});
			let user = users.find(
				(u: GuildMember) =>
					u.user.username.toLowerCase() == args[0].toLowerCase()
			);

			if (user) {
				const embed = new MessageEmbed()
					.setTitle(`Avatar of ${args[0]}`)
					.setColor(0xff0000)
					.setImage(user.user.displayAvatarURL({ size: 4096 }));
				message.reply(embed);
			} else {
				message.reply("404 User not found!");
			}
		}
	}
);
