const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	enabled: true,
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans target.')
		.addUserOption(option => option.setName('target').setDescription('The member to ban.').setRequired(true))
		.addIntegerOption(option => option.setName('length').setDescription('The length of the ban in days.').setRequired(false))
		.addStringOption(option => option.setName('reason').setDescription('The reason for the ban.').setRequired(false)),
	async execute(interaction) {
		const target = interaction.options.getMember('target');
		const reason = interaction.options.getString('reason');
		
		let length = interaction.options.getInteger('length');

		if (!length)
			length = 0;
		
		target.ban({ days: length, reason: reason });

		return interaction.reply({ content: `Banned user [${target}].`, ephemeral: true });
	},
};
