const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pfc')
        .setDescription('Joue à pierre-feuille-ciseaux avec le bot.'),
    async execute(interaction) {
        try {
            const choices = ['Pierre', 'Feuille', 'Ciseaux'];
            const randomChoice = choices[Math.floor(Math.random() * choices.length)];
            await interaction.reply(`Le bot choisit : ${randomChoice}`);
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur s\'est produite lors de la génération du choix.');
        }
    },
};
