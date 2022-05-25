
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
    const formEl = JSON.parse(localStorage.getItem("feedback-form-state"));
    
    if (formEl?.email) {
        refs.email.value = formEl.email;
    }
    if (formEl?.message) {
        refs.textarea.value = formEl.message;
    }
}


function onFormInput(e) {
    userData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}

function onFormSubmit(e) {
    e.preventDefault();

    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    e.target.reset();
    localStorage.removeItem("feedback-form-state");
    
}
