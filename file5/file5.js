module.exports = {
  name: 'role',
  description: 'adds/removes a role',
  execute(message, args) {
    //if (message.member.roles.cache.has('roleID')) {
    let role = message.guild.roles.cache.find(role => role.name === 'Mod'); 
    if (member.roles.cache.some(role => role.name === 'Mod')){
      message.member.roles.remove(role);
    }
    else {
      message.memeber.roles.add(role);
    }
  }
}