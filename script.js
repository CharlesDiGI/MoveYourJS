// Fonctionnalité 1
let myFoot = document.getElementsByTagName("footer");
let countFootClick = 0
let onFootClick = function () {
    countFootClick++;
    console.log("clic numéro " + countFootClick);
};

myFoot[0].addEventListener("click", onFootClick);

// Fonctionnalité 2
let navHeader = document.getElementsByTagName("header")[0];
let onNavHeaderClick = function () {
    navHeader.getElementsByTagName("div")[0].classList.toggle("collapse");
    console.log(navHeader.classList);
};
navHeader.addEventListener("click", onNavHeaderClick);


// Fonctionnalité 3
{
    let myCardEdit = document.querySelectorAll("div.col-md-4")[0].getElementsByTagName("button")[1];
    let myCardText = document.querySelectorAll("div.col-md-4")[0].getElementsByTagName("p")[0];
    let onMyCardEdit = function () {
        myCardText.style.color = "red";
    };
    myCardEdit.addEventListener("click", onMyCardEdit);
}

// Fonctionnalité 4
{
    let myCardEdit = document.querySelectorAll("div.col-md-4")[1].getElementsByTagName("button")[1];
    let myCardText = document.querySelectorAll("div.col-md-4")[1].getElementsByTagName("p")[0];
    let onMyCardEdit = function () {
        if (myCardText.style.color === "") {
            myCardText.style.color = "green";
        }
        else {
            myCardText.style.color = "";
        }
    };
    myCardEdit.addEventListener("click", onMyCardEdit);
}

// Fonctionnaité 5
let myNavBar = document.getElementsByTagName("header")[0];
let myLink = document.getElementsByTagName("link")[0];
let onNavClik = function () {
    // myLink.disabled = true;
    if (myLink.disabled == true) {
        myLink.disabled = false;
    }
    else {
        myLink.disabled = true;

    }
};
myNavBar.addEventListener("dblclick", onNavClik);

// Fonctionnalité 6
{
    let myCardEdit = document.querySelectorAll("div.col-md-4")[0].getElementsByTagName("button")[0];
    let myCard = document.querySelectorAll("div.col-md-4")[0]
    // console.log(myCard.getElementsByClassName("card-text")[0].style);

    let onMouseOver = function () {
        if (myCard.getElementsByClassName("card-text")[0].style.display === "none") {
            myCard.getElementsByClassName("card-text")[0].style.display = "block";
            myCard.getElementsByClassName("card-img-top")[0].style.width = "100%";
        }
        else {
            myCard.getElementsByClassName("card-text")[0].style.display = "none";
            myCard.getElementsByClassName("card-img-top")[0].style.width = "20%";
        }
    }
    myCardEdit.addEventListener("mouseover", onMouseOver)
};

// Fonctionnaité 7
{
    let myCardToMove = document.getElementsByClassName("col-md-4");
    let myCardHolder = document.getElementsByClassName("row")[1];
    let rightArrow = document.getElementsByClassName("btn btn-secondary my-2")[0];

    let onArrowClick = function () {
        myCardHolder.insertBefore(myCardToMove[myCardToMove.length - 1], myCardToMove[0]);
    };
    rightArrow.addEventListener("click", onArrowClick);
};


// Fonctionnaité 8
{
    let myCardToMove = document.getElementsByClassName("col-md-4");
    let myCardHolder = document.getElementsByClassName("row")[1];
    let leftArrow = document.getElementsByClassName("btn btn-primary my-2")[0];

    let onArrowClick = function (e) {
        e.preventDefault();
        myCardHolder.insertBefore(myCardToMove[0], myCardToMove[myCardToMove.length]);
    };
    leftArrow.addEventListener("click", onArrowClick);
};