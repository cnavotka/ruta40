// Adapted from Code Institute tutorial Walkthrough Project
function sendMail(contactForm) {
    emailjs.send("service_agqog5v", "template_viast2c", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "comment": contactForm.comment.value
    })

    .then(
      function(response) {
        console.log("SUCCESS", response);
    },
    function(error) {
        console.log("FAILED", error);
    }
);

    // To clear the form
    document.getElementById('contactForm').request();
    return false;  // To block from loading a new page
}
