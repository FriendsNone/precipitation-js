module.exports.run = async (client, message, args, ThrowException) => {
    if (args.join(" ").length <= 0) {
        message.reply(":no_entry_sign: **ERROR:** You must provide details!");

    } else {
        ThrowException(args.join(" "));
    }
}
module.exports.help = {
    name: 'throw',
    args: '[args.join(" ")]',
    notes: 'Throw a fake exception.',
    category: 'Fun'
}