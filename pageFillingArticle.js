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
    //EventListener 'click' sur le boutton
    let elementBttArticle = document.getElementById('articleBttAddBasket');
    elementBttArticle.addEventListener('click', AddToBasket)
})
.catch(function (err) {
    console.log(err);
});


const AddToBasket = function () {
    let Article = {
        name : document.getElementById('articleNameTeddy').innerHTML,
        color : document.getElementById('articleOptionsTeddy').options[document.getElementById('articleOptionsTeddy').selectedIndex].value
    };
    console.log(Article);
    console.log("test");

    //il manque ici la mise en memoire de l'object dans un tableau... 
}
