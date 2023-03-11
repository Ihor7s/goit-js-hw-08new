import throttle from "lodash.throttle";

const STORAGE_KEY = "feedbak-from-state";

let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    emailInput: document.querySelector('.feedback-form input'),
    textareaInput: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onSaveFormInput, 500));

onFormRecovery();


function onFormSubmit(e) {
    e.preventDefault();

    const emailValue = refs.emailInput.value;
    const textareaValue = refs.textareaInput.value;

    if (emailValue === '' || textareaValue === '') {
        alert ('Ви незаповнили форму')
    }
    e.target.reset()
    localStorage.removeItem(STORAGE_KEY);
};

function onSaveFormInput(e) {
    formData[e.target.name] = e.target.value;
    const inputValueString = JSON.stringify(formData);

    localStorage.setItem(STORAGE_KEY, inputValueString)
};

function onFormRecovery() {
    const saveValue = localStorage.getItem(STORAGE_KEY);

    if (saveValue) {
        const recoveryValue = JSON.parse(saveValue);

        refs.emailInput.value = recoveryValue.email;
        refs.textareaInput.value = recoveryValue.message;
    }
}