const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton =>{
    boton.addEventListener("click",() => {
        const botonSelect = boton.textContent;
        
        if(boton.id === "C"){
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "Borrar"){
            if (pantalla.textContent.length === 1 || pantalla.textContent === "!ERROR!"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
            return;
        }

        if(boton.id === "Igual"){
            try{
            pantalla.textContent = eval(pantalla.textContent);
            } catch{
            pantalla.textContent ="!ERROR!";
            }
            return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "!ERROR!"){
            pantalla.textContent = botonSelect;
        }else{
            pantalla.textContent += botonSelect;
        }
    })
})