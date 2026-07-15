const search = document.getElementById("search");

search.addEventListener("keyup", () => {

    const value = search.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        card.style.display = title.includes(value) ? "block" : "none";

    });

});