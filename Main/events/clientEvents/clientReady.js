const { Main } = require("../../../Utilities/Settings/config.js");
const { Events } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  async start(client, interaction) {
    if (Main.CommandsDelete === false) {
      if (Main.globalCommands) {
        console.log(
          `Registering global slash commands for ${client.user.username}...`
        );
        await client.application.commands.set(
          client.slashCommands.map((c) => c.data.toJSON())
        );
      } else {
        console.log(
          `Registering guild slash commands for ${client.user.username}...`
        );
        await client.guilds.cache
          .get(Main.guildId)
          .commands.set(client.slashCommands.map((c) => c.data.toJSON()));
      }
    } else {
      console.log(
        `Deleting all slash commands for ${client.user.username}...`
      );
      await client.application.commands.set([]);
    }
  },
};
