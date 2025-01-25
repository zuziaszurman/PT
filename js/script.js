// Lista krajów europejskich
// Lista krajów europejskich
const europejskieKraje = [
    { name: "Albania" },
    { name: "Andora" },
    { name: "Armenia" },
    { name: "Austria" },
    { name: "Azerbejdżan" },
    { name: "Białoruś" },
    { name: "Belgia" },
    { name: "Bośnia i Hercegowina" },
    { name: "Bułgaria" },
    { name: "Chorwacja" },
    { name: "Cypr" },
    { name: "Czechy" },
    { name: "Danemarka" },
    { name: "Estonia" },
    { name: "Finlandia" },
    { name: "Francja" },
    { name: "Gruzja" },
    { name: "Niemcy" },
    { name: "Grecja" },
    { name: "Węgry" },
    { name: "Islandia" },
    { name: "Irlandia" },
    { name: "Włochy" },
    { name: "Kazachstan" },
    { name: "Kosowo" },
    { name: "Łotwa" },
    { name: "Liechtenstein" },
    { name: "Litwa" },
    { name: "Luksemburg" },
    { name: "Malta" },
    { name: "Mołdawia" },
    { name: "Monako" },
    { name: "Czarnogóra" },
    { name: "Holandia" },
    { name: "Północna Macedonia" },
    { name: "Norwegia" },
    { name: "Polska" },
    { name: "Portugalia" },
    { name: "Rumunia" },
    { name: "Rosja" },
    { name: "San Marino" },
    { name: "Serbia" },
    { name: "Słowacja" },
    { name: "Słowenia" },
    { name: "Hiszpania" },
    { name: "Szwecja" },
    { name: "Szwajcaria" },
    { name: "Turcja" },
    { name: "Ukraina" },
    { name: "Zjednoczone Królestwo" },
    { name: "Watykan" }
];

// Funkcja do obsługi wyszukiwania
function searchCountries() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const filteredCountries = europejskieKraje.filter(country => country.name.toLowerCase().includes(input));

    const suggestionsBox = document.getElementById("suggestions-box");
    suggestionsBox.innerHTML = ""; // Wyczyść poprzednie sugestie

    // Jeśli coś wpisano, pokaż sugestie
    if (input) {
        suggestionsBox.style.display = "block"; // Pokazuje kontener z wynikami
        filteredCountries.forEach(country => {
            const suggestion = document.createElement("div");
            suggestion.textContent = country.name;
            suggestion.addEventListener("click", () => {
                window.location.href = `for_each_country.html?country=${country.name}`;
            });
            suggestionsBox.appendChild(suggestion);
        });
    } else {
        suggestionsBox.style.display = "none"; // Ukrywa listę, jeśli nic nie wpisano
    }
}

// Funkcja do ukrywania listy sugestii, gdy użytkownik kliknie poza nią
window.addEventListener('click', (event) => {
    const suggestionsBox = document.getElementById("suggestions-box");
    if (!document.getElementById("search-input").contains(event.target)) {
        suggestionsBox.style.display = "none";
    }
});




