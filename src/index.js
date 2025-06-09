import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

export const BrainCalc = () => {

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
    let res;

    console.log(`Question: ${randomNumber1} ${str1} ${randomNumber2}`);
    const yourAnswer = Number(readlineSync.question('Your answer:'));


    switch(str1){
        case plus: res = randomNumber1 + randomNumber2;
        case minus: res = randomNumber1 - randomNumber2;
        case umnojenie:  res = randomNumber1 * randomNumber2; 
    }
    if(res === yourAnswer) {
        console.log(`Correct!`);
    } else {
        console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${res}'.\nLet's try again, ${mainUserName}!`)
        good = false;
    }

}

    if(good) {
        console.log(`Congratulations, ${mainUserName}!`)
    }

    }

    export const BrainEven = () => {
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
    }

export const BrainGames = () => {
        console.log('Welcome to the Brain Games!')
let mainUserName = userName();
    }

export const BrainGcd = () => {
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
}

export const BrainPrime = () => {
    let mainUserName = userName();

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    function playBrainPrime() {

        let correctAnswers = 0;
        const rounds = 3;

        while (correctAnswers < rounds) {
            //генация случайного числа от 2 до 100
            const number = Math.floor(Math.random() * 99) + 2;
            const correctAnswer = isPrime(number) ? "yes" : "no";

            //запрос ответа
            const userAnswer = prompt(`Question: ${number}\nYour answer:`)?.toLowerCase().trim();

            //проверка ответа
            if (userAnswer === correctAnswer) {
                correctAnswers++;
                alert("Correct!");
            } else {
                console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
                return;
            }
        }
        console.log(`Congratulations, ${userName}!`);
    }

}
    
export const BrainProgression = () => {
    let mainUserName = userName();

    console.log("What number is missing in the progression?");
    
    let correctAnswers = 0;
    const neededCorrect = 3;
    
    while (correctAnswers < neededCorrect) {
        const {question, answer} = generateProgressionQuestion();
        console.log(`Question: ${question}`);
        const userAnswer = parseInt(prompt("Your answer:"));
        
        if (userAnswer === answer) {
            console.log("Correct!");
            correctAnswers++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${playerName}!`);
            break;
        }
    }
    
    console.log(`Congratulations, ${playerName}!`);
}
