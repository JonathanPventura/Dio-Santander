class Titulo extends HTMLElement {

    constructor(){
        super();

       var titulos = ["Jonathan","Mayara","Teste"]
        const shadow = this.attachShadow({mode: "open"});

        const h1 = document.createElement("h1");
        h1.textContent = this.getAttribute("titulo");


        shadow.appendChild(h1)
    }



}

customElements.define("titulo-dinamico",Titulo);