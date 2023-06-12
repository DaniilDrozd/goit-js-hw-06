const inputEl = document.querySelector("#validation-input");

console.log(inputEl.value.length);
console.log(inputEl.dataset.length);

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === parseInt(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
});
