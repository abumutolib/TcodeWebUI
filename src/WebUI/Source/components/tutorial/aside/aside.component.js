"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveTutorialLink = void 0;
class ActiveTutorialLink {
    constructor() {
        this.prevAnchor = document.createElement('a');
    }
    activeAnchorLink(anchor) {
        if (this.prevAnchor.classList.contains("active"))
            this.prevAnchor.classList.remove("active");
        anchor.classList.add("active");
        this.prevAnchor = anchor;
    }
}
exports.ActiveTutorialLink = ActiveTutorialLink;
