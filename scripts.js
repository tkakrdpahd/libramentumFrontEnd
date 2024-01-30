document.addEventListener('DOMContentLoaded', function () {
    var ids = ['index', 'about', 'CEO_profile', 'mission', 'contact_us', 'notice', 'IR'];
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
            window.location.href = '../index.html';
            break;
        case 'about':
            window.location.href = './html/about.html';
            break;
        case 'CEO_profile':
                window.location.href = './html/about.html';
                break;
        case 'mission':
            window.location.href = './html/about.html';
            break;
        case 'contact_us':
            window.location.href = './html/contact_us.html';
            break;
        case 'notice':
            window.location.href = './html/notice.html';
            break;
        case 'IR':
            window.location.href = './html/ir.html';
        break;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    jsonRead();
    writeJson();
});

function jsonRead() {

}

function writeJson() {
    document.getElementById("ceo_name").innerText = "두민석";
}
