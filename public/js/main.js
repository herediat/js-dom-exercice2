//exo 1
let myInput = document.querySelector("input")
myInput.addEventListener("focus", () => {
    myInput.style.backgroundColor = "blue"
})

//exo 2
let myInput2 = document.querySelectorAll("input")[1]
myInput2.addEventListener("focus", () => {
    myInput2.style.backgroundColor = "blue"
})

myInput2.addEventListener("focusout", () => {
    myInput2.style.backgroundColor = "red"
})

//exo 3
let premierP = document.getElementsByClassName("premierParagraphe")[0]
let deuxiemeP = document.getElementsByClassName("secondParagraphe")[0]
let troixiemeP = document.getElementsByClassName("dernierParagraphe")[0]
let myBtn = document.getElementsByClassName("buttonExo")[0]

myBtn.addEventListener("click", () => {
    premierP.textContent = deuxiemeP.textContent
    troixiemeP.textContent = deuxiemeP.textContent
})

//exo 4
let monInput = document.querySelectorAll("input")[2]
let btnExo4 = document.getElementsByClassName("buttonExo")[1]
let nomExo4 = document.getElementById("exo4")

btnExo4.addEventListener("click", () => {
    nomExo4.innerText = monInput.value
})


//exo 5 


//###############################################################################

// Exo 1
let myInputExo1 = document.querySelector("input");
myInputExo1.addEventListener("focus", () => {
    myInputExo1.style.backgroundColor = "blue";
});

// Exo 2
let myInputExo2 = document.getElementsByTagName("input")[1];
myInputExo2.addEventListener("focus", () => {
    myInputExo2.style.backgroundColor = "blue";
});

myInputExo2.addEventListener("focusout", () => {
    myInputExo2.style = "white";
});

// Exo 3
let recupP1 = document.getElementsByClassName("premierParagraphe")[0];
let recupP2 = document.getElementsByClassName("secondParagraphe")[0];
let recupP3 = document.getElementsByClassName("dernierParagraphe")[0];
let recupButton = document.getElementsByClassName("buttonExo")[0];

recupButton.addEventListener("click", () => {
    recupP1.textContent = recupP2.textContent;
    recupP3.textContent = recupP2.textContent;
});

// Exo 4

let myInputExo4 = document.querySelectorAll("input")[2];
let recupButtonExo4 = document.getElementsByClassName("buttonExo")[1];
let nameExo4 = document.querySelector("#exo4");

recupButtonExo4.addEventListener("click", () => {
    nameExo4.innerText = myInputExo4.value;
});

// Exo 5
let btn3 = document.getElementsByClassName("btn")[2];
let img1 = document.getElementsByClassName("img-responsive")[0];
let exo5P = document.getElementsByTagName("p")[4].innerText;
// console.log(exo5P);

btn3.addEventListener("click", () => {
    // Récupère l'index du point dans la chaine de caractère "Chemin : ./src/image/tartine.png" et stock cet index dans la variable indexPoint
    let indexPoint = exo5P.indexOf(".");
    console.log(indexPoint);
    // On ce sert de la methode slice sur la chaine de caractère "Chemin : ./src/image/tartine.png" pour ne garder que le texte a partir de l'index contenu dans la variable indexPoint
    let cheminExo5P = exo5P.substring(indexPoint);
    console.log(cheminExo5P);
    img1.src = cheminExo5P;
});

//6
let imgSecond = document.querySelectorAll("img")[1];
let imgthird = document.querySelectorAll("img")[2];
// let stock;

// imgSecond.addEventListener("click", () => {
//     stock = imgSecond.attributes[1].value;
// });

// imgthird.addEventListener("click", () => {
//     imgthird.attributes[1].value = stock;
// });

//méthode
imgSecond.addEventListener('click', ()=>{
    let srcImage =  imgSecond.getAttribute('src')
    imgthird.addEventListener('click', ()=>{
        imgthird.src = srcImage
    })
})

// Exo 7
let exo7Button = document.querySelectorAll("button.btn")[3];
let exo7P1 = exo7Button.previousElementSibling;
let exo7P2 = exo7Button.nextElementSibling;
let exo7Temp;

// let interChange = () => {
//     exo7Temp = exo7P1.innerText;
//     exo7P1.innerText = exo7P2.innerText;
//     exo7P2.innerText = exo7Temp;
// };

exo7Button.addEventListener("click", () => {
    exo7Temp = exo7P1.innerText;
    exo7P1.innerText = exo7P2.innerText;
    exo7P2.innerText = exo7Temp;
});