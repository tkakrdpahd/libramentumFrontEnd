document.addEventListener('DOMContentLoaded', initializePage);
function initializePage() {
    setupPageNavigation();
    langButtonEventListener();
    if( typeof readAndWrite == 'function' ) {
        readAndWrite();
    }
}
// this is navigation link setting
function setupPageNavigation() {
    var ids = [
        'index', 'about', 'CEO_profile', 'mission', 'contact_us', 'artists_notice', 
        'companys_notice', 'creators', 'profile', 'career', 'agency', 'production', 'notice', 'IR', 'shop'
    ];

    var pageMap = {
        'index': '../index.html',
        'about': '/html/about.html',
        'CEO_profile': '/html/404.html',
        'mission': '/html/404.html',
        'contact_us': '/html/contact_us.html',
        'artists_notice': '/html/404.html',
        'companys_notice': '/html/404.html',
        'creators': '/html/404.html',
        'profile': '/html/404.html',
        'career': '/html/career.html',
        'agency': '/html/career.html',
        'production': '/html/career.html',
        'notice': '/html/404.html',
        'IR': '/html/404.html',
        'shop': '/html/404.html'
    };

    ids.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', function(event) {
                event.preventDefault();
                if (pageMap[id]) {
                    window.location.href = pageMap[id];
                }
            });
        }
    });
}

// this is language button eventListener
function langButtonEventListener() {
    if (localStorage.getItem("language") == null) {
        updateLanguageInfo("ko");
    }

    document.getElementById('lang_ko').addEventListener('click', function () {
        updateLanguageInfo("ko");
    });

    document.getElementById('lang_en').addEventListener('click', function () {
        updateLanguageInfo("en");
    });
}

function updateLanguageInfo(language) {
    localStorage.setItem("language", language);
    location.reload();
}
