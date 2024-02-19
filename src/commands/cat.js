const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Affiche une image de chat aléatoire.'),
    async execute(interaction) {
        try {
            // Générer des nombres aléatoires pour les dimensions de l'image
            const width = Math.floor(Math.random() * 1000) + 300; // Largeur aléatoire entre 300 et 1300
            const height = Math.floor(Math.random() * 1000) + 200; // Hauteur aléatoire entre 200 et 1200

            // Construire l'URL avec les dimensions aléatoires
            const imageUrl = `http://placekitten.com/${width}/${height}`;

            // Envoyer l'image en tant que réponse
            await interaction.reply(imageUrl);
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur s\'est produite lors de la récupération de l\'image de chat.');
        }
    },
};
