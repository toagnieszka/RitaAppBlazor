document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
        // Sprawdź, czy kliknięto wiersz tabeli
        const row = event.target.closest(".products-table tbody tr");
        if (!row) return;

        // Usuń klasę "active-row" z wszystkich wierszy
        document.querySelectorAll(".products-table tbody tr").forEach(r => r.classList.remove("active-row"));

        // Dodaj klasę "active-row" do klikniętego wiersza
        row.classList.add("active-row");
    });
});

//function CloseWindow(id)
//{
//    if (id == 4) {
//        var window = document.getElementById(id);
//        window.style.visibility = 'hidden'
//    }
//    else {
//        var window = document.getElementById(id);
//        window.style.visibility = 'hidden'

//        var inputs = window.querySelectorAll('input, textarea');
//        inputs.forEach(function (input) {
//            if (input.type === "text" || input.type === "number" || input.type === "date") {
//                input.value = '';
//            } else if (input.type === "radio" || input.type === "checkbox") {
//                input.checked = false;

//            } else if (input.tagName === "TEXTAREA") {
//                input.value = '';
//            }
//        });

//        document.getElementById("expiryDateCheck").checked = false;
//        document.getElementById("expiryDate").disabled = true;
//        document.getElementById("expiryDate").value = '';
//    }
   
//}

