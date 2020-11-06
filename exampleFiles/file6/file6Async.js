module.exports = {
  name: 'react',
  description: 'does a react',
  execute: async (client, args) => {
    await message.react();
    await message.react();
    //get unicode ids by doing /:emoji:
    //you can also do 
    //const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'name');
    
  }
}