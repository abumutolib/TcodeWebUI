"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginButton = document.getElementById("auth-button");
const loggedButton = document.getElementById("logged-button");
let isActiveLogin = false;
let isActiveLogged = false;
if (loginButton)
    loginButton.addEventListener("click", () => {
        isActiveLogin = loginButton.classList.toggle("active");
    });
if (loggedButton)
    loggedButton.addEventListener("click", () => {
        isActiveLogged = loggedButton.classList.toggle("active");
        loggedButton.parentElement.classList.toggle("active");
    });
document.addEventListener("click", (e) => {
    if (isActiveLogged)
        loggedBlur(e);
    else if (isActiveLogin)
        loginBlur(e);
});
function loggedBlur(e) {
    const loggedOption = document.getElementById("logged-options");
    let clickInside = false;
    if (loggedButton && loggedOption) {
        clickInside = loggedButton.contains(e.target);
        for (let child of loggedButton.childNodes) {
            if (clickInside)
                break;
            clickInside = child.contains(e.target);
        }
        for (let child of loggedOption.childNodes) {
            if (clickInside)
                break;
            clickInside = child.contains(e.target);
        }
        if (!clickInside) {
            loggedButton.classList.remove("active");
            loggedButton.parentElement.classList.remove("active");
            isActiveLogged = !isActiveLogged;
        }
    }
}
function loginBlur(e) {
    const authPopup = document.getElementById("auth-popup");
    let clickInside = false;
    if (loginButton && authPopup) {
        clickInside = loginButton.contains(e.target);
        for (let child of loginButton.childNodes) {
            if (clickInside)
                break;
            clickInside = child.contains(e.target);
        }
        for (let child of authPopup.childNodes) {
            if (clickInside)
                break;
            clickInside = child.contains(e.target);
        }
        if (!clickInside) {
            loginButton.classList.remove("active");
            loginButton.parentElement.classList.remove("active");
            isActiveLogin = !isActiveLogin;
        }
    }
}
function default_1() {
    return true;
}
exports.default = default_1;
