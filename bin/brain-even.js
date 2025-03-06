#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

console.log('Welcome to the Brain Games!')
let mainUserName = userName();
    console.log('Answer "yes" if the number is even, otherwise answer "no"')
    
    let good = true;

    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 100)
        let questionRandomNumber = 'Question:' + randomNumber;
        console.log(questionRandomNumber);

        const yesNo = readlineSync.question('Your answer:');

        if (yesNo !== 'yes' && yesNo !== 'no') {
            i = 3;
            good = false;
            console.log(`It is wrong answer ;(.\nLet\'s try again, ${mainUserName}!`) 
        }

        else {
            if (yesNo === 'yes' && (randomNumber %2 === 0) || 'no' && (randomNumber %2 !== 0)) {
                console.log('Correct!')
            } else {
                yesNo === 'yes' ? console.log(`\'yes\' is wrong answer ;(. Correct answer was \'no\'\.\nLet\'s try again, ${mainUserName}!`) : console.log(`\'no\' is wrong answer ;(. Correct answer was \'yes\'\.\nLet\'s try again, ${mainUserName}!`);
                i = 3;
                good = false;
            }
        }
    }

    if(good) {
        console.log(`Congratulations, ${mainUserName}!`)
    }


