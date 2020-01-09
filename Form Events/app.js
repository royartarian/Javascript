// const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckBox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

// form.addEventListener('submit', function(e) {
//   alert("submitting the form");
//   console.log('cc', creditCardInput.value);
//   console.log('terms', termsCheckBox.value);
//   console.log('veggieSelect', veggieSelect.value);
//   e.preventDefault();
// });

// const formData = {};
// creditCardInput.addEventListener('input', (e) => {
//     console.log('CC CHANGED!', e);
//     formData['cc'] = e.target.value;
// });

// veggieSelect.addEventListener('input', (e) => {
//     console.log('VEGGIE CHANGED!', e);
//     formData['veggie'] = e.target.value;
// });

// termsCheckBox.addEventListener('input', (e) => {
//     console.log('CHECKBOX CHANGED!', e);
//     formData['agreeToTerms'] = e.target.checked;
// });

const formData = {};
for (let input of [creditCardInput, termsCheckBox, veggieSelect]){
    input.addEventListener('input',({target}) => {
        const {name, type, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value; 
        console.log(formData);
    })
}