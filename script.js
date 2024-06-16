// script.js
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let displayValue = '0';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (value === 'clear') {
                displayValue = '0';
            } else if (value === '=') {
                try {
                    displayValue = eval(displayValue).toString();
                } catch {
                    displayValue = 'Error';
                }
            } else {
                if (displayValue === '0') {
                    displayValue = value;
                } else {
                    displayValue += value;
                }
            }

            display.textContent = displayValue;
        });
    });
});
