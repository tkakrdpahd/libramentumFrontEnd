// change notification page algorithm
// call notification json
// update career.js readAndWrite(); update for create notification contents

function readAndWrite() {
    var idx = sessionStorage.getItem("idx");

    fetch("../json/notification.json")
    .then(response => response.json())
        .then(json => {
            
        })

        .catch(error => console.error('Error:', error));
}