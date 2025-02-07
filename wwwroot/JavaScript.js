document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".products-table tbody tr");

    rows.forEach(row => {
        row.addEventListener("click", () => {
            // Usuń klasę "active-row" z wszystkich wierszy
            rows.forEach(r => r.classList.remove("active-row"));

            // Dodaj klasę "active-row" do klikniętego wiersza
            row.classList.add("active-row");
        });
    });
});

function OpenWindow(id) {
    var window = document.getElementById(id);
    window.style.visibility = 'visible';

    var activestatusradio = window.querySelector('input[name="status"][value="active"]');
    if (activestatusradio) {
        activestatusradio.checked = true;  // zaznacza "dostępny"
    }
}

function CloseWindow(id) {
    var window = document.getElementById(id);
    window.style.visibility = 'hidden'
    var inputs = window.querySelectorAll('input, textarea');
    inputs.forEach(function (input) {
        if (input.type === "text" || input.type === "number" || input.type === "date") {
            input.value = '';
        } else if (input.type === "radio" || input.type === "checkbox") {
            input.checked = false;

        } else if (input.tagName === "TEXTAREA") {
            input.value = '';
        }
    });

    document.getElementById("expiryDateCheck").checked = false;
    document.getElementById("expiryDate").disabled = true;
    document.getElementById("expiryDate").value = '';
}


