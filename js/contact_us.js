function readAndWrite() {
    document.getElementById('contact_email_button').addEventListener('click', function() {
        var emailButton = document.getElementById('contact_email_button');
        var emailDiv = document.createElement('span');
        emailDiv.innerHTML = "libramentum@naver.com";
        emailButton.parentNode.replaceChild(emailDiv, emailButton);
    });

    document.getElementById('contact_fax_button').addEventListener('click', function() {
        var faxButton = document.getElementById('contact_fax_button');
        var faxDiv = document.createElement('span');
        faxDiv.innerHTML = "Fax is unavailable now";
        faxButton.parentNode.replaceChild(faxDiv, faxButton);
    });
}
