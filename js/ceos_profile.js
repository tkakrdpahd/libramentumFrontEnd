document.addEventListener('DOMContentLoaded', function () {});

function readAndWriteCeoInfo() {
    fetch("../json/ceos_profile.json") // Fetch the JSON file
        .then(response => response.json()) // Convert the response to JSON
        .then(json => {
            // Access the first object within the 'ko' array of the JSON
            const { name, education, education_01, education_02 } = json.ko[0];

            // Update the HTML elements with the data
            document.getElementById("ceo_name").innerText = name;
            document.getElementById("ceo_education").innerText = education;
            document.getElementById("ceo_education_01").innerText = education_01;
            document.getElementById("ceo_education_02").innerText = education_02;
        })
        .catch(error => console.error('Error:', error)); // Log any errors
}
