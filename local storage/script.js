var block = document.querySelector("#block");
var unblock = document.querySelector("#unblock");

block.addEventListener("click", () => {
    localStorage.setItem("block", "true");
    show();
});

unblock.addEventListener("click", () => {
    localStorage.setItem("block", "false");
    show();
});

var show = () => {
    if (localStorage.getItem("block") === "false") {
        document.querySelector("#status span").textContent = "Not blocked";
    } else {
        document.querySelector("#status span").textContent = "Blocked";
    }
};

show();
