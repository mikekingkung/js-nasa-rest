

const button = document.getElementById('see-review');
button.addEventListener('click', function(){
    console.log('click');
    const review = document.getElementById('review');

    // check if a class is present on an element
    if (review.classList.contains('d-none')){
        // removes an element from the dom
        review.classList.remove('d-none');
        button.textContent = 'Close Review';
    }
    else {
        // adds an element to the dom
        review.classList.add('d-none');
        button.textContent = 'See Review';        
    }
})

const num = Number.parseFloat("2.12");
let welcome = "Hello World",
    nuts = "Fuck You " + num,
    // escape characters refer search for String and Escape in mozilla dev network
    // not sure about concatenating a string here
    name = "Andrea you \"bitch\"";
// new line, tabs and spaces are converted to a single space in the browser
//interpolation shown below    
let message1 = `Hello ${name}` + nuts;
let message2 = num;
console.log(message2);
console.log(message1);
showMessage(message1);
changePercentOff(32);
arrayProcessing();
let r = Number.parseFloat("2.12A");
// will be 2.12 and not throw an exception
console.log(r);
let divisionByZod = 42 / "General Zod";
// gives Nan
console.log(divisionByZod);