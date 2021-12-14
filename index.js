console.log('Starting bot...');

const { Client, Collection, Intents } = require('discord.js');
const { token, devGuild } = require('./config.json');
const commands = require('./command-controller.js');

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS
	]
});

commands.load();
client.commands = commands.commands;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	if (!command.enabled)
		return interaction.reply('Command: /' + interaction.commandName + ' is disabled.');

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error('Error processing command: /' + interaction.commandName + ' :\n' + error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

console.log("Setting up dev guild...");
commands.deploy(devGuild.guildID);

console.log("Logging in...");
client.login(token)
