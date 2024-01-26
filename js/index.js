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
    document.getElementById('youtube_logo').addEventListener('click', function() {
        hrefLink('y');
    });
    document.getElementById('melon_logo').addEventListener('click', function() {
        hrefLink('m');
    });
    document.getElementById('x_logo').addEventListener('click', function() {
        hrefLink('x');
    });
});

function hrefLink(page) {
    switch(page) {
        case 'in':
            window.location.href = './index.html';
            break;
        case 'ab':
            window.location.href = 'www.naver.com';
            break;
        case 'an':
            window.location.href = 'https://notice.libramentum.co.kr';
            break;
        case 'cr':
            window.location.href = 'http://www.libramentum.co.kr/html/creators.html';
            break;
        case 'ca':
            window.location.href = 'https://carrier.libramentum.co.kr';
            break;
        case 'sh':
            window.location.href = 'http://www.libramentum.co.kr/html/shop.html';
            break;
        case 'y':
            window.location.href = 'https://www.youtube.com';
            break;
        case 'm':
            window.location.href = 'https://www.melon.com';
            break;
        case 'x':
            window.location.href = 'https://twitter.com';
            break;
        default:
            break;
    }
}
