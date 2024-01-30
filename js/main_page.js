document.addEventListener('DOMContentLoaded', function () {});

function readAndWriteCeoInfo() {
    fetch("../json/main_page.json") // Fetch the JSON file
        .then(response => response.json()) // Convert the response to JSON
        .then(json => {
            // Access the first object within the 'ko' array of the JSON
            const { title, main_page_article_body01, main_page_article_body02, main_page_article_body03 } = json.ko[0];

            // Update the HTML elements with the data
            document.getElementById("main_page_article_title").innerHTML = title;
            document.getElementById("main_page_article_body01").innerHTML = main_page_article_body01;
            document.getElementById("main_page_article_body02").innerHTML = main_page_article_body02;
        })
        .catch(error => console.error('Error:', error)); // Log any errors
}
