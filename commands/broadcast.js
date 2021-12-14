const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	enabled: false,
	data: new SlashCommandBuilder()
		.setName('broadcast')
		.setDescription('Broadcasts message to broadcast channels across all servers.')
		.addStringOption(option => option.setName('message').setDescription('The message to broadcast.').setRequired(false)),
	async execute(interaction) {
		const message = interaction.options.getString('message');

		// @Todo: Broadcast message.

		return interaction.reply({ content: 'Broadcasted message.', ephemeral: true });
	},
};
