module.exports.run = async (client, message, args) => {
const Discord = require('discord.js');
 if (message.mentions.users.first()) {
     let mentionMembers = message.mentions.members.first()
     let mentionUsers = message.mentions.users.first()
     let embed = new Discord.RichEmbed()
         .setAuthor("Avatar")
         .setDescription(`${mentionUsers.username}'s current avatar! c:`)
         .setImage(mentionUsers.displayAvatarURL)
         .setColor("GREEN")
         .setFooter(`Requested by ${message.author.tag} on ${new Date()} | PrecipitationJS`, message.author.displayAvatarURL)
     message.channel.send({embed})
 } else {
     let embed = new Discord.RichEmbed()
         .setAuthor("Avatar")
         .setDescription("Your current avatar! c:")
         .setImage(message.author.displayAvatarURL)
         .setColor("GREEN")
         .setFooter(`Requested by ${message.author.tag} on ${new Date()} | PrecipitationJS`, message.author.displayAvatarURL)
     message.channel.send({embed})
 }
}
module.exports.help = {
    name: 'getavatar',
    args: '[mentionMembers] / [mentionUsers]',
    notes: 'Gets an avatar of a user.',
    category: 'Basic'
}
