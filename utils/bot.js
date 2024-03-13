const TelegramBot = require('node-telegram-bot-api');
const { CREATE_COLLECTION, CREATE_DOCUMENT, LIST_COLLECTIONS, LIST_DOCUMENTS } = require('./commands');
const dotenv = require('dotenv');

dotenv.config({path: '../.env'});

const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});

let commands = [
    {command: '/start', description: `Connexion`},
    {command: '/about', description: "A propos"}
];

bot.setMyCommands(commands);

bot.onText(/\/start/, (msg) => {
    let text = `Bienvenue sur le bot 😉\\.`

    bot.sendMessage(msg.chat.id, text, {parse_mode: 'MarkdownV2'});
});


bot.onText(/\/about/, (msg) => {
    let text = `Développé par *Mbahersem*, disponible sur [ce dépôt](https://github\\.com/Mbahersem/mongodb-check\\.git)\\.`
    bot.sendMessage(msg.chat.id, text, {parse_mode: 'MarkdownV2'});
});

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, msg.text);
});

module.exports = bot;