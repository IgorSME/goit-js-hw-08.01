
import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}


refs.form.addEventListener("input", throttle(onFormInput, 500));
refs.form.addEventListener("submit", onFormSubmit)


const userData = {
    // email: "",
    // message: "",
}
onDataFromStorage();
function onDataFromStorage() {
    const formEl = localStorage.getItem("feedback-form-state");
    if (formEl) {
        const parsedFormEl = JSON.parse(formEl);
        for (let key in parsedFormEl) {
            userData[key] = parsedFormEl[key];
        }
    }
    // console.log(userData['email']);
    // console.log(refs.textarea.value);

    refs.email.value = userData.email ? userData.email : "";
    refs.textarea.value = userData.message ? userData.message : "";
}

function onFormInput(e) {
    userData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}

function onFormSubmit(e) {
    e.preventDefault();
    // console.log(e.currentTarget.elements);
    const { email, message } = e.currentTarget.elements;

    if (email.value === '' || message.value === '') {
    return console.log('Заполни все поля!!!!');
  }
    console.log(userData);
    e.target.reset();
    localStorage.removeItem("feedback-form-state");
}
