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

// const font = document.querySelector('.fontOptions');

// font.addEventListener('change', (event)) 

let changeFontStyle = function (font) {
    document.querySelector(".output-text").style.fontFamily = font.value;
}
//2  To get the font size to change we declared the font 

let range = document.querySelector('#customRange');
let shirtText = document.querySelector(".output-text");

range.addEventListener("input", function() {
    shirtText.style["font-size"] = this.value + "px";

});

let black = document.querySelector(".black");
let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
let red = document.querySelector(".red");

black.addEventListener('click',function onClick(){
shirtText.style.color= 'black';
});

blue.addEventListener('click',function onClick(){
    shirtText.style.color= 'blue';
});


red.addEventListener('click',function onClick(){
    shirtText.style.color= 'red';
 });
    
green.addEventListener('click',function onClick(){
    shirtText.style.color= 'green';
 });

//Check that "Text to put on T-shirt" input field is not empty and is not longer than 20 characters. 
//Show red error message below Add to Cart button and add .is-invalid class around teh text input to display a red border around it
//Do not update shopping cart if rules are not met

 let subtotal = 25;
 let tax = 5;
 let total = 0; 

 document.getElementById('cart_button').onclick= function() {
      addCart(Number(document.getElementById('subtotal').innerHTML))
 }

    function addCart() {
        total = subtotal + tax
        console.log(total)
      document.getElementById('total').innerHTML= total

    }

     addCart(total)

// let subtotal = 0;
// 	let cost = 0;
// 		//Click = Money
// 		document.querySelector('#hamster1').onclick= function () {
// 			cartSubtotal( Number(document.getElementById('ham1').innerHTML))

// 		}

// document.querySelector('#hamster1').onclick= function () {
//     cartSubtotal( Number(document.getElementById('ham1').innerHTML))

// }

// function cartSubtotal(cost){ 
//     console.log(cost)
//     subtotal += cost
//     document.querySelector('#cost').innerHTML= subtotal
// }
// console.log(hamster1)



   //Get the price of the T-shirt
//    function addCart() {
//     price = Number(cart_button.getAttribute('data-price'));
//      total = total + price;
//     document.getElementById('subtotal').innerHTML = total.toFixed();
// }