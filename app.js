/* Object to keep track of values and expression */

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};
 /* DISPLAY RESULTS ON SCREEN */ 
function updateDisplay() {
    const display = document.querySelector('.screen');
    display.value = calculator.displayValue;
}
  
updateDisplay();

/* ADD evenlisteners to buttons */
const keys = document.querySelector('calc-buttons');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }
    if (target.classList.contains('decimal')) {
        console.log('decimal', target.value);
        return;
    }
    
})