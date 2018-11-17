function requestPollenData(url) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var data = JSON.parse(xmlHttp.responseText);
            console.log(data);
            displayDataInView(data)
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

requestPollenData("http://airemad.com/api/v1/pollen");

function displayDataInView(data) {
  const OPENING_BRACKET_CHAR = "(";
  const CLOSING_BRACKET_CHAR = ")";
  const COLON_CHAR = ":";
  const BLANK_SPACE_CHAR = "\u00A0";
  var polenDetails = document.getElementById("pollen-details");

  for (var place of data) {
    var placeElement = document.createElement("p");
    var placeTextNode = document.createTextNode(place.name);
    placeElement.appendChild(placeTextNode);
    polenDetails.appendChild(placeElement);

    var measurementsList = document.createElement("ul");
    for (var m in place.mediciones) {
      var li = document.createElement("li");
      var p = document.createElement("p");
      var typeTextNode = document.createTextNode(m.concat(COLON_CHAR).concat(BLANK_SPACE_CHAR));
      p.appendChild(typeTextNode);

      var polenMeasurements = place.mediciones[m];
      var valueSpan = document.createElement("span");
      var valueTextNode = document.createTextNode((polenMeasurements.valor).toString().concat(BLANK_SPACE_CHAR));
      valueSpan.appendChild(valueTextNode);
      p.appendChild(valueSpan);

      var summarySpan = document.createElement("span");
      var summaryTextNode = document.createTextNode(BLANK_SPACE_CHAR.concat(OPENING_BRACKET_CHAR).concat(polenMeasurements.resumen).concat(CLOSING_BRACKET_CHAR));
      valueSpan.appendChild(summaryTextNode);
      p.appendChild(summarySpan);


      li.appendChild(p);
      measurementsList.appendChild(li);
    }

    polenDetails.appendChild(measurementsList);
  }
}
