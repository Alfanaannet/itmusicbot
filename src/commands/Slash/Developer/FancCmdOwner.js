const { EmbedBuilder } = require("discord.js");
const config = require("../../../settings/config.js");

module.exports = {
  name: "owner-help",
  description: "Display all commands for the owner.",
  category: "Developer",
  permissions: {
    bot: [],
    channel: [],
    user: [],
  },
  settings: {
    inVc: false,
    sameVc: false,
    player: false,
    current: false,
    owner: true,
    premium: false,
  },
  run: async (client, interaction) => {
    // Defer the interaction to prevent timeouts
    await interaction.deferReply({ ephemeral: false });

    // Define premium and developer commands for better readability
    const premiumCommands = [
      `${config.prefix}generate : Generate premium user code.`,
      `${config.prefix}unpremium : Delete user from premium.`,
      `${config.prefix}list : Get list of all premium users.`,
    ].join("\n");

    const developerCommands = [
      `${config.prefix}ban : Ban a user from using the bot.`,
      `${config.prefix}maintenance : Enable maintenance mode.`,
      `${config.prefix}eval : Bot evaluation.`,
    ].join("\n");

    // Build the embed with a more professional and organized structure
    const embed = new EmbedBuilder()
      .setTitle("Owner Commands")
      .setDescription(`
        <:star:1059809101321871471> **Premium Commands**
        \`\`\`yaml
${premiumCommands}
        \`\`\`

        :man_technologist:  **Developer Commands**
        \`\`\`yaml
${developerCommands}
        \`\`\`
      `)
      .setColor(client.color)
      .setURL("https://discord.gg/its-community-917580196251594815"); // Replace with your actual support server URL

    // Send the edited reply with the embed
    return interaction.editReply({ embeds: [embed] });
  },
};
