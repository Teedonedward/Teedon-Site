const searchInput = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-bar a');
const suggestionsContainer = document.createElement('div');
suggestionsContainer.classList.add('suggestions-container');

// Add an event listener to the search button to execute search when clicked
searchBtn.addEventListener('click', executeSearch);

// Add an event listener to the search input to execute search on Enter key press
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        executeSearch();
    }
});

// Add an event listener to the search input to update suggestions in real time
searchInput.addEventListener('input', updateSuggestions);

function executeSearch() {
    const searchTerm = searchInput.value;

    // Search the entire website for the entered term (e.g., using a search API)
    // and return the results

    // Display the search results on the page (e.g., in a search results section)
}

function updateSuggestions() {
    const searchTerm = searchInput.value;

    // Clear the existing suggestions
    while (suggestionsContainer.firstChild) {
        suggestionsContainer.removeChild(suggestionsContainer.firstChild);
    }

    // Get suggestions for the entered term (e.g., using a search API)
    const suggestions = getSuggestions(searchTerm);

    // Add the suggestions to the container
    suggestions.forEach(function(suggestion) {
        const suggestionElement = document.createElement('div');
        suggestionElement.classList.add('suggestion');
        suggestionElement.textContent = suggestion;
        suggestionsContainer.appendChild(suggestionElement);
    });

    // Add the suggestions container to the page
    if (suggestions.length > 0) {
        document.body.appendChild(suggestionsContainer);
    }
}

function getSuggestions(searchTerm) {
    // Get suggestions for the entered term (e.g., using a search API)
    // and return them
    // In this example, we'll just return some hardcoded suggestions
    const hardcodedSuggestions = [
        'House plans',
        'Home designs',
        'Kitchen remodel',
        'Bathroom remodel',
        'Floor plans'
    ];
    return hardcodedSuggestions.filter(function(suggestion) {
        return suggestion.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });
} 
