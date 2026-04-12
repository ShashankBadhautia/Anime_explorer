let URL = "https://api.jikan.moe/v4/";
const resultsContainer = document.getElementById("results-container");
let page = 0;
let isFetching = false; 

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resetButton = document.getElementById("reset-button");
const advancedButton = document.getElementById("advanced-button");
const filtersContainer = document.getElementById("filters-container");

let currentQuery = "";
let isSearchMode = false;


async function searchAnime(query, isNewSearch = false) {
    if (isFetching) return;

    isFetching = true;

    try {
        if (isNewSearch) {
            resultsContainer.innerHTML = "";
            page = 0;
            currentQuery = query;
            isSearchMode = true;
        }

        page++;

        let types = getSelectedTypes();
        let typeQuery = "";

        if (types.length === 1) {
            typeQuery = `&type=${types[0]}`;
        }

        let response = await fetch(
            URL + `anime?q=${currentQuery}&page=${page}${typeQuery}`
        );

        let data = await response.json();
        let animeList = data.data;

        let animeHTML = animeList.map(anime => `
            <div class="anime-card">
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                <div class="card-info">
                    <h3>${anime.title_english || anime.title}</h3>
                    <p>Score: ${anime.score || 'N/A'}</p>
                </div>
            </div>
        `).join("");

        resultsContainer.insertAdjacentHTML("beforeend", animeHTML);

    } catch (error) {
        console.error("Search error:", error);
    } finally {
        isFetching = false;
    }
}

advancedButton.addEventListener("click", () => {
    if (filtersContainer.style.display === "none") {
        filtersContainer.style.display = "flex";
    } else {
        filtersContainer.style.display = "none";
    }
});

function getSelectedTypes() {
    const checkboxes = document.querySelectorAll("#filters-container input:checked");
    return Array.from(checkboxes).map(cb => cb.value);
}

async function showAnime() {
    if (isFetching) return;
    
    isFetching = true;
    page++;

    let types = getSelectedTypes();

    let typeQuery = "";
    if (types.length === 1) {
        typeQuery = `&type=${types[0]}`;
    }
    
    try {
        let response = await fetch(URL + `top/anime?page=${page}`);
        let data = await response.json();
        let animeList = data.data;
        
        let animeHTML = animeList.map(anime => `
            <div class="anime-card">
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
            <div class="card-info">
            <h3>${anime.title_english || anime.title}</h3>
            <p>Score: ${anime.score || 'N/A'}</p>
            </div>
            </div>
            `).join("");
            
            
            resultsContainer.insertAdjacentHTML("beforeend", animeHTML);
            
        } catch (error) {
            console.error("Oops! Something went wrong:", error);
        } finally {
            isFetching = false; 
        }
    }

    resetButton.addEventListener("click", () => {
    searchInput.value = ""; // optional: clear search box
    resetToTrending();
    });

    searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchButton.click();
    }
    });
    
    searchButton.addEventListener("click", () => {
    let query = searchInput.value.trim();
    if (query !== "") {
        searchAnime(query, true); // true = new search
    }
    });

    function resetToTrending() {
    resultsContainer.innerHTML = "";
    page = 0;
    isSearchMode = false;
    currentQuery = "";
    
    window.scrollTo(0, 0); // scroll to top

    showAnime();
    }
    
    window.addEventListener('scroll', () => {

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800) {

        if (isSearchMode) {
            searchAnime(currentQuery); // load more search results
        } else {
            showAnime(); // load trending
        }

    }
    });

    document.querySelectorAll("#filters-container input").forEach(cb => {
    cb.addEventListener("change", () => {
        if (isSearchMode) {
            searchAnime(currentQuery, true); // reload with filters
        }
        });
    });
    
    
showAnime();