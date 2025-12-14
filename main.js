const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");

nameInput.addEventListener("focus", function () {
  nameInput.placeholder = "";
});
nameInput.addEventListener("blur", function () {
  nameInput.placeholder = "Your Name";
});

emailInput.addEventListener("focus", function () {
  emailInput.placeholder = "";
});
emailInput.addEventListener("blur", function () {
  emailInput.placeholder = "Your Email";
});

messageInput.addEventListener("focus", function () {
  messageInput.placeholder = "";
});
messageInput.addEventListener("blur", function () {
  messageInput.placeholder = "Message";
});


let image = document.getElementById("zoomImage");
if (image) {
  image.onmouseover = zoomIn;
  image.onmouseout = zoomOut;
}

function zoomIn() {
  image.style.transform = "scale(1.1)";
}

function zoomOut() {
  image.style.transform = "scale(1)";
}
