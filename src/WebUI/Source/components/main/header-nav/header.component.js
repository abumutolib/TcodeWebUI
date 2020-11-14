"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toggle = document.getElementById("toggleCheckbox");
const anchors = document.querySelectorAll(".dropdown-link");
if (anchors)
    anchors.forEach(anchor => {
        anchor.addEventListener('click', () => {
            anchor.parentElement.classList.toggle('active');
        });
    });
if (toggle)
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("checked");
    });
function default_1() {
    return true;
}
exports.default = default_1;
