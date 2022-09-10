function sendMessage() {
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (email === "" && message === "") {
    alert("Please provide your email and message first and then press send.");
  } else if (email === "") {
    alert("Please provide your email.");
  } else if (message === "") {
    alert("Please write your message.");
  } else {
    alert("Thank you for your message! I will get back to you ASAP:)");
  }
}

let button = document.getElementById("submit-button");
button.addEventListener("click", sendMessage);
