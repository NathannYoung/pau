var input_name = document.getElementById("name");
var input_email = document.getElementById("email");
var input_channel = document.getElementById("channel");
var input_submit = document.getElementById("submit");
var back_arrow = document.getElementById("back-arrow");

input_submit.addEventListener("click", enviarFormulario);

function enviarFormulario(event) {
    event.preventDefault();

    console.log("Se hizo click");

    var valor_name = input_name.value;
    var valor_email = input_email.value;
    var valor_channel = input_channel.value;

    console.log(valor_name);
    console.log(valor_email);
    console.log(valor_channel);

    var placeholder_name = document.getElementById("name-placeholder");
    var placeholder_email = document.getElementById("email-placeholder");

    placeholder_name.innerHTML = valor_name;
    placeholder_email.innerHTML = valor_email;

    let elemento_feedback = document.getElementById("feedback");
    elemento_feedback.classList.remove("hidden");

    let elemento_formulario = document.getElementById("page");
    elemento_formulario.classList.add("hidden");
}

back_arrow.addEventListener("click", function(event) {
    event.preventDefault(); // Detiene el comportamiento predeterminado del enlace

    let elemento_feedback = document.getElementById("feedback");
    elemento_feedback.classList.add("hidden");

    let elemento_formulario = document.getElementById("page");
    elemento_formulario.classList.remove("hidden");
});
