
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

// link redirection

function hrefLink(page) {
    switch(page) {
        case 'in':
            window.location.href = './index.html'; // change to 'www.libramentum.co.kr/index.html'
            break;
        case 'ab':
            window.location.href = './html/about_us.html';
            break;
        case 'an':
            window.location.href = 'https://notice.libramentum.co.kr';
            break;
        case 'cr':
            window.location.href = 'https://creators.libramentum.co.kr';
            break;
        case 'ca':
            window.location.href = 'https://carrier.libramentum.co.kr';
            break;
        case 'sh':
            window.location.href = 'https://shop.libramentum.co.kr';
            break;
        default:
            break;
    }
}

function logoLink() {

}
// node.js redirection to data server
