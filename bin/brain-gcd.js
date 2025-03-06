#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

console.log('Welcome to the Brain Games!')
let mainUserName = userName();

function gcd (numin1, numin2) {
    let ostPrev;
    let ost = 100;
    let num1 = numin1;
    let num2 = numin2;

    if(num1 < num2) {
        num1 = numin2;
        num2 = numin1;
    }

    if((num1 % num2) === 0) {
        return num2;
    }

    while(ost !== 0) {
        ostPrev = ost;
        ost = num1 % num2;
        num1 = num2;
        num2 = ost;
    }

return ostPrev;

}

let gooD = true;

for(let i = 0; i < 3; i++) {
    let randomNumber1 = Math.floor(Math.random() * 100);
    let randomNumber2 = Math.floor(Math.random() * 100);
    let gcdFunc = gcd(randomNumber1, randomNumber2);

    console.log('Find the greatest common divisor of given numbers.')
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);

    const answerYour = Number(readlineSync.question('Your answer:'));

    if(gcdFunc === answerYour) {
        console.log('Correct!');
    } else {
        console.log(`'${answerYour}' is wrong answer ;(. Correct answer was '${gcdFunc}'.\nLet's try again, ${mainUserName}!`)
        gooD = false;
    }
}

if(gooD) {
    console.log(`Congratulations, ${mainUserName}!`)
}