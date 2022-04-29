export default class InitialMessage{
    constructor() {
    }
    async messageManager(client, id, text, reaction = []) {

        function addReactions(message, reactions){
            message.react(reactions[0]);
            reactions.shift();
            if (reactions.length > 0) {
                setTimeout(() => addReactions(message, reactions), 750);
            }
        }
        const channel = await client.channels.fetch(id)

        channel.messages.fetch().then((messages) => {
            if (messages.size === 0) {
                channel.send(text).then(message => {
                    addReactions(message, reaction);
                })
            }
            else if (messages.size === 1){
                for (const message of messages){
                    console.log(message);
                    message[1].edit(text);
                    addReactions(message[1], reaction);
                }
            }
        })
    }
}
