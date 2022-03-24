let text = document.getElementById('userText');
const out = document.getElementById('tshirt-preview');

//We tried to display the text on the Tee shirt using the following steps;
// We declared the Id 'userText'using dom and declared the output 'tshirt-preview' using dom
// To delimit the length of the text, we used an if statment to change the color of the text if it exceeds 20 letters
// the default is the output equals the value of the text input.
// We used classlist.add to add is-invalid class to the text variable.

function displayText () {
if (text.value.length > 20) {
    document.querySelector('.maxNum').style.color = 'red';
    text.classList.add('is-invalid');
}
else {
    out.innerHTML = text.value;
}
}

// 1. When user selects a different font in the dropdown, change the t-shirt font to that font.
//     1. Use [onchange](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) event to detect change in the dropdown and slider.

const font = document.querySelector('.fontOptions');

