"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let isButton = false;
window.onload = () => {
    window.onscroll = () => {
        var _a;
        const nav = document.getElementById("main-nav");
        const scroll = document.getElementById("side-bar");
        let sticky = (_a = nav.offsetTop) !== null && _a !== void 0 ? _a : 0;
        if (window.pageXOffset > sticky) {
            scroll.classList.add("sticky");
        }
        else {
            scroll.classList.remove("sticky");
        }
    };
    activeAnchorLink();
};
function mobileMenu() {
    let sidebar = document.getElementById("side-bar");
    if (!isButton) {
        sidebar.classList.add("active");
        isButton = true;
    }
    else {
        sidebar.classList.remove("active");
        isButton = false;
    }
}
document.getElementById("mobile-toggle-open").addEventListener("click", e => {
    e.preventDefault();
    mobileMenu();
});
document.getElementById("menu-toggle-close").addEventListener("click", e => {
    e.preventDefault();
    mobileMenu();
});
let isActiveSearch = false;
function searchBox() {
    const searchForm = document.getElementById("search-form");
    const searchBox = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchButtonSubmit = document.getElementById("search-button-submit");
    if (!isActiveSearch) {
        searchForm.classList.add("active");
        searchBox.focus();
        isActiveSearch = true;
        searchButton.style.display = "none";
        searchButtonSubmit.style.display = "block";
    }
    else {
        searchForm === null || searchForm === void 0 ? void 0 : searchForm.classList.remove("active");
        isActiveSearch = false;
        searchButton.style.display = "block";
        searchButtonSubmit.style.display = "none";
    }
}
document.getElementById("search-button").addEventListener("click", e => {
    e.preventDefault();
    searchBox();
});
document.getElementById("search-input").addEventListener("blur", e => {
    e.preventDefault();
    let relatedTarget = e.relatedTarget;
    if (relatedTarget && relatedTarget.type === "submit")
        return;
    searchBox();
});
function activeAnchorLink() {
    let mainsection = document.getElementById("tutorial-aside-list");
    let anchors = mainsection.getElementsByTagName("a");
    let current = window.location.pathname.concat(window.location.search);
    for (let i = 0; i < anchors.length; i++) {
        let anchor = anchors[i].pathname.concat(anchors[i].search);
        if (!window.location.search.includes("&")) {
            anchors[0].classList.add("active");
        }
        if (anchor === current)
            anchors[i].classList.add("active");
    }
}
function default_1() {
    return true;
}
exports.default = default_1;
