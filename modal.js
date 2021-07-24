// Adapted from Code Institute tutorial Walkthrough Project
function sendMail(contactForm) {
    emailjs.send("service_agqog5v", "template_viast2c", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "comment": contactForm.comment.value
    })
//Sweetalert2 for pop up modal
    .then(
        function() {
            Swal.fire ({
              title: 'Thank you for contact us!',
              text: 'We will get back to you shortly.',
              icon: 'success',
              confirmButtonColor: '#60abff'
            });
          },
          
          function() {
            Swal.fire ({
              title: 'Ooops...',
              text: 'Something went wrong.',
              icon: 'error',
              confirmButtonColor: '#60abff'
            });
        }); 

    // To clear the form
    document.getElementById('contactForm').request();
    return false;  // To block from loading a new page
}
