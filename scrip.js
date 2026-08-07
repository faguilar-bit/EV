// ============================
// ECOVIBE - SCRIPT PRINCIPAL
// ============================

// Mensaje de bienvenida
window.addEventListener("load", () => {
    console.log("EcoVibe cargado correctamente.");
});

// ============================
// MENÚ AL HACER SCROLL
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "#111";
        header.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";

    } else {

        header.style.background = "rgba(17,17,17,.95)";
        header.style.boxShadow = "none";

    }

});

// ============================
// BOTÓN VOLVER ARRIBA
// ============================

const btnTop = document.createElement("button");

btnTop.innerHTML = "↑";

btnTop.id = "btnTop";

document.body.appendChild(btnTop);

btnTop.style.cssText = `
position:fixed;
bottom:110px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#2ECC71;
color:white;
font-size:24px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 8px 15px rgba(0,0,0,.3);
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        btnTop.style.display="block";

    }else{

        btnTop.style.display="none";

    }

});

btnTop.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ============================
// FORMULARIO
// ============================

const formulario=document.querySelector("form");

formulario.addEventListener("submit",(e)=>{

    e.preventDefault();

    const nombre=formulario.querySelector("input[type='text']").value.trim();

    const correo=formulario.querySelector("input[type='email']").value.trim();

    if(nombre==="" || correo===""){

        alert("Complete los campos obligatorios.");

        return;

    }

    alert("¡Gracias por comunicarte con EcoVibe! 🌿");

    formulario.reset();

});

// ============================
// EFECTO TARJETAS
// ============================

const cards=document.querySelectorAll(".producto");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});

// ============================
// LIGHTBOX GALERÍA
// ============================

const imagenes=document.querySelectorAll(".galeria img");

imagenes.forEach(img=>{

    img.addEventListener("click",()=>{

        const fondo=document.createElement("div");

        fondo.style.cssText=`
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.85);
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:10000;
        cursor:pointer;
        `;

        const imagen=document.createElement("img");

        imagen.src=img.src;

        imagen.style.maxWidth="90%";
        imagen.style.maxHeight="90%";
        imagen.style.borderRadius="15px";

        fondo.appendChild(imagen);

        document.body.appendChild(fondo);

        fondo.addEventListener("click",()=>{

            fondo.remove();

        });

    });

});

// ============================
// BOTÓN WHATSAPP
// ============================

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/5490000000000";

whatsapp.target="_blank";

whatsapp.className="whatsapp";

whatsapp.innerHTML='<i class="fab fa-whatsapp"></i>';

document.body.appendChild(whatsapp);

// ============================
// ANIMACIÓN AL HACER SCROLL
// ============================

const elementos=document.querySelectorAll("section");

const mostrar=()=>{

elementos.forEach(sec=>{

const posicion=sec.getBoundingClientRect().top;

const pantalla=window.innerHeight;

if(posicion<pantalla-100){

sec.style.opacity="1";

sec.style.transform="translateY(0)";

}

});

};

elementos.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(60px)";

sec.style.transition=".8s";

});

window.addEventListener("scroll",mostrar);

mostrar();

// ============================
// FIN DEL SCRIPT
// ============================