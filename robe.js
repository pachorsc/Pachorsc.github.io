let str ="";
document.addEventListener("DOMContentLoaded",()=>{
    const zona = document.querySelector("#zona-prod");
    prod.forEach((producto, lugar) => {
        str += `<a href="./producto.html?id=${lugar+1}" class="prod">
                        <div>
                            <img src="${producto.img}" alt="">
                        </div>
                        <div>
                            <p>${producto.nombre}</p>
                            <p>${producto.precio}€</p>
                        </div>
                </a>`                ;
    });
    zona.innerHTML = str;
});