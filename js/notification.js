// change notification page algorithm
// call notification json
// update career.js readAndWrite(); update for create notification contents

function readAndWrite() {
    fetch("../json/notification.json")
    .then(response => response.json())
        .then(json => {
            const language = localStorage.getItem("language");
            var idx = sessionStorage.getItem("idx");
            
        })

        .catch(error => console.error('Error:', error));
}