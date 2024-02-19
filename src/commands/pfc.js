const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pfc')
        .setDescription('Joue à pierre-feuille-ciseaux avec le bot.'),
    async execute(interaction) {
        try {
            // Choix possibles
            const choices = ['Pierre', 'Feuille', 'Ciseaux'];
            // Génération d'un choix aléatoire
            const randomChoice = choices[Math.floor(Math.random() * choices.length)];
            await interaction.reply(`Le bot choisit : ${randomChoice}`);
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur s\'est produite lors de la génération du choix.');
        }
    },
};
