var currentLang = 'ko';

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

function switchLanguage(lang) {
    currentLang = lang; // Set the current language based on the button clicked
    updateLanguageButtonStyles(lang); // Update button styles
    readAndWriteCeoInfo(); // Call the function to update the content based on the current language
}

function updateLanguageButtonStyles(selectedLang) {
    var langKoButton = document.getElementById('lang_ko');
    var langEnButton = document.getElementById('lang_en');
    
    if (selectedLang === 'ko') {
        langKoButton.style.textDecoration = 'underline';
        langEnButton.style.textDecoration = 'none';
    } else {
        langKoButton.style.textDecoration = 'none';
        langEnButton.style.textDecoration = 'underline';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to language buttons
    document.getElementById('lang_ko').addEventListener('click', function(event) {
        event.preventDefault();
        switchLanguage('ko');
    });

    document.getElementById('lang_en').addEventListener('click', function(event) {
        event.preventDefault();
        switchLanguage('en');
    });

    // Initialize default language button style
    updateLanguageButtonStyles('ko');

    // Load the default language content on initial page load
    readAndWriteCeoInfo();
});
