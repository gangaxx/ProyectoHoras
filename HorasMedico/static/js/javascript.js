/* Index.html */
function validarFormulario() {
    const cedula = document.getElementById("cedula").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    const rutRegex = /^\d{7,8}-[0-9kK]$/;
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!rutRegex.test(cedula)) {
        alert("Por favor, ingresa una cédula válida (Ej: 12345678-9).");
        return false;
    }

    if (!correoRegex.test(correo)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    if (telefono.length < 8) {
        alert("El número de teléfono debe tener al menos 8 dígitos.");
        return false;
    }

    alert("Formulario enviado correctamente ✅");
    return true;
}
/* Index.html */