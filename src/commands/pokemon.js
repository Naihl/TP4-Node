const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pokemon')
        .setDescription('Affiche les statistiques d\'un Pokémon.')
        .addStringOption(option =>
            option.setName('nom')
                .setDescription('Le nom du Pokémon.')
                .setRequired(true)),
    async execute(interaction) {
        try {
            const pokemonName = interaction.options.getString('nom');
            const fetch = await import('node-fetch');
            const response = await fetch.default(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            const data = await response.json();

            if (response.ok) {
                const stats = data.stats.map(stat => `**${stat.stat.name}:** ${stat.base_stat}`).join('\n');
                const imageUrl = data.sprites.front_default; 

                const embed = {
                    color: 0x0099ff,
                    title: `Statistiques de ${pokemonName}`,
                    thumbnail: { url: imageUrl },
                    description: stats,
                };

                await interaction.reply({ embeds: [embed] });
            } else {
                await interaction.reply(`Le Pokémon "${pokemonName}" n'a pas été trouvé.`);
            }
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur s\'est produite lors de la récupération des statistiques du Pokémon.');
        }
    },
};
