function openList(ev) {
    var clickedList = ev.target.dataset.list;
    var url = baseUrl + clickedList + ".json?api-key=" + apiKey;
    appendListTitle(clickedList);
    requestData(url, createBookCard);
}

function displayDataInView(data, createCardOfType) {
    var container = document.getElementsByClassName("container")[0];

    var elements = data.results;
    if(isBookData(data)) {
        elements = data.results.books;
    }

    var numberOfElements = elements.length;
    var cardDeck;
    for(var i = 0; i < numberOfElements; i++) {
        if (i % cardsPerRow === 0) {
            cardDeck = document.createElement("div");
            cardDeck.classList.add("card-deck");
            container.appendChild(cardDeck);
        }

        var card = createCardOfType(elements[i]);
        cardDeck.appendChild(card);

        if (i === numberOfElements - 1) {
            if (isLastRowIncomplete(numberOfElements)) {
                fillFreeSpace(cardDeck, card, numberOfElements);
            }
        }
    }
}

function isBookData(data) {
    return data.results.books;
}

function appendListTitle(clickedList) {
    var titleElement = document.getElementsByClassName("list-title")[0];
    titleElement.innerText = clickedList;
}

function createListCard(list){
    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("mb-4");

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    var titleElement = document.createElement("p");
    titleElement.classList.add("card-title");
    var titleText = document.createTextNode(list.list_name);
    titleElement.appendChild(titleText);

    var newestBookElement = document.createElement("p");
    newestBookElement.classList.add("card-text");
    newestBookElement.classList.add("d-inline");
    var newestBookText = document.createTextNode("Newest: " + list.newest_published_date);
    newestBookElement.appendChild(newestBookText);

    var oldestBookElement = document.createElement("p");
    oldestBookElement.classList.add("card-text");
    oldestBookElement.classList.add("d-inline");
    var oldestBookText = document.createTextNode("Oldest: " + list.oldest_published_date);
    oldestBookElement.appendChild(oldestBookText);

    var updateFrequencyElement = document.createElement("p");
    updateFrequencyElement.classList.add("card-text");
    updateFrequencyElement.classList.add("mt-4");
    var updateFrequencyText = document.createTextNode(list.updated);
    updateFrequencyElement.appendChild(updateFrequencyText);

    var readMoreButton = document.createElement("a");
    readMoreButton.setAttribute("role", "button");
    readMoreButton.setAttribute("href", "#");
    readMoreButton.dataset.list = list.list_name.toLowerCase();
    readMoreButton.classList.add("btn");
    readMoreButton.classList.add("btn-outline-primary");
    var readMoreText = document.createTextNode("READ MORE!");
    readMoreButton.appendChild(readMoreText);

    cardBody.appendChild(titleElement);
    cardBody.appendChild(newestBookElement);
    cardBody.appendChild(oldestBookElement);
    cardBody.appendChild(updateFrequencyElement);
    cardBody.appendChild(readMoreButton);

    card.appendChild(cardBody);

    return card;
}

function createBookCard(book) {
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

function isLastRowIncomplete(numberOfElements) {
    var maxNumberOfRows = Math.ceil(numberOfElements / cardsPerRow);
    return ((maxNumberOfRows * cardsPerRow) - numberOfElements === 0) ? false : true;
}

function fillFreeSpace(cardDeck, card, numberOfElements) {
    var freeSlots = getNumberOfFreeSlots(numberOfElements);
    for (var j = 0; j < freeSlots; j++) {
        var card = createEmptyCard();
        cardDeck.appendChild(card);
    }
}

function getNumberOfFreeSlots(numberOfElements) {
    var maxNumberOfRows = Math.ceil(numberOfElements / cardsPerRow);
    return (maxNumberOfRows * cardsPerRow) - numberOfElements;
}
