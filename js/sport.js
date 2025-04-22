
const resultList = document.querySelector('#results');
const url = 'https://content.guardianapis.com/search?q=sport&api-key=';
const apiKey = 'e9c90ecd-d8b9-47ab-b0c0-31839b65fb0a';
const pageSize = '&page-size=12'

fetch(url + apiKey + pageSize)
.then((response) => response.json())
.then((data) => {
    data.response.results.forEach(function (value) {
        console.log(value);
        const articleElement = `
            <div class="col-md-4 mb-4"> <!-- Creats the '3 coloum' Layout  -->
                <div class="card h-100"> <!-- This will Kepp the top's of the cards the same hight  -->
                    <div class="card-body d-flex flex-column"> <!-- This should keep the article buttum lined up at the bottom  -->
                        <h5 class="card-title">${value.webTitle}</h5> <!-- Pulls the Value paired with 'card-title' and displays it here -->
                        <p class="card-text">${value.sectionName}</p> <!-- Pulls the Value paired with 'card-text' and displays it here  -->
                        <a target="_blank" href="${value.webUrl}" class="btn btn-primary mt-auto">View Article</a> <!-- Opens a new Tab to the Article 'webUrl' value pair  -->
                    </div>
                </div>
            </div>`;
            resultList.insertAdjacentHTML('beforeend', articleElement);
        });
});

