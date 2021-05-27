const form = document.querySelector("#form")
const errorDiv = document.querySelector(".errors")
const errorList = document.querySelector(".errors-list")
const userNameInput = document.querySelector("#username")
const passwordInput = document.getElementById("password")
const confirmationInput = document.querySelector("#password-confirmation")
const termsInput = document.querySelector("#terms")

form.addEventListener("submit", e => {
  const errorMessages = []
  clearErrors()
  if (userNameInput.value.length < 6) {
    errorMessages.push("Username must be at least 6 characters long.")
  }
  if (passwordInput.value.length < 10) {
    errorMessages.push("Password must be at least 10 characters long.")
  }
  if (passwordInput.value !== confirmationInput.value) {
    errorMessages.push("Passwords must match")
  }
  if (!termsInput.checked) {
    errorMessages.push("Please agree to the terms.")
  }
  if (errorMessages.length > 0) {
    e.preventDefault()
    showErrors(errorMessages)
  }
})

function clearErrors() {
  while (errorList.children[0] != null) {
    errorList.removeChild(errorList.children[0])
  }
  errorDiv.classList.remove("show")
}

function showErrors(errorMessages) {
  errorMessages.forEach(message => {
    const li = document.createElement("li")
    li.innerText = message
    errorList.appendChild(li)
  })
  errorDiv.classList.add("show")
}
