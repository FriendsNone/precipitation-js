module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    try {
        let embed = new Discord.RichEmbed()
            .setAuthor(`Info about ${message.guild.name}:`)
            .addField(`Name and Owner`, `Name: ${message.guild.name}\r\nOwner: ${message.guild.owner.user.username}\nCreated At: ${message.guild.createdAt}`)
            .addField(`Roles and Members`, `Number of Roles: ${message.guild.roles.size}\r\nMembers: ${Array.from(message.guild.members.keys())}\r\nNumber of Members: ${message.guild.members.size}\r\nNumber of Channels: ${message.guild.channels.size}`)
            .setColor("GREEN")
            .setFooter(`Requested by ${message.author.tag} on ${new Date()} | PrecipitationJS v0.1.2`)
        message.channel.send({ embed })
    } catch (e) {
        message.channel.send("```" + e + "```");
    }
    
}
module.exports.help = {
    name: 'guildinfo',
    args: 'none',
    notes: 'Shows the information for the guild.',
    category: 'Information'
}