const { EmbedBuilder } = require("discord.js");
const moment = require("moment");
const User = require("../../../settings/models/User.js");

module.exports = {
    name: "profile",
    description: "Show your premium status info.",
    category: "Premium",
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
        owner: false,
        premium: false,
    },
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: false });

        const user = await User.findOne({ Id: interaction.user.id });
        const timeLeft = moment(user.premium.expiresAt).format("dddd, MMMM Do YYYY HH:mm:ss");

        const embed = new EmbedBuilder()
            .setAuthor({
                name: `${interaction.user.username} Premium Details`,
                iconURL: client.user.displayAvatarURL({ dynamic: true }),
            })
            .setColor(client.color)
            .setDescription(`<:star:1059809101321871471> Here are the details about your premium status.`)
            .setThumbnail(interaction.user.displayAvatarURL())
            .setFooter({ text: "Always Listen To Premium Music" })
            .setTimestamp();

        if (user.premium.plan === "lifetime") {
            embed.addFields([
                { name: `:dizzy: | Plan:`, value: `\`\`\`${toOppositeCase(user.premium.plan)}\`\`\``, inline: true },
                { name:
`<:star:1059809101321871471> | Features:`, value: `\`\`\`Premium\`\`\``, inline: true },
                { name: `:clock12: | Expired:`, value: `\`\`\`Never\`\`\``, inline: false },    
            ]);
        } else {
            embed.addFields([
                { name: `:dizzy: | Plan:`, value: `\`\`\`${toOppositeCase(user.premium.plan || "Free")}\`\`\``, inline: true },
            ]);

            if (user.premium.expiresAt < Date.now()) {
                embed.addFields([
                    { name: `<:star:1059809101321871471> | Features:`, value: `\`\`\`Locked\`\`\``, inline: true },
                    { name: `:clock12: | Expired:`, value: `\`\`\`Never\`\`\``, inline: false },
                ]);
            } else {
                embed.addFields([
                    { name: `<:star:1059809101321871471> | Features:`, value: `\`\`\`Premium\`\`\``, inline: true },
                    { name: `:clock12: | Expired:`, value: `\`\`\`${timeLeft}\`\`\``, inline: false },
                ]);
            }
        }

        return interaction.editReply({ embeds: [embed] });
    },
};

function toOppositeCase(char) {
    return char.charAt(0).toUpperCase() + char.slice(1);
}
