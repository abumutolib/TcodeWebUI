const loginButton = document.getElementById("auth-button") as HTMLButtonElement;
const loggedButton = document.getElementById("logged-button") as HTMLAnchorElement;

let isActiveLogin = false;
let isActiveLogged = false;

if (loginButton)
    loginButton.addEventListener("click", () => {
        isActiveLogin = loginButton.classList.toggle("active");
    });

if (loggedButton)
    loggedButton!.addEventListener("click", () => {
        isActiveLogged = loggedButton!.classList.toggle("active");
        loggedButton!.parentElement!.classList.toggle("active");
    });

document.addEventListener("click", (e) => {
    if (isActiveLogged) loggedBlur(e);
    else if (isActiveLogin) loginBlur(e);
});

function loggedBlur(e: MouseEvent) {
    const loggedOption = document.getElementById("logged-options") as HTMLUListElement;
    let clickInside: boolean = false;

    if (loggedButton && loggedOption) {
        clickInside = loggedButton.contains(<HTMLElement>e.target);
        for (let child of loggedButton.childNodes) {
            if (clickInside) break;
            clickInside = child.contains(<HTMLElement>e.target);
        }
        for (let child of loggedOption.childNodes) {
            if (clickInside) break;
            clickInside = child.contains(<HTMLElement>e.target);
        }
        if (!clickInside) {
            loggedButton!.classList.remove("active");
            loggedButton!.parentElement!.classList.remove("active");
            isActiveLogged = !isActiveLogged;
        }
    }
}

function loginBlur(e: MouseEvent) {
    const authPopup = document.getElementById("auth-popup") as HTMLUListElement;
    let clickInside: boolean = false;
    if (loginButton && authPopup) {
        clickInside = loginButton.contains(<HTMLElement>e.target);
        for (let child of loginButton.childNodes) {
            if (clickInside) break;
            clickInside = child.contains(<HTMLElement>e.target);
        }
        for (let child of authPopup.childNodes) {
            if (clickInside) break;
            clickInside = child.contains(<HTMLElement>e.target);
        }
        if (!clickInside) {
            loginButton!.classList.remove("active");
            loginButton!.parentElement!.classList.remove("active");
            isActiveLogin = !isActiveLogin;
        }
    }
}
export default function () {
    return true;
}
