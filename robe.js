let str ="";
document.addEventListener("DOMContentLoaded",()=>{
    const zona = document.querySelector("#zona-prod");
    prod.forEach(producto => {
        str += `<div class="prod">
                    <div>
                        <img src="${producto.img}" alt="">
                    </div>
                    <div>
                        <p>${producto.nombre}</p>
                        <p>${producto.precio}€</p>
                    </div>
                </div>`;
    });
    zona.innerHTML = str;
});