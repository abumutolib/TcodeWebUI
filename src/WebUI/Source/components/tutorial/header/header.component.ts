let isButton = false;

window.onload = () => {
    window.onscroll = () => {
        const nav = document.getElementById("main-nav") as HTMLElement;
        const scroll = document.getElementById("side-bar") as HTMLElement;
        let sticky = nav.offsetTop ?? 0;
        if (window.pageXOffset > sticky) {
            scroll.classList.add("sticky");
        } else {
            scroll.classList.remove("sticky");
        }
    }

    activeAnchorLink();
}

function mobileMenu() {
    let sidebar = document.getElementById("side-bar") as HTMLElement;
    if (!isButton) {
        sidebar.classList.add("active");
        isButton = true;
    } else {
        sidebar.classList.remove("active");
        isButton = false;
    }
}

document.getElementById("mobile-toggle-open")!.addEventListener("click", e => {
    e.preventDefault();
    mobileMenu();
});

document.getElementById("menu-toggle-close")!.addEventListener("click", e => {
    e.preventDefault();
    mobileMenu();
});

let isActiveSearch = false;
function searchBox() {
    const searchForm = document.getElementById("search-form") as HTMLElement;
    const searchBox = document.getElementById("search-input") as HTMLInputElement;
    const searchButton = document.getElementById("search-button") as HTMLInputElement;
    const searchButtonSubmit = document.getElementById("search-button-submit") as HTMLInputElement;
    if (!isActiveSearch) {
        searchForm.classList.add("active");
        searchBox.focus();
        isActiveSearch = true;
        searchButton.style.display = "none";
        searchButtonSubmit.style.display = "block";
    } else {
        searchForm?.classList.remove("active");
        isActiveSearch = false;
        searchButton.style.display = "block";
        searchButtonSubmit.style.display = "none";
    }
}

document.getElementById("search-button")!.addEventListener("click", e => {
    e.preventDefault();
    searchBox();
});

document.getElementById("search-input")!.addEventListener("blur", e => {
    e.preventDefault();
    let relatedTarget = <HTMLInputElement>e.relatedTarget;
    if (relatedTarget && relatedTarget.type === "submit")
        return;
    searchBox();
});

function activeAnchorLink() {
    let mainsection = document.getElementById("tutorial-aside-list") as HTMLUListElement;
    let anchors = mainsection.getElementsByTagName("a");

    let current = window.location.pathname.concat(window.location.search);
    for (let i = 0; i < anchors.length; i++) {
        let anchor = anchors[i].pathname.concat(anchors[i].search);
        if (!window.location.search.includes("&")) {
            anchors[0]!.classList.add("active");        }
        if (anchor === current)
            anchors[i]!.classList.add("active");
    }
}

export default function () {
    return true;
}