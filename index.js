// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers, handling division by zero
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}

// Function to increment a number
function increment(n) {
    return n + 1;
}

// Function to decrement a number
function decrement(n) {
    return n - 1;
}

// Function to parse a string to an integer
function makeInt(string) {
    return parseInt(string, 10);
}

// Function to parse a string to a floating-point number
function preserveDecimal(string) {
    return parseFloat(string);
}
