const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const counter = document.getElementById("counter");
const success = document.getElementById("successMessage");

messageInput.addEventListener("input", () => {
  counter.textContent = messageInput.value.length;
});

function setError(input, message) {
  const group = input.parentElement;

  group.classList.add("error");
  group.classList.remove("success");

  group.querySelector(".error").textContent = message;
}

function setSuccess(input) {
  const group = input.parentElement;

  group.classList.remove("error");
  group.classList.add("success");

  group.querySelector(".error").textContent = "";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  if (nameInput.value.trim().length < 2) {
    setError(nameInput, "შეიყვანეთ მინიმუმ 2 სიმბოლო");

    valid = false;
  } else {
    setSuccess(nameInput);
  }

  if (!validateEmail(emailInput.value.trim())) {
    setError(emailInput, "არასწორი ელ-ფოსტა");

    valid = false;
  } else {
    setSuccess(emailInput);
  }

  if (messageInput.value.trim().length < 10) {
    setError(messageInput, "შეტყობინება უნდა შეიცავდეს მინიმუმ 10 სიმბოლოს");

    valid = false;
  } else {
    setSuccess(messageInput);
  }

  if (valid) {
    success.style.display = "block";

    form.reset();

    counter.textContent = "0";

    document
      .querySelectorAll(".form-group")
      .forEach((g) => g.classList.remove("success"));
  }
});
