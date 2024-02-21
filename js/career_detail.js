function readAndWrite() {
    var idx = sessionStorage.getItem("idx");
    var organization = sessionStorage.getItem("organization");

    fetch("../json/career.json")
        .then(response => response.json())
        .then(json => {
            const language = localStorage.getItem("language");

            // JSON 배열을 순회하면서 조건에 맞는 객체 찾기
            let contentFound = false;
            json[language].forEach(content => {
                if (content.organization === organization && content.idx === idx) {
                    // 페이지 요소에 기본 콘텐츠 삽입
                    document.getElementById("idx").innerHTML = content.idx;
                    document.getElementById("organization").innerHTML = content.organization;
                    document.getElementById("title").innerHTML = content.title;

                    Object.entries(content).forEach(([key, value]) => {
                        if (!["idx", "organization", "title"].includes(key)) { // 기본 키를 제외한 속성에 대해 처리
                            const element = document.createElement('div');
                            element.id = `${key}`; // 백틱(`)을 사용하여 문자열 템플릿을 적용
                            element.innerHTML = value;
                            document.querySelector('.career_detail_article').appendChild(element); // '.career_detail' 클래스를 가진 요소를 찾아 그 안에 새 요소를 추가
                        }
                    });

                    contentFound = true;
                }
            });

            if (!contentFound) {
                console.error('No content found for the specified organization and idx');
            }
        })
        .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', (event) => {
    let apply_button = document.getElementById("apply_button");
    apply_button.addEventListener('click', function(event) {
        var url = '../html/apply.html';
        window.location.href = url;
    });
});