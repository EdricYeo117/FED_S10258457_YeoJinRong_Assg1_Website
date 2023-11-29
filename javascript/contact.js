/* Email Function*/
function ContactButton() {
    let contact = document.querySelector("#contact-button");
    contact.onclick = () => {
        sendEmail();
    };
    function sendEmail() {
        var emailAddress = "edricyeo.jr@gmail.com";
        var subject = "Email from assignment 1 for FED";
        var body = "I'm reaching out to enquire about ...";

        var mailtoLink = "mailto:" + encodeURIComponent(emailAddress) +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        window.location.href = mailtoLink;
    }
}