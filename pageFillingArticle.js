import {getTeddy} from './index.js'

//permet de connaitre le Teddybear sélectionné dans index.js
let GetURL = JSON.parse(sessionStorage.GetURLArticle);

//permet de remplir le conten de la page, avaec la valeur envoyé par index.js
getTeddy(GetURL)
.then(function (objectTeddy) {
    
    //Inserer l'image du Teddybear
    document.getElementById('articleImageTeddy').src = objectTeddy.imageUrl;
    document.getElementById('articleImageTeddy').alt = 'Un beau nounours!';

    //Inserer le nom du Teddybear
    document.getElementById('articleNameTeddy').innerHTML = objectTeddy.name;
    document.getElementById('articleNameTeddy').titel = objectTeddy._id;    //pas une bonne pratique. J'aurais du passer par l'id de cet élement.

    //Inserer la description du Teddybear
    document.getElementById('articleDescriptionTeddy').innerHTML = objectTeddy.description;

    //Inserer le prix du Teddybear
    document.getElementById('articlePriceTeddy').innerHTML = objectTeddy.price;

    //Inserer le menu déroulant du Teddybear
    for (let index = 0; index < objectTeddy.colors.length; index++) {
        const newOptionElem = document.createElement("option");
        newOptionElem.value = objectTeddy.colors[index];
        newOptionElem.innerHTML = objectTeddy.colors[index];
        
        document.getElementById('articleOptionsTeddy').appendChild(newOptionElem);
    }
})
.then(function () {
    //Ajoute un EventListener de type 'click' sur le boutton
    let elementBttArticle = document.getElementById('articleBttAddBasket');
    elementBttArticle.addEventListener('click', AddToBasket)
})
.catch(function (err) {
    console.log(err);
});

//Cette fonction permet lors d'un click, d'enregistrer les Teddy ajoutés au panier
const AddToBasket = function () {
    
    if (document.getElementById('articleOptionsTeddy').options[document.getElementById('articleOptionsTeddy').selectedIndex].value != "no_selection") {
        let Article = {
            name : document.getElementById('articleNameTeddy').innerHTML,
            id : document.getElementById('articleNameTeddy').titel,
            color : document.getElementById('articleOptionsTeddy').options[document.getElementById('articleOptionsTeddy').selectedIndex].value
        };
        console.log(Article);

    } else{
        console.log("Requête non sauvegardé, car aucune sélection n'a été faite.")
    }

    //il manque ici la mise en memoire de l'object dans un tableau... 

}

//Cette fonction me permet de stocker des objects dans la session Storage. Sous la forme d'un tableau. 
const AddToDataStorage = function (ObjectToStore, WhereToStore) {

    sessionStorage.setItem(WhereToStore, JSON.stringify(ObjectToStore));

}