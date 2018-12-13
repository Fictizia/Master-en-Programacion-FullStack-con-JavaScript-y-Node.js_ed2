 var cardsPerRow = 3;

 var url = baseUrl + "names.json?api-key=" + apiKey;
 requestData(url, createListCard);

 document.getElementsByClassName("container")[0].addEventListener("click", openList);
