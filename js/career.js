function readAndWrite() {
    fetch("../json/career.json")
        .then(response => response.json())
        .then(json => {
            const language = localStorage.getItem("language");
            const contents = json[language];

            contents.forEach(element => {
                // if organization is agency, than rethrn a, else p
                const organization = element.organization === 'agency' ? 'a' : 'p';
                const title = element["title"];

                // create id for career detail page
                const idx = organization + element["idx"];

                let careerPageElements = document.getElementById(idx);

                if (!careerPageElements) {
                    
                    element = document.createElement('a');
                    element.href = "#";
                    element.id = idx;

                    if(organization === 'a') {
                        document.getElementById('career_result_agency').appendChild(element);
                    } else {
                        document.getElementById('career_result_production').appendChild(element);
                    }

                    element.innerHTML = '<h3> No. ' + idx + '</h3>' + '<h3>' + title + '</h3>';

                    // event listener for added contents
                    element.addEventListener('click', function(event) {
                    event.preventDefault();
                    // return idx to career detail page
                    readIdx(idx);
                    // load career article page
                    hrefLinkCareer();
                });
                }
            });
        })
        .catch(error => {
            console.error("Failed to load content:", error);
        });
    
        function readIdx(id) {
        var organization = id.charAt(0) === 'a' ? 'agency' : 'production';
        var idx = id.substr(1);
    
        sessionStorage.setItem("organization", organization);
        sessionStorage.setItem("idx", idx);
    }
    
    function hrefLinkCareer() {
        var url = '../html/career_detail.html';
        window.location.href = url;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('n001').addEventListener("click", function () {
        var url = '../html/notification.html';
        window.location.href = url;
    })

    let apply_button = document.getElementById("apply_button");
    apply_button.addEventListener('click', function(event) {
        var url = '../html/notification.html';
        window.location.href = url;
    });
});