const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Collection } = require('discord.js');
const { token, clientID } = require('./config.json');

let commands = new Collection();
let commandDatas = [];

module.exports.unload = function() {
    commands.clear();
    commandDatas = [];
}

module.exports.load = function() {
    let commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (let file of commandFiles) {
        try {
            let command = require(`./commands/${file}`);
            commandDatas.push(command.data.toJSON());
            commands.set(command.data.name, command);
        }
        catch (error) {
            console.log('Invalid command in commands/' + file + ' error:\n' + error);
        }
    }
}

module.exports.commands = commands;

module.exports.deploy = async function(guildID) {
    console.log('Deploying commands to guild [' + guildID + ']...');

    const rest = new REST({ version: '9' }).setToken(token);

    await rest.put(Routes.applicationGuildCommands(clientID, guildID), { body: commandDatas })
        .then(() => console.log('Successfully deployed commands.'))
        .catch('Error deploying commands to guild [' + guildID + '] :\n'  + console.error);
};

module.exports.deployGlobal = async function() {
    console.log('Deploying commands globally...');

    const rest = new REST({ version: '9' }).setToken(token);

    await rest.put(Routes.applicationCommands(clientID), { body: commandDatas })
        .then(() => console.log('Successfully deployed commands.'))
        .catch('Error deploying commands globally :\n'  + console.error);
};
