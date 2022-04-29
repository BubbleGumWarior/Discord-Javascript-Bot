import dotenv from 'dotenv';
import CommandLines from "./commands.js";
import * as Discord from "discord.js";
import {Intents} from "discord.js";

dotenv.config();

const _CommandLines = new CommandLines();
let sTime = '';
let sDay = '';

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
    partials: [
        "MESSAGE",
        "CHANNEL",
        "REACTION"
    ]
}); //create new client

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', function (msg) {
        console.log(client.user.tag);
        if (msg.author.bot) {
            console.log(msg.author)
        }
        else{
            const arrCommand = msg.content.split(" ");
            console.log(arrCommand);
            if (arrCommand[0] === '!roll'){
                let sOutput = _CommandLines.rolls(arrCommand[1], arrCommand[2]);
                msg.reply(sOutput);
            }

            if (arrCommand[0] === '!play'){
                let sOutput = _CommandLines.music(arrCommand[1]);
                msg.reply(sOutput);
            }

            if (arrCommand[0] === '!time'){
                msg.delete();
                console.log(arrCommand);
                sDay = arrCommand[1];
                sTime = arrCommand[2];
                _CommandLines.SummonTimeKeeper(client, sDay, sTime);
            }
        }
    });
client.login(process.env.TOKEN); //login bot using token