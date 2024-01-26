document.addEventListener('DOMContentLoaded', function () {
    // 각 ID에 대한 이벤트 리스너 추가
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

// 페이지 이동을 처리하는 함수
function hrefLink(page) {
    switch(page) {
        case 'index':
            window.location.href = '../index.html';
            break;
        case 'about':
            // 'about' 페이지의 URL로 이동
            window.location.href = './html/about_us.html';
            break;
        case 'mission':
            // 'mission' 페이지의 URL로 이동
            window.location.href = 'https://www.libramentum.co.kr/mission';
            break;
        case 'contact_us':
            // 'contact_us' 페이지의 URL로 이동
            window.location.href = 'https://www.libramentum.co.kr/contact';
            break;
        // 추가적인 케이스를 이곳에 추가할 수 있습니다.
    }
}
