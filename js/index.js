const socket = io();

function readAndWrite() {
    fetch("../json/index.json")
        .then(response => response.json())
        .then(json => {
            const language = localStorage.getItem("language");
            const contents = json[language];
            
            const generalArticle = document.getElementById('general_article');

            contents.forEach(content => {
                Object.keys(content).forEach(key => {
                    let element = document.getElementById(key);
                    if (!element) {
                        element = document.createElement(key === 'title' ? 'h2' : 'h3');
                        element.id = key;
                        generalArticle.appendChild(element);
                    }
                    element.innerHTML = content[key];
                });
            });
        })
        .catch(error => {
            console.error("Failed to load content:", error);
        });
}