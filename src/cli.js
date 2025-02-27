import readlineSync from 'readline-sync';

export const userName = () => {
const name = readlineSync.question('May I have your name?')
return console.log(`Hello, ${name}!`);
}