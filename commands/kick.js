const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	enabled: true,
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kicks target.')
		.addUserOption(option => option.setName('target').setDescription('The member to kick.').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('The reason for the kick.').setRequired(false)),
	async execute(interaction) {
		const target = interaction.options.getMember('target');
		const reason = interaction.options.getString('reason');
		
		target.kick({ reason: reason });

		return interaction.reply({ content: `Kicked user [${target}].`, ephemeral: true });
	},
};
