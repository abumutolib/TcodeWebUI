"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AjaxHelper_1 = require("../../helper/AjaxHelper");
const aside_component_1 = require("../../components/tutorial/aside/aside.component");
const titleArticle = document.getElementById("title-article");
const contentArticle = document.getElementById("content-article");
const tutorialLink = document.querySelectorAll("[property=tutorial-link]");
const activeLinks = new aside_component_1.ActiveTutorialLink();
document.addEventListener("DOMContentLoaded", () => {
    if (tutorialLink.length > 0) {
        let anchorUrl = regexUrl(tutorialLink[0].pathname);
        getArticle(anchorUrl.id, anchorUrl.baseUrl);
        activeLinks.activeAnchorLink(tutorialLink[0]);
    }
});
tutorialLink.forEach(i => {
    i.addEventListener("click", e => {
        e.preventDefault();
        let anchorUrl = regexUrl(i.pathname);
        getArticle(anchorUrl.id, anchorUrl.baseUrl);
        activeLinks.activeAnchorLink(i);
    });
});
//let data = {
//    id: 0,
//    title: "",
//    htmlContent: ""
//};
function getArticle(id, url) {
    titleArticle.innerText = "";
    contentArticle.innerHTML = "";
    let data = {};
    let ajax = new AjaxHelper_1.ApiClient(url);
    showHideSpinner(true);
    ajax.getById(id, (result) => {
        data = result;
        showHideSpinner(false);
        titleArticle.innerText = data.title;
        contentArticle.innerHTML = data.htmlContent;
    });
}
function regexUrl(url) {
    let toReturn = {};
    let link = url.split('/');
    let id = parseInt(link[3]);
    toReturn.id = id;
    toReturn.baseUrl = `/${link[1]}/${link[2]}`;
    return toReturn;
}
;
function showHideSpinner(isShow) {
    const spinner = document.getElementById("spinner");
    if (isShow) {
        spinner.removeAttribute('hidden');
    }
    else {
        spinner.setAttribute('hidden', '');
    }
}
function default_1() {
    return true;
}
exports.default = default_1;
