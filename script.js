let URL = "https://api.jikan.moe/v4/";
const resultsContainer = document.getElementById("results-container");
let page = 0;
let isFetching = false; 

async function showAnime() {
    if (isFetching) return;
    
    isFetching = true;
    page++;
    
    try {
        let response = await fetch(URL + `top/anime?page=${page}`);
        let data = await response.json();
        let animeList = data.data;

        let animeHTML = animeList.map(anime => `
            <div class="anime-card">
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                <div class="card-info">
                    <h3>${anime.title}</h3>
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


window.addEventListener('scroll', () => {

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800) {
        showAnime();
    }
});


showAnime();