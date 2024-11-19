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
    clientID: process.env.SPOTIFY_ID || "6935c2bae60d4159a90cdea39c22c6d8", // <==== SPOTIFY CLIENT ID
    clientSecret: process.env.SPOTIFY_SECRET || "ada8bf9be56442dd930f7f934773bd9d", // <==== SPOTIFY CLIENT SECRET
    reconnectTries: 5, // <==== TOTAL ATTEMPS TO TRY IF RECONNECT FAILED. YOU CAN CHANGE IT TO "Infinity" FOR UNLIMITED ATTEMPS.
    playlistLimit: 2, // <==== 1 = 100 TRACKS 
    albumLimit: 2, // <==== 1 = 50 TRACKS 80
    artistLimit: 2, // <==== 1 = 50 TRACKS 
    searchMarket: "us",
  },
  nodes: [
    {
      name: process.env.NODE_NAME1 || "ELFANAAN LAVALINK", 
      host: process.env.NODE_HOST1 || "5.249.164.150", 
      port: parseInt(process.env.NODE_PORT1 || "22560"), 
      password: process.env.NODE_PASSWORD1 || "youshallnotpass", 
      secure: parseBoolean(process.env.NODE_SECURE1 || "false"),
    }
  ],
// {
//   "identifier": "AjieDev - Lavalink [Non SSL | US]",
//   "password": "",
//   "host": "",
//   "port": 80,
//   "secure": 
// }
  mongoUri: process.env.MONGO_URI || "", 
  supportUrl: process.env.SUPPORT_URL || "https://discord.gg/Q2snkDW8fy", 
  voteUrl: process.env.VOTE_URL || "https://discord.gg/Q2snkDW8fy",
  inviteUrl: process.env.INVITE_URL || "https://discord.com/api/oauth2/authorize?client_id=1194101212723822602&permissions=40271764260928&scope=bot%20applications.commands", 
  imageUrl: process.env.IMAGE_URL || "https://cdn.discordapp.com/attachments/1210932652895633478/1216591978020737115/play_1.png?ex=6600f292&is=65ee7d92&hm=b2e8d77778ffe1de2a11b4a427a8ebc7f10810e3f495bc57c472cc8cc33b9e02&",
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
