const animeDetails = document.querySelector(".anime-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const animeId = params.get("id");

const detailUrl = "https://kitsu.io/api/edge/anime?filter[id]=" + animeId;

async function getApiResult() {
    try {
        const response = await fetch(detailUrl);
        const details = await response.json();
        const result = details.data[0];
        const pageTitle = result.attributes.titles.en;
        document.title = pageTitle;
        return result;
    } 
    catch (error) {
        animeDetails.innerHTML = errorMessage();
    }   
}

function createDetails(result) {
    const info = result.attributes;
    const animeNotFoundImage = "https://preview.redd.it/dtljzwihuh861.jpg?width=960&crop=smart&auto=webp&s=afcfc996c8cff92d665f1219beeebd8744ab84f2";
    animeDetails.innerHTML = `<img src="${info.coverImage ? info.coverImage.original : animeNotFoundImage}" />
    <div class="details-container">
        <h2>${info.titles.en}</h2>
        <ul class="show-info"> 
            <li>${info.startDate} - ${info.endDate ? info.endDate : "running"}</li>
            <li>Rating: ${info.averageRating}</li>
            <li>Type: ${info.subtype}</li>
            <li>${info.ageRating} ${info.ageRatingGuide}</li>
            <li>Episodes: ${info.episodeCount ? info.episodeCount : "unknown"}</li>
        </ul>
        <p>${info.description}</p></div>`;
}

async function detailApi() {
    const apiResult = await getApiResult();
    createDetails(apiResult);
}


detailApi();