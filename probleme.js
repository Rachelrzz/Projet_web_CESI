// Limiter le numero de telephone à 10 chiffres
function limitTelephone() {
    const input = document.getElementById("tel");

    if (input.value.length > input.maxLength) {
        input.value = input.value.slice(0, input.maxLength);
    }
}