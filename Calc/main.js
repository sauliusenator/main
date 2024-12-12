import { domElements } from './domElements.js';
import { calculator } from './calculator.js';

document.addEventListener('DOMContentLoaded', () => {
    domElements.numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.textContent);
        });
    });

    domElements.operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.textContent);
        });
    });

    domElements.equalsButton.addEventListener('click', () => {
        calculator.calculate();
    });

    domElements.clearButton.addEventListener('click', () => {
        calculator.clear();
    });
});
