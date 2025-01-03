const {
    SlashCommandBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("a")
      .setDescription("This is an example command."),
    commandPermissions: [],
    usage: "/example-command",
    developerOnly: false,
    async start(client, interaction) {
    },
  };
  