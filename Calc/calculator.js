import { domElements } from './domElements.js';
import { mathOperations } from './mathOperations.js';

export const calculator = {
    currentValue: '0',
    storedValue: null,
    currentOperation: null,

    updateDisplay() {
        domElements.display.textContent = this.currentValue;
    },

    appendNumber(number) {
        if (this.currentValue === '0') {
            this.currentValue = number;
        } else {
            this.currentValue += number;
        }
        this.updateDisplay();
    },

    chooseOperation(operation) {
        if (this.currentOperation !== null) {
            this.calculate();
        }
        this.storedValue = parseFloat(this.currentValue);
        this.currentOperation = operation;
        this.currentValue = '0';
    },

    calculate() {
        const prev = this.storedValue;
        const current = parseFloat(this.currentValue);

        switch (this.currentOperation) {
            case '+':
                this.currentValue = mathOperations.add(prev, current).toString();
                break;
            case '÷':
                try {
                    this.currentValue = mathOperations.divide(prev, current).toString();
                } catch (error) {
                    this.currentValue = 'Error';
                }
                break;
            default:
                return;
        }

        this.storedValue = null;
        this.currentOperation = null;
        this.updateDisplay();
    },

    clear() {
        this.currentValue = '0';
        this.storedValue = null;
        this.currentOperation = null;
        this.updateDisplay();
    }
};