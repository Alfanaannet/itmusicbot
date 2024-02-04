const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "timescale",
    description: "Set the current player filter to Timescale.",
    category: "Filters",
    permissions: {
        bot: [],
        channel: [],
        user: [],
    },
    settings: {
        inVc: false,
        sameVc: true,
        player: true,
        current: true,
        owner: false,
        premium: false,
    },
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: true });

        const player = client.poru.players.get(interaction.guild.id);

        await player.filters.setTimescale(true);

        const embed = new EmbedBuilder().setDescription(`\<a:filter:1200818160828420130>\ | Filter has been set to: \`Timescale\``).setColor(client.color);


        return interaction.editReply({ embeds: [embed] });
    },
};
