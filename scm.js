const countries = [
    { name: 'United States', capital: 'Washington, D.C.' },
    { name: 'France', capital: 'Paris' },
    { name: 'Germany', capital: 'Berlin' },
    { name: 'Italy', capital: 'Rome' },
    { name: 'Spain', capital: 'Madrid' },
    // Add more countries as needed
];

const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    suggestions.innerHTML = '';
    
    if (query) {
        const filteredCountries = countries.filter(country => 
            country.name.toLowerCase().includes(query) || 
            country.capital.toLowerCase().includes(query)
        );
        
        filteredCountries.forEach(country => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerText = `${country.name} - ${country.capital}`;
            div.addEventListener('click', () => {
                searchInput.value = `${country.name} - ${country.capital}`;
                suggestions.innerHTML = '';
            });
            suggestions.appendChild(div);
        });
    }
});
