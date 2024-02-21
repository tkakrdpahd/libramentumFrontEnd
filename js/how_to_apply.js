// this is application discription page script file

function readAndWrite() {
    fetch("../json/apply.json")
    .then(response => response.json())
    .then(json => {
        const language = localStorage.getItem("language");
        const contents = json[language];

        for (let i = 0; i < contents.length; i++) {
            
            let tag;

            console.log(contents[i][0]);
            console.log(contents[i][1]);

            switch (contents[i][0]) {
                case "page_title":
                    tag = 'h2';
                    break;
                case "apply_header":
                    tag = 'h3';
                    break;
                case "apply_sub_header":
                    tag = "h4";
                    break;
                case "apply_description":
                    tag = "h5";
                    break;
                case "apply_sub_description":
                    tag = "h6";
                    break;
            }
            // 요소 생성
            let curentContents = document.createElement(tag);
            // 내용 설정
            curentContents.innerHTML = contents[i][1];
            // 문서에 추가
            document.querySelector('.application_info').appendChild(curentContents);
        }
    })
    .catch(error => console.error('Error:', error));
}
