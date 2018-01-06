/*** GET ***/
// instantiate a new request
function getFromLocalhost() {
    var getRequest = new XMLHttpRequest();

    // add event listeners
    getRequest.addEventListener('load', function() {
        // transform a string into a usable object
        console.log(getRequest.responseText);
    });

    getRequest.open('GET', 'http://localhost:3000', true);

    getRequest.setRequestHeader('Content-type', 'application/json');
    getRequest.send();
}

//stessa identica chiamata, cambia solo l'url

function getFromGoodBye() {
    // instantiate a new request
    var getRequestGoodBye = new XMLHttpRequest();

    // add event listeners
    getRequestGoodBye.addEventListener('load', function() {
        // transform a string into a usable object
        console.log(getRequestGoodBye.responseText);
    });

    getRequestGoodBye.open('GET', 'http://localhost:3000/goodbye', true);

    getRequestGoodBye.setRequestHeader('Content-type', 'application/json');
    getRequestGoodBye.send();
}



/*** PUT  ***/

function putToLocalhost () {
    var putRequest = new XMLHttpRequest();
    putRequest.open('PUT', 'http://localhost:3000');
    putRequest.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    putRequest.onload = function() {
        if (putRequest.status === 200) {
            var userInfo = JSON.parse(putRequest.responseText);
        }
        console.log(putRequest.responseText);
    };

    putRequest.send(
        JSON.stringify({
            name: 'John Smith',
            age: 34
            })
    );
}


var getLocalhostBtn = document.getElementById('get-localhost');
var getGoodbyeBtn = document.getElementById('get-goodbye');
var putLocalhostBtn = document.getElementById('put-localhost');

getLocalhostBtn.addEventListener('click', getFromLocalhost);
getGoodbyeBtn.addEventListener('click', getFromGoodBye);
putLocalhostBtn.addEventListener('click', putToLocalhost);