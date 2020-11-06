module.exports = {
  name: 'ping',
  description: 'playing table tennis',
  execute(message, args) {
    message.channel.send('pong!');
  }
}