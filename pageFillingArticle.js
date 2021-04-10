import {getTeddy} from './index.js'

let GetURL = JSON.parse(sessionStorage.GetURLArticle);
sessionStorage.clear();
console.log("The URL value is :" + GetURL);

getTeddy(GetURL)
.then(function (objectTeddy) {
    console.log(objectTeddy);
});
