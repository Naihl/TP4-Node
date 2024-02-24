const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Affiche une image de chat aléatoire.'),
    async execute(interaction) {
        try {
            const width = Math.floor(Math.random() * 1000) + 300; 
            const height = Math.floor(Math.random() * 1000) + 200; 

            const imageUrl = `http://placekitten.com/${width}/${height}`;

            await interaction.reply(imageUrl);
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur s\'est produite lors de la récupération de l\'image de chat.');
        }
    },
};
