document.getElementById("formularioContacto").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("NAME").value.trim();
    const lastname = document.getElementById("LASTNAME").value.trim();
    const dni = document.getElementById("DNI").value.trim();
    const email = document.getElementById("EMAIL").value.trim();

    const dniRegex = /^[0-9]{8}$/;
    const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (name && lastname && dniRegex.test(dni) && emailRegex.test(email)) {
        alert("SENT SUCCESSFULLY");

        const usuario = {
            name: name,
            lastname: lastname,
            dni: dni,
            email: email
        };

        console.log(usuario);
    } else {
        alert("INCORRECT DATA, PLEASE TYPE AGAIN");
    }
});
