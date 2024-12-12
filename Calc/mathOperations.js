export const mathOperations = {
    add: (a, b) => a + b,
    divide: (a, b) => {
        if (b === 0) {
            throw new Error('Division by zero');
        }
        return a / b;
    }
};