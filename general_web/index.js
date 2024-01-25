// link redirection

function hrefLink(page) {
    switch(page) {
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
