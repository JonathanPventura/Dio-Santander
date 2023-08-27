class CardNews extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())

    }

    build() {

        const componentRoot = document.createElement("div")
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span")
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const tituloNews = document.createElement("h1")
        tituloNews.textContent = this.getAttribute("title");

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("content");


        cardLeft.appendChild(autor)
        cardLeft.appendChild(tituloNews)
        cardLeft.appendChild(newsContent)


        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card__right");
        const newsImagem = document.createElement("img")
        newsImagem.src = (this.getAttribute("photo") || " ");
        cardRight.appendChild(newsImagem)


        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)


        return componentRoot
    }

    style() {
        const componentRoot = document.createElement("style")
        componentRoot.textContent = `
        


        .card{
            display: flex;
            width: 70%;
            box-shadow: 9px 14px 30px -7px rgba(0,0,0,0.62);
            flex-direction: row;
            justify-content: space-around;
            margin: 20px 0 20px 0;
        }
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > span {
            font-weight: bold;
            color: gray;
        }
        
        .card__left > h1 {
            margin-top: 15px;
            font-size: 25px;
            
        }
        
        .card__left > p {
            color: rgb(70, 70, 70);
        }
        
        
        .card__right img{
            width: 225px;
            height: 125px;
        }
        
        `
        return componentRoot
    }

}

customElements.define("card-news", CardNews);