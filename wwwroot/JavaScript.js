document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
         //Sprawdź, czy kliknięto wiersz tabeli
        const row = event.target.closest(".products-table tbody tr");
        if (!row) return;

         //Usuń klasę "active-row" z wszystkich wierszy
        document.querySelectorAll(".products-table tbody tr").forEach(r => r.classList.remove("active-row"));

         //Dodaj klasę "active-row" do klikniętego wiersza
        row.classList.add("active-row");
    });
});

