document.addEventListener("DOMContentLoaded", ()=>{
    let zon = document.querySelector("#elegido");
    let id = window.location.href.split("?id=");
    let product = prod[id[1]-1];
    console.log(product)

    let str =`<div>
            <div>
                <img src="${product.img}" alt="">
            </div>
            <div>
                <h2>
                ${product.nombre}
                </h2>
                <p>
                    ${product.precio} €
                </p>
                <p>
                &#11088;&#11088;&#11088;&#11088; 4.8 <br> 14 valoraciones | 62 vendidios
                </p>
                <p>
                    ${product.descrip}
                </p>
                <button>Comprar</button>
            </div>
        </div>`;
        zon.innerHTML = str;

    const recom = document.querySelector("#zona-rec");
    let productosR = prod.filter((prd) => prd.tipo == product["tipo"] && prd.id != product["id"]);
    productosR.forEach((prod, con) => {
        if (con <4) {
            recom.innerHTML += `
            <a href="./producto.html?id=${prod.id}" class="recomProd">
                <img src="${prod.img}" alt="">
            </a>
        `;
        }
    });
});