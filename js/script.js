const password = document.getElementById("password")
const checkbox = document.getElementById("check")

checkbox.onchange = function () {
    password.type = checkbox.checked ? "text" : 'password'
}