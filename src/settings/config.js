require("dotenv").config();

module.exports = {

  token: process.env.TOKEN || "", // <==== PASTE YOU TOKEN
  prefix: process.env.PREFIX || "!!", // <==== SET YOU PRERIX BOT [ OWNER COMMANDS ]
  color: process.env.EMBED_COLOR || "#2f3136", // <==== YOU EMBEDED HEX COLOR
  owner: process.env.OWNER_ID || "775012312876711936", // <==== BOTS OWNER ID
  guildLogs: process.env.GUILD_LOGS || "1203421080442773575", // <==== YOUR SERVER JOIN LEFT LOGS CHANNEL ID
  leaveTimeout: process.env.LEAVE_TIMEOUT || "20000", // <==== SET LEAVE TIMEOUT WHEN BOT WAS ALONE || 1000 = 1sec
  disableYouTube: parseBoolean(process.env.DISABLE_YOUTUBE || "false"), // <==== SET "TRUE OR FALSE" | ENABLE/DISABLE YOUTUBE FEATURES. DISABLING THIS WILL MAKE "AUTOPLAY" COMMANDS USELESS!!!

  // ⬇⬇⬇ PORU DETAILS
  playSource: process.env.PLAY_SOURCE || "ytsearch", // <==== SET YOUR PLAY SOURCE || "ytsearch","ytmsearch","scsearch"
  poruOptions: {
    defaultPlatform: process.env.DEFAULT_SOURCE || "ytsearch", // <==== SET DEFAULT SOURCE || "ytsearch","ytmsearch","scsearch"
    clientID: process.env.SPOTIFY_ID || "e6f84fbec2b44a77bf35a20c5ffa54b8", // <==== SPOTIFY CLIENT ID
    clientSecret: process.env.SPOTIFY_SECRET || "498f461b962443cfaf9539c610e2ea81", // <==== SPOTIFY CLIENT SECRET
    reconnectTries: 5, // <==== TOTAL ATTEMPS TO TRY IF RECONNECT FAILED. YOU CAN CHANGE IT TO "Infinity" FOR UNLIMITED ATTEMPS.
    playlistLimit: 2, // <==== 1 = 100 TRACKS
    albumLimit: 2, // <==== 1 = 50 TRACKS
    artistLimit: 2, // <==== 1 = 50 TRACKS
    searchMarket: "us",
  },
  nodes: [
    {
      name: process.env.NODE_NAME1 || "Main", 
      host: process.env.NODE_HOST1 || "eu-lavalink.lexnet.cc", 
      port: parseInt(process.env.NODE_PORT1 || "443"), 
      password: process.env.NODE_PASSWORD1 || "lexn3tl@val!nk", 
      secure: parseBoolean(process.env.NODE_SECURE1 || "true"),
    }
  ],


  mongoUri: process.env.MONGO_URI || "", 
  supportUrl: process.env.SUPPORT_URL || "https://discord.gg/its-community-917580196251594815", 
  voteUrl: process.env.VOTE_URL || "https://discord.gg/its-community-917580196251594815",
  inviteUrl: process.env.INVITE_URL || "https://discord.com/api/oauth2/authorize?client_id=1194101212723822602&permissions=40271764260928&scope=bot%20applications.commands", 
  imageUrl: process.env.IMAGE_URL || "https://media.discordapp.net/attachments/1162795987014787162/1197198433962971156/pngtree-pair-of-headphones-on-the-water-at-nighttime-image_2931863.png?ex=65c39f6d&is=65b12a6d&hm=e94858f4cbfc92ee4868da52953a4015b2c2703c5f0e12f2e144d446be72d8fe&=&format=webp&quality=lossless&width=800&height=448",
};

function parseBoolean(value) {
  if (typeof value === "string") {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}
