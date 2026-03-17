const chalk = require('chalk');
const moment = require('moment');

// Math Operations
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Date/Time Operation using moment
function getCurrentDateTime() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}

// Colorful console log using chalk
function colorLog(message) {
    console.log(chalk.bgBlue.white.bold(' INFO ') + ' ' + chalk.cyan(message));
    console.log(chalk.bgGreen.black.bold(' SUCCESS ') + ' ' + chalk.green('Operation completed!'));
}

// Error Handling
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed!');
    }
    return a / b;
}

module.exports = { add, multiply, getCurrentDateTime, colorLog, divide };