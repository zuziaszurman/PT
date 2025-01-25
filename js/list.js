const searchInput = document.getElementById('search');
const suggestionsBox = document.getElementById('suggestions');
const countries = Array.from(document.querySelectorAll('.country-card')).map(card => card.dataset.name);

searchInput.addEventListener('input', () => {const query = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = '';
    if (query) {
    const filteredCountries = countries.filter(country => country.toLowerCase().includes(query));
    filteredCountries.forEach(country => {
    const suggestion = document.createElement('div');
    suggestion.textContent = country;
    suggestion.addEventListener('click', () => {
    location.href = 'for_each_country.html';
});
    suggestionsBox.appendChild(suggestion);
});
}
});
