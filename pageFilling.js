
class purchasableObject {
    constructor(ObjectID, name, price, description, imageURL, productType){
        this.ObjectID = ObjectID;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageURL = imageURL;
        this.productType = productType;
        this.personnalisation = personnalisation;
    }
}

class contactDetails {
    constructor(firstName, lastName, address, city, mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.mail = mail;
    }
}

//fonction GetAllTeddy : nous permet de recevoir un Array avec l'ensemble des ours
const getAllTeddy = async function () {
    try{
        let responseAllTeddy = await fetch('http://localhost:3000/api/teddies/')
        if(responseAllTeddy.ok){
            let data = await responseAllTeddy.json()
            console.log(data)
            return data;
        } else{
            console.error('Error code from server : ${error}');
        }
    } catch (e) {
        console.log(e);
    }
}

//fonction est appellée et nous construisons la page d'acceuil. 
getAllTeddy()
.then(function (objectTeddy) {
    let anchorMainContent = document.getElementById('mainMain');
    for (let index = 0; index < objectTeddy.length; index++) {
        //Ci-dessous l'article est crée et lié à la balise ''main''
        const newArticleElem = document.createElement("article");
        newArticleElem.classList.add("mainCard");
        newArticleElem.id = objectTeddy[index]._id;
        anchorMainContent.appendChild(newArticleElem);

        //Ci-dessous le chemin DOM vers l'element qui vient d'être creer
        let anchorNewContent = document.getElementById(objectTeddy[index]._id);

        //Ci-dessous l'image est crée et lié à l'article crée
        const newImageElem = document.createElement("img");
        newImageElem.classList.add("mainCard__img");
        newImageElem.src = objectTeddy[index].imageUrl;
        newImageElem.alt = 'Un beau nounours!';
        anchorNewContent.appendChild(newImageElem);

        //Ci-dessous div class="mainCard__txtdiv" est crée et lié à l'article crée
        const newDivElem = document.createElement("div");
        newDivElem.classList.add("mainCard__txtdiv");
        anchorNewContent.appendChild(newDivElem);

        //Ci-dessous je crée une ancre pour savoir ou placer le contenu h2 et p à l'interieur de la carte
        let anchorArrayNewTextContainer = document.getElementsByClassName("mainCard__txtdiv");
        let anchorNewTextContainer = anchorArrayNewTextContainer[index];

            //Ci-dessous le h2 est crée et lié à la div qui vient d'être crée
            const newH2Elem = document.createElement("h2");
            newH2Elem.classList.add("mainCard__txtdiv__h2");
            newH2Elem.innerHTML = objectTeddy[index].name;
            anchorNewTextContainer.appendChild(newH2Elem);

            //Ci-dessous le p est crée et lié à la div qui vient d'être crée
            const newPElem = document.createElement("p");
            newPElem.classList.add("mainCard__txtdiv__p");
            newPElem.innerHTML = objectTeddy[index].description;
            anchorNewTextContainer.appendChild(newPElem);
            //objectTeddy[index].description

        //Ci-dessous button est crée et lié à l'article crée
        const newBttElem = document.createElement("button");
        newBttElem.classList.add("btn");
        newBttElem.classList.add("btn--blue");
        newBttElem.classList.add("mainCard__btt");
        newBttElem.innerHTML = "Ajouter au panier";
        anchorNewContent.appendChild(newBttElem);
    }
})
.then(function(){
    //Fonction pour extraire le numéro d'ID du bouton sélectionné
    //Est ici, car je sais que l'ensemble des boutons est crée. 
    let buttons = document.getElementsByClassName("btn");
    console.log(buttons);
    for (let index = 0; index < buttons.length; index++) {
        let element = buttons[index];
        element.addEventListener('click', getTeddyByID)
    }
});

//Fonction pour construire une URL à partir d'un parametre
const addParameterToURL = async function (teddyID) {
    let newURL = 'http://localhost:3000/api/teddies/:' + teddyID;
    console.log(newURL);
    return newURL;
}

const getTeddyByID = async function (event){
    let teddyID = this.parentNode.id;
    console.log(teddyID);
     
    let GetURL = addParameterToURL(teddyID);
    console.log(GetURL);

    // Ici il manque le GET pour avoir la requête.

}
