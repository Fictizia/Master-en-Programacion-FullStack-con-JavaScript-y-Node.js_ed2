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

function chunkArray(array, numberOfChunks) {
    var result = [];

    if (numberOfChunks < 2){
        result = [array];
    }
    else {
        var i = 0;
        var len = array.length;
        var size;
        while (i < len) {
            size = Math.ceil((len - i) / numberOfChunks--);
            result.push(array.slice(i, i += size));
        }
    }

    return result;
}
