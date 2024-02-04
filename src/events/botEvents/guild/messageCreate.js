const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { voteUrl } = require("../../../settings/config.js");

module.exports.run = async (client, message) => {
  //IGNORING BOT,SYSTEM, DM AND WEBHOOK MESSAGES
  if (message.author.bot || !message.guild || message.system || message.webhookId) return;

  await client.createMessage(message);

  let prefix = client.prefix;
  const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);

  if (message.content.match(mention)) {
    const embed = new EmbedBuilder().setColor(client.color).setDescription(`<:Wave:1200807208733122643> Greetings, ${message.author.toString()}!\n`
      + `<a:disk:1200807327616479364> Feel free to use \`/help\` for more information. All commands are designed as slash commands for your convenience. If you need further assistance or have questions, don't hesitate to join our [Support Server](https://discord.gg/its-community-917580196251594815).`);

    message.reply({ embeds: [embed] });
  }

  // REMOVE PREFIX FOR OWNER
  if (client.owner.includes(message.member.id) && !client.owner.includes(client.user.id) && !message.content.startsWith(prefix)) {
    prefix = "!";
  }

  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
  if (!prefixRegex.test(message.content)) return;
  const [matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/g);

  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);

  // FINDING COMMANDS FROM ALIASES
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (!command) return;

  const row = new ActionRowBuilder().addComponents(new ButtonBuilder().setLabel("Vote Fancy").setURL(voteUrl).setStyle(ButtonStyle.Link));

  if (client.dev.has(true) && message.author.id !== client.owner) {
    return message.reply({
      content: `👋🏻 Hey Users\n**${client.user.username} is under maintenance right now**`,
      components: [row],
    });
  }

  console.log(`[PREFIX] ${command.name} used by ${message.author.tag} from ${message.guild.name} (${message.guild.id})`);

  // DEFAULT PERMISIONS
  const botPermissions = ["ViewChannel", "SendMessages", "EmbedLinks"];
  const botMissingPermissions = [];

  for (const perm of botPermissions) {
    if (!message.channel.permissionsFor(message.guild.members.me).has(perm)) {
      botMissingPermissions.push(perm);
    }
  }

  if (botMissingPermissions.length > 0)
    return message.reply({
      content: `\`❌\`  | I don't have one of these permissions \`ViewChannel\`, \`SendMessages\`, \`EmbedLinks\`.\nPlease double check them in your server role & channel settings.`,
      components: [row],
    });

  // CHECK OWNER
  if (command.owner && message.author.id !== client.owner) {
    return message.reply({ content: `\`❌\`  | Only my owner can use this command!\n\nMade with 💖 & ITS` });
  }

  // ERORR HANDLING
  try {
    command.run(client, message, args);
  } catch (error) {
    console.log(error);

    return message.reply({ content: `\`❌\`  | Something went wrong.`, components: [row] });
  }
};
