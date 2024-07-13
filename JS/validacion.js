const nombre = document.querySelector("#name");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#textarea");

const nombreError = document.querySelector("#nombreError");
const emailError = document.querySelector("#emailError");
const asuntoError = document.querySelector("#asuntoError");
const mensajeError = document.querySelector("#textareaError");


const button = document.querySelector("#buton");

button.addEventListener("click", (event) =>{
    event.preventDefault();
    validateEmpty(nombre.value, nombre, nombreError);
    validateEmail(email.value, email, emailError);
    validateEmpty(asunto.value, asunto, asuntoError);
    validateMensaje(mensaje.value, mensaje, textareaError);
});

function validateEmail(valueImput, divInput, divError){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(valueImput)){
        hideError(divInput, divError);
    }else{
        showError(divInput, divError);
    }
}

function validateMensaje(valueImput, divInput, divError){
    let regExp = /^[a-z0-9_-]{20,300}$/;
    if(regExp.test(valueImput)){
        hideError(divInput, divError);
    }else{
        showError(divInput, divError);
    }
}

function validateEmpty(valueImput, divInput, divError){
    if(valueImput.length == 0){
        showError(divInput, divError);
    }else{
        hideError(divInput, divError)
    }
}

function showError(divInput, divError){
    divInput.style.border = "1px solid red"
    divError.classList.add("error");
}

function hideError(divInput, divError){
    divInput.style.border = "1px solid green";
    divError.classList.add("error");
}