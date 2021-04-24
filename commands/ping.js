const { Message } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Gets the ping of the Bot.",
    execute: (message, args) => {
        const msg = new Message();
        msg.content = "Pong!  250ms";
        message.channel.send(msg);
    }
}