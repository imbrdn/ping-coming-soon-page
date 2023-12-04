const email = document.querySelector(".email-input");
const form = document.querySelector(".email-button-form");
const emailError = document.querySelector(".email-error");
const emailSuccess = document.querySelector(".email-success");

form.addEventListener("submit", e => {
    if (!email.value) {
        e.preventDefault();
      emailError.textContent = "You must enter an email"
    } else {
        emailError.textContent = "You must enter a valid email address";
        email.style.border = "1px solid var(--clr-secondary-200)";
    };

    if(email.value){
        const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
      if (regexMatch) {
        emailError.textContent = "";
        emailError.style.position = "relative";
        emailSuccess.textContent = "Successfully Subscribed!";
        emailSuccess.style.position = "relative";
        email.style.border = "1px solid var(--clr-secondary-100)";
      } else {
        emailError.textContent = "You must enter a valid email address";
        emailSuccess.textContent = "";
        emailSuccess.style.position = "relative";
        emailError.style.position = "relative";
        email.style.border = "1px solid var(--clr-secondary-200)";
      }
      } else {
        emailError.textContent = "You must enter an email address";
        emailSuccess.textContent = "";
        emailSuccess.style.position = "relative";
        emailError.style.position = "relative";
        email.style.border = "1px solid var(--clr-secondary-200)";
      }
});

