
                function searchWebsite() {
                    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
                    var items = document.getElementById('websiteContent').getElementsByTagName('li');
                    var searchResults = [];
        
                    // Loop through items to find matching results
                    for (var i = 0; i < items.length; i++) {
                        var itemText = items[i].textContent.toLowerCase();
                        if (itemText.includes(searchTerm)) {
                            searchResults.push(itemText);
                        }
                    }
        
                    // Display search results
                    var resultsContainer = document.getElementById('searchResults');
                    resultsContainer.innerHTML = '<h2>Search Results</h2>';
        
                    if (searchResults.length > 0) {
                        for (var j = 0; j < searchResults.length; j++) {
                            resultsContainer.innerHTML += '<p>' + searchResults[j] + '</p>';
                        }
                    } else {
                        resultsContainer.innerHTML += '<p>No results found.</p>';
                    }
            
                }