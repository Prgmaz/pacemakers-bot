const { Message } = require("discord.js");

export default new Command(
	"ping",
	"Gets the ping of the bot.",
	(message, args) => {
		const msg = new Message();
		msg.content = "Pong!";
		message.channel.send(msg);
	}
);
