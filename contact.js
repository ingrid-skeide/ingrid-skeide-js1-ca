const form = document.querySelector("#contact-us");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");

function validateForm() {
    event.preventDefault();

    nameError.style.display = checkLength(name.value, 0) ? "none" : "block";
    subjectError.style.display = checkLength(subject.value, 10) ? "none" : "block";
    addressError.style.display = checkLength(address.value, 25) ? "none" : "block";
    emailError.style.display = validateEmail(email.value) ? "none" : "block";

}

form.addEventListener("submit", validateForm);

function checkLength(value, length) {
    if(value.trim().length > length) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const mailFormat = /\S+@\S+\.\S+/;
    return mailFormat.test(email);
}