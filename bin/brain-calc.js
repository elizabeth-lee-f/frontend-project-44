#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

console.log('Welcome to the Brain Games!')
let mainUserName = userName();
console.log('What is the result of the expression?')

let good = true;

for (let i = 0; i < 3; i++) {
    
    let plus = '+';
    let minus = '-';
    let umnojenie = '*';

    let str = '+-*'
    let randomSymbol = Math.round(Math.random() * (str.length - 1));
    let str1 = str.charAt(randomSymbol);

    let randomNumber1 = Math.floor(Math.random() * 100)
    let randomNumber2 = Math.floor(Math.random() * 100)

    console.log(`Question: ${randomNumber1} ${str1} ${randomNumber2}`);
    const yourAnswer = Number(readlineSync.question('Your answer:'));



    if(str1 === plus) {
        let sum = randomNumber1 + randomNumber2;
        if(sum === yourAnswer) {
            console.log(`Correct!`);
            good = true;
        } else {
            console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${sum}'.\nLet's try again, ${mainUserName}!`)
            good = false;
        }
    } 

    if(str1 === minus) {
        let vajitanyie = randomNumber1 - randomNumber2;
        if(vajitanyie === yourAnswer) {
            console.log(`Correct!`);
            good = true;
        } else {
            console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${vajitanyie}'.\nLet's try again, ${mainUserName}!`)
            good = false;
        }
    }

    if(str1 === umnojenie) {
        let multiplication = randomNumber1 * randomNumber2;
        if(multiplication === yourAnswer) {
            console.log(`Correct!`);
            good = true;
        } else {
            console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${multiplication}'.\nLet's try again, ${mainUserName}!`)
            good = false;
        }
    }
}

    if(good) {
        console.log(`Congratulations, ${mainUserName}!`)
    }
