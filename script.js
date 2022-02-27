let offset = 0;
let iterations = 6;
const url = "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=";

const animeContainer = document.querySelector(".animes");

async function getApi() {
    try {
        animeContainer.innerHTML = "";

        for (let i = 0; i < iterations; i++) {

            results = await getResultsFromApi();

            for(let i = 0; i < results.length; i++) {
                if(!results[i].attributes.titles.en) {
                    continue;
                }
                createContent(results[i]);
            }

            offset += 20;
        }
        
    }
    catch (error) {
        animeContainer.innerHTML += errorMessage();
    }
}

async function getResultsFromApi(){
    const response = await fetch(url+offset);
    const json = await response.json();
    return json.data;
}

function createContent(results) {
    animeContainer.innerHTML += 
            `<a href="/html/details.html?id=${results.id}" class="animeResult">
                <div class="image" style="background-image: url(${results.attributes.posterImage.medium})";></div>
                <div class="card-info">
                    <h2>${results.attributes.titles.en}</h2>
                    <p>Rating: ${results.attributes.averageRating}</p>
                    <p>Released: ${results.attributes.startDate}</p>
                </div>
            </a>`
}

getApi();