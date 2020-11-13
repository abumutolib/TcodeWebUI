import { ApiClient } from "../../helper/AjaxHelper";
import { ITutorial } from "../../helper/ITutorial";
import { ActiveTutorialLink } from "../../components/tutorial/aside/aside.component";

const titleArticle = document.getElementById("title-article") as HTMLHeadingElement;
const contentArticle = document.getElementById("content-article") as HTMLDivElement;
const tutorialLink = document.querySelectorAll("[property=tutorial-link]") as NodeListOf<HTMLAnchorElement>;

const activeLinks = new ActiveTutorialLink();

document.addEventListener("DOMContentLoaded", () => {
    if (tutorialLink.length > 0) {
        let anchorUrl = regexUrl(tutorialLink[0].pathname);
        getArticle(anchorUrl!.id, anchorUrl!.baseUrl);
        activeLinks.activeAnchorLink(tutorialLink[0]);
    }
});

tutorialLink.forEach(i => {
    i.addEventListener("click", e => {
        e.preventDefault();
        let anchorUrl = regexUrl(i.pathname);
        getArticle(anchorUrl!.id, anchorUrl!.baseUrl);
        activeLinks.activeAnchorLink(i);
    });
});

//let data = {
//    id: 0,
//    title: "",
//    htmlContent: ""
//};
function getArticle(id: number, url: string) {
    titleArticle.innerText = "";
    contentArticle.innerHTML = "";
    let data = {} as ITutorial;
    let ajax = new ApiClient<ITutorial>(url);
    showHideSpinner(true);
    ajax.getById(id, (result: ITutorial) => {
        data = result;
        showHideSpinner(false);
        titleArticle.innerText = data.title;
        contentArticle.innerHTML = data.htmlContent;
    });
}

function regexUrl(url: string): IAnchorLink | null {
    let toReturn = {} as IAnchorLink;
    
    let link = url.split('/');
    let id = parseInt(link[3]);
    toReturn!.id = id;
    toReturn!.baseUrl = `/${link[1]}/${link[2]}`;
    return toReturn;
};

function showHideSpinner(isShow: boolean) {
    const spinner = document.getElementById("spinner");
    if (isShow) {
        spinner!.removeAttribute('hidden');
    } else {
        spinner!.setAttribute('hidden','');
    }
}

interface IAnchorLink {
    id: number;
    baseUrl: string;
}

export default function () {
    return true;
}