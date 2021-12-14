const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	enabled: false,
	data: new SlashCommandBuilder()
		.setName('mute')
		.setDescription('Mutes target.')
		.addUserOption(option => option.setName('target').setDescription('The member to mute.').setRequired(true))
		.addIntegerOption(option => option.setName('length').setDescription('The length of the mute in hours.').setRequired(false))
		.addStringOption(option => option.setName('reason').setDescription('The reason for the ban.').setRequired(false)),
	async execute(interaction) {
		const target = interaction.options.getMember('target');
		const reason = interaction.options.getString('reason');
		
		let length = interaction.options.getInteger('length');

		if (!length)
			length = 0;
		
		// @Todo: Implement a way to mute users.

		return interaction.reply({ content: `Muted user [${target}].`, ephemeral: true });
	},
};
