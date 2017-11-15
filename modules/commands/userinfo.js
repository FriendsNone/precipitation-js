module.exports.run = async (client, message, args, throwex) => {
    const Discord = require('discord.js');
    let pinged = message.guild.member(message.mentions.users.first());
    try {
        if (pinged.size <= 0 || pinged == null) {
            var embed = new Discord.RichEmbed()
                .setTitle(`Information about ${message.author.username}:`)
                .addField("Account Information ", `Username: ${message.author.username}\r\nUser Discriminator: ${message.author.discriminator}\r\nUser ID: ${message.author.id}`)
                .addField("Dates", `Creation Date: ${message.author.createdAt}\r\nJoined Date: ${message.member.joinedAt}`)
                .addField("Presence", `${message.author.presence}`)
            message.channel.send({ embed })
        } else {
            var embed = new Discord.RichEmbed()
                .setTitle(`Information about ${pinged.username}:`)
                .addField("Account Information ", `Username: ${pinged.username}\r\nUser Discriminator: ${message.author.discriminator}\r\nUser ID: ${message.author.id}`)
                .addField("Dates", `Creation Date: ${pinged.createdAt}\r\nJoined Date: ${pinged.joinedAt}`)
                .addField("Presence", `${pinged.presence}`)
            message.channel.send({ embed })
        }
        } catch (e) {
        throwex(e);
    }
}
module.exports.help = {
    name: 'userinfo',
    args: '[pinged] (Optional)',
    notes: 'Provides a basic set of information about a specfic user.',
    category: 'Information'
}
