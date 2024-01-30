document.addEventListener('DOMContentLoaded', function () {
    // 페이지 이동을 위한 이벤트 리스너 등록
    var ids = ['index', 'about', 'CEO_profile', 'mission', 'contact_us', 'notice', 'IR'];
    ids.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', function(event) {
                event.preventDefault(); // 기본 동작 방지
                hrefLink(id); // 해당 페이지로 이동하는 함수 호출
            });
        }
    });

    // CEO 정보 읽기 및 쓰기
    readAndWriteCeoInfo();
});

function hrefLink(page) {
    // 페이지 이동 로직
    var pageMap = {
        'index': '../index.html',
        'about': '/html/about.html',
        'CEO_profile': '/html/ceos_profile.html',
        'mission': '/html/about.html',
        'contact_us': '/html/contact_us.html',
        'notice': '/html/notice.html',
        'IR': '/html/ir.html'
    };

    if (pageMap[page]) {
        window.location.href = pageMap[page];
    }
}
