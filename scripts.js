document.addEventListener('DOMContentLoaded', function () {
    var ids = ['index', 'about', 'mission', 'contact_us'];
    ids.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', function(event) {
                event.preventDefault(); // 기본 동작 방지
                hrefLink(id); // 해당 페이지로 이동
            });
        }
    });
});

function hrefLink(page) {
    switch(page) {
        case 'index':
            window.location.href = '../index.html'; //http://www.libramentum.co.kr/
            break;
        case 'about':
            window.location.href = ''; // ./html/about.html
            break;
        case 'mission':
            window.location.href = ''; // ./html/about_us.html
            break;
        case 'contact_us':
            window.location.href = ''; // ./html/contact_us.html
            break;
    }
}

// Call data sheet
function articleDataCall() {
    //Data sheet need to include following:
    //Title, Date, Author, Passages
    //Input file will be .JSON file

    //id="article_id"
    //id="article_title"
    //id="article_quote"
    //id="article_main"
}