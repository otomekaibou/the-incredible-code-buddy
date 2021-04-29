module.exports = {
    name: 'name',
    description: "Gives you the command creator's name",
    help: "Run !name to find out who made this command.",
    execute(message, args) {
      message.reply('Denise made this command!');
    },
  };