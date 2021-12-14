const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	enabled: true,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with pong.'),
	async execute(interaction) {
		return interaction.reply('pong');
	},
};
