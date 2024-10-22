document.addEventListener("DOMContentLoaded",()=> {
    const lenguaje = document.querySelector("nav button");
    console.log(lenguaje);
    const flech_leng = document.querySelector(".flecha-leng");
    let giros = 180;
    lenguaje.addEventListener("click",()=> {
        
        flech_leng.style.transform = "rotate("+giros+"deg)";
        if (giros == 180) {
            giros = 0;
        } else giros = 180;
        
    });
});