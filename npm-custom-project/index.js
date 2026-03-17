const { add, multiply, getCurrentDateTime, colorLog, divide } = require('./NewModule');

// Math Operations
console.log('Addition: 10 + 5 =', add(10, 5));
console.log('Multiplication: 10 x 5 =', multiply(10, 5));
console.log('Division: 10 / 2 =', divide(10, 2));

// Date/Time
console.log('Current Date & Time:', getCurrentDateTime());

// Colorful Log
colorLog('Welcome to the Custom NPM Project!');

// Error Handling - Division by Zero
try {
    console.log(divide(10, 0));
} catch (error) {
    console.log('Error caught:', error.message);
}