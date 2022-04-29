import {parse} from "nodemon/lib/cli/index.js";
import InitialMessage from "./InitialMessage.js";
const _InitialMessage = new InitialMessage();

export default  class CommandLines{
    constructor() {
    }

    SummonTimeKeeper(Client, Day, CurrentTime){
        console.log(Day + CurrentTime);

        _InitialMessage.messageManager(Client, '968192061549457418', Day + ' ' + CurrentTime , ['⏫', '⏬']);
    }

    music(Link){
        return 'Song ' + Link + ' played!'
    }
    rolls(sDice, sMod){
        const arrParams = sDice.split("d");
        let iFinal = 0;
        let iTotal = 0;
        arrParams[2] = sMod;
        console.log(arrParams);

        if (arrParams[0] === ''){
            console.log('Single Roll!')
            const iRandom = Math.floor(Math.random() * parseInt(arrParams[1])) + 1;
            if (arrParams[2] === undefined){
                iFinal = iRandom;
            }
            else{
                iFinal = iRandom + parseInt(arrParams[2])
            }
            if (iFinal < 1){
                iFinal = 1;
            }
            if (iFinal > parseInt(arrParams[1])){
                iFinal = parseInt(arrParams[1]);
            }
            return 'You have rolled a: *__' + String(iRandom) + '__* with a modifier of: *__' + arrParams[2] + '__* resulting in a final roll of : **' + String(iFinal) + '**';
        }
        else{
            console.log('Multi Roll!')
            let sOutput = "";
            for (let i = 0; i < parseInt(arrParams[0]); i++){
                const iRandom = Math.floor(Math.random() * parseInt(arrParams[1])) + 1;
                if (arrParams[2] === undefined){
                    iFinal = iRandom;
                }
                else{
                    iFinal = iRandom + parseInt(arrParams[2])
                }
                if (iFinal < 1){
                    iFinal = 1;
                }
                if (iFinal > parseInt(arrParams[1])){
                    iFinal = parseInt(arrParams[1]);
                }
                iTotal = iTotal + iFinal;
                sOutput = sOutput + "For role " + String(i + 1) + " you have rolled a: *__" + String(iRandom) + "__* with a modifier of: *__" + arrParams[2] + "__* resulting in: **" + String(iFinal) + "**\n";
            }
            sOutput = sOutput + 'Your Total = **' + String(iTotal) + '**';
            return sOutput;
        }
    }
}
