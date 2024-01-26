// EventListener for web-page

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('index').addEventListener('click', function() {
        hrefLink('in');
    });
    document.getElementById('about_us').addEventListener('click', function() {
        hrefLink('ab');
    });
    document.getElementById('announcement').addEventListener('click', function() {
        hrefLink('an');
    });
    document.getElementById('creators').addEventListener('click', function() {
        hrefLink('cr');
    });
    document.getElementById('carrier').addEventListener('click', function() {
        hrefLink('ca');
    });
    document.getElementById('shop').addEventListener('click', function() {
        hrefLink('sh');
    });
});

function hrefLink(page) {
    switch(page) {
        case 'in':
            window.location.href = './index.html'; // change to 'www.libramentum.co.kr/index.html'
            break;
        case 'ab':
            window.location.href = './html/about_us.html';
            break;
        case 'an':
            window.location.href = 'https://notice.libramentum.co.kr'; // link to tistory custom page
            break;
        case 'cr':
            window.location.href = './html/creators.html';
            break;
        case 'ca':
            window.location.href = 'https://carrier.libramentum.co.kr';
            break;
        case 'sh':
            window.location.href = './html/shop.html'; // js need connect to naver marketplace API DB
            break;
        default:
            break;
    }
}

function logoLink() {

}
