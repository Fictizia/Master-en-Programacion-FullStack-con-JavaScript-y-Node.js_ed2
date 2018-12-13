function requestData(url, cb) {
    clearContainerChildren();
    showLoadingSpinner();
    fetch(url)
       .then(getStatus)
       .then(getJson)
       .then(data => {
           hideLoadingSpinner();
           showDataContainer();
           displayDataInView(data, cb);
        })
       .catch(err => {
           console.error("An error ocurred while fetching data: ", err);
       });
}

function getStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    else {
        return Promise.reject(new Error(response.statusText));
    }
}

function getJson(response) {
    return response.json();
}

function showLoadingSpinner() {
    var loadingSpinner = document.getElementsByClassName("spinner-container")[0];
    loadingSpinner.classList.remove("hidden");
}

function hideLoadingSpinner() {
    var loadingSpinner = document.getElementsByClassName("spinner-container")[0];
    loadingSpinner.classList.add("hidden");
}

function showDataContainer() {
    var dataContainer = document.getElementsByClassName("container")[0];
    dataContainer.classList.remove("hidden");
}

function clearContainerChildren(){
    var container = document.getElementsByClassName("container")[0];
    removeChildrenFromNode(container);
}

function removeChildrenFromNode(node){
   while (node.firstChild) {
       node.removeChild(node.firstChild);
   }
}
