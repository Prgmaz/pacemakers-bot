const { Message } = require("discord.js");

module.exports = {
	name: "ping",
	description: "Gets the ping of the bot.",
	execute: (message, args) => {
		const msg = new Message();
		msg.content = "Pong!";
		message.channel.send(msg);
	}
};
