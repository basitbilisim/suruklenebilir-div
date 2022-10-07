const container = document.querySelector(".container")
const  header = document.querySelector(".header")


function onDrag({ movementX, movementY }) {
    let style = window.getComputedStyle(container)
    let left = parseInt(style.left)
    let top = parseInt(style.top)
    container.style.left = `${left + movementX}px`
    container.style.top = `${top + movementY}px`
}
header.addEventListener("mousedown", () => {
    header.classList.add("active");
    header.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () => {
    header.classList.remove("active");
    header.removeEventListener("mousemove", onDrag);
});

