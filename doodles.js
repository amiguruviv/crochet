const spacing = 300;
const wrapper = document.querySelector(".page-wrapper");
const height = Math.max(wrapper.offsetHeight, window.innerHeight * 0.8);
const total = Math.ceil(height / spacing);

for (let i = 0; i < total; i++) {
    const left = document.createElement("img");
    left.src = "images/lilypad.png";
    left.className = "doodle";
    left.style.top = (i * spacing) + "px";
    left.style.left = i % 2 === 0 ? "-40px" : "-130px";
    wrapper.appendChild(left);

    const right = document.createElement("img");
    right.src = "images/lilypad.png";
    right.className = "doodle";
    right.style.top = (i * spacing) + "px";
    right.style.left = i % 2 === 0 ? "calc(100% - 80px)" : "calc(100% + 15px)";
    wrapper.appendChild(right);
}