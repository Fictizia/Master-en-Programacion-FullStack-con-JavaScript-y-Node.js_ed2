var xmlHttp = new XMLHttpRequest();

function requestData(url, cb) {
    xmlHttp.onreadystatechange = function()
    {
        if(xmlHttp.readyState === 4) {
            if(xmlHttp.status === 200) {
                cb(xmlHttp.responseText);
            }
            else {
                console.log("Error getting data. Status code: " + xmlHttp.status);
            }
        }
    }

    xmlHttp.open("GET", url, true);
    xmlHttp.setRequestHeader("X-Mashape-Key", apiKey);
    xmlHttp.setRequestHeader("Accept", "application/json");
    xmlHttp.send();
}
