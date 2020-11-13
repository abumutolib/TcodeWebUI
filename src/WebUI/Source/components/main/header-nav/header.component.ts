const toggle = document.getElementById("toggleCheckbox") as HTMLButtonElement;
const anchors = document.querySelectorAll(".dropdown-link") as NodeListOf<HTMLAnchorElement>;

if(anchors)
    anchors.forEach(anchor => {
        anchor.addEventListener('click', () => {
            anchor!.parentElement!.classList.toggle('active');
        });
    });

if (toggle)
    toggle.addEventListener("click", () => {
        toggle!.classList!.toggle("checked");
    });

export default function () {
    return true;
}
