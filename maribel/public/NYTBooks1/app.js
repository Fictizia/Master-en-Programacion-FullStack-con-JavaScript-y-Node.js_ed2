var apiKey = "yourApiKey";
var baseUrl = "https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json";
var cardsPerRow = 3;

var url = baseUrl + "?api-key=" + apiKey;
requestBooksData(url);

function requestBooksData(url) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var data = JSON.parse(xmlHttp.responseText);
            hideLoadingSpinner();
            showDataContainer();
            displayDataInView(data)
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function hideLoadingSpinner() {
    var loadingSpinner = document.getElementsByClassName("spinner-container")[0];
    loadingSpinner.classList.add("hidden");
}

function showDataContainer() {
    var dataContainer = document.getElementsByClassName("container")[0];
    dataContainer.classList.remove("hidden");
}

function displayDataInView(data) {
    var container = document.getElementsByClassName("container")[0];

    var books = data.results.books;
    var numberOfBooks = books.length;
    var cardDeck;
    for (var i = 0; i < numberOfBooks; i++) {
        if (i % cardsPerRow === 0) {
            cardDeck = document.createElement("div");
            cardDeck.classList.add("card-deck");
            container.appendChild(cardDeck);
        }

        var card = createCard(books[i]);
        cardDeck.appendChild(card);

        if (i === numberOfBooks - 1) {
            if (isLastRowIncomplete(numberOfBooks)) {
                fillFreeSpace(cardDeck, card, numberOfBooks);
            }
        }
    }
}

function createCard(book) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("mb-4");

    var cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.src = book.book_image;
    cardImage.alt = book.title;

    var headerElement = document.createElement("p");
    headerElement.classList.add("mt-3");
    headerElement.classList.add("mr-3");
    headerElement.classList.add("ml-3");
    headerElement.classList.add("font-weight-bold");

    var rankElement = document.createElement("p");
    rankElement.classList.add("float-left");
    rankElement.classList.add("mr-4");
    var rankText = document.createTextNode("#" + book.rank);
    rankElement.appendChild(rankText);

    var titleElement = document.createElement("p");
    var titleText = document.createTextNode(book.title);
    titleElement.appendChild(titleText);

    headerElement.appendChild(rankElement);
    headerElement.appendChild(titleElement);

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    var weeksTitleElement = document.createElement("p");
    weeksTitleElement.classList.add("card-text");
    weeksTitleElement.classList.add("d-inline");
    weeksTitleElement.classList.add("font-italic");
    var weeksTitleText = document.createTextNode("Weeks in list: ");
    weeksTitleElement.appendChild(weeksTitleText);

    var weeksNumberElement = document.createElement("p");
    weeksNumberElement.classList.add("card-text");
    weeksNumberElement.classList.add("d-inline");
    weeksNumberElement.classList.add("font-italic");
    var weeksNumberText = document.createTextNode(book.weeks_on_list);
    weeksNumberElement.appendChild(weeksNumberText);

    var descriptionElement = document.createElement("p");
    descriptionElement.classList.add("card-text");
    descriptionElement.classList.add("mt-4");
    var descriptionText = document.createTextNode(book.description);
    descriptionElement.appendChild(descriptionText);

    var buyButton = document.createElement("a");
    buyButton.setAttribute("role", "button");
    buyButton.setAttribute("href", book.buy_links[2].url);
    buyButton.classList.add("btn");
    buyButton.classList.add("btn-outline-primary");
    var buyButtonText = document.createTextNode("Buy in Amazon");
    buyButton.appendChild(buyButtonText);

    cardBody.appendChild(weeksTitleElement);
    cardBody.appendChild(weeksNumberElement);
    cardBody.appendChild(descriptionElement);
    cardBody.appendChild(buyButton);

    card.appendChild(headerElement);
    card.appendChild(cardImage);
    card.appendChild(cardBody);

    return card;
}

function createEmptyCard() {
    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("mb-4");
    card.classList.add("border-0");

    return card;
}

function isLastRowIncomplete(numberOfBooks) {
    var maxNumberOfRows = Math.ceil(numberOfBooks / cardsPerRow);
    return ((maxNumberOfRows * cardsPerRow) - numberOfBooks === 0) ? false : true;
}

function fillFreeSpace(cardDeck, card, numberOfBooks) {
    var freeSlots = getNumberOfFreeSlots(numberOfBooks);
    for (var j = 0; j < freeSlots; j++) {
        var card = createEmptyCard();
        cardDeck.appendChild(card);
    }
}

function getNumberOfFreeSlots(numberOfBooks) {
    var maxNumberOfRows = Math.ceil(numberOfBooks / cardsPerRow);
    return (maxNumberOfRows * cardsPerRow) - numberOfBooks;
}
