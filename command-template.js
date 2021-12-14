const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	enabled: false,
	data: new SlashCommandBuilder()
		.setName('')
		.setDescription(''),
	async execute(interaction) {
		return interaction.reply('');
	},
};
