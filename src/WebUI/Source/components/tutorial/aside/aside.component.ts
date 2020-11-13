export class ActiveTutorialLink {

    private prevAnchor: HTMLAnchorElement;

    constructor() {
        this.prevAnchor = document.createElement('a') as HTMLAnchorElement;
    }
    
    public activeAnchorLink(anchor: HTMLAnchorElement): void {
        if (this.prevAnchor.classList.contains("active"))
            this.prevAnchor.classList.remove("active");
        anchor.classList.add("active");
        this.prevAnchor = anchor;
    }
}