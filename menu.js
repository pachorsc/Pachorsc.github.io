document.addEventListener("DOMContentLoaded", ()=>{
    const menuDesp = document.querySelector("header");
    const botMen = document.querySelector(".mensec > button");

    botMen.addEventListener("click",(evt)=>{
        if (evt.target.style.color == "white") {
            menuDesp.style.top = "-100%";
            document.body.style.overflow = "";
            evt.target.style.color = "black";
        } else {
            menuDesp.style.top = "0%";
            document.body.style.overflow = "hidden";
            evt.target.style.color = "white";
        }
    });
});