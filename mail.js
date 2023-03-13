document
.getElementsByClassName("contact-form")[0]
.addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_3vs73xa";
  const templateID = "template_9rbsevo";

  // send the email here
  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully");
      this.reset();
    },
    (error) => {
      console.log("FAILED...", error);
      alert("FAILED...", error);
    }
  );
});

