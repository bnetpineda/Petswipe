let buttonHeart = document.getElementById("buttonHeart");
let buttonRemove = document.getElementById("buttonRemove");
let buttonBack = document.getElementById("buttonBack");
let buttonList = document.getElementById("buttonList");
let loginRegister = document.getElementById("loginRegister");

let petList = [
  {
    name: "Mark",
    age: "10",
    breed: "Askal",
    url: "pics/1.jpg",
  },
  {
    name: "Mark",
    age: "10",
    breed: "Askal",
    url: "pics/2.jpg",
  },
  {
    name: "Mark",
    age: "10",
    breed: "Askal",
    url: "pics/3.jpg",
  },
  {
    name: "Mark",
    age: "10",
    breed: "Askal",
    url: "pics/4.jpg",
  },
  {
    name: "Mark",
    age: "10",
    breed: "Askal",
    url: "pics/5.jpg",
  },
  {
    name: "Mark",
    age: "10",
    breed: "Askal",
    url: "pics/6.jpg",
  },
  {
    name: "Mark",
    age: "10",
    breed: "Askal",
    url: "pics/7.jpg",
  },
  {
    name: "Mark",
    age: "10",
    breed: "Askal",
    url: "pics/8.jpg",
  },
  {
    name: "Mark",
    age: "10",
    breed: "Askal",
    url: "pics/9.jpg",
  },
  {
    name: "Mark",
    age: "10",
    breed: "Askal",
    url: "pics/10.jpg",
  },
];
let countPet = 0;
let userLikes = [];
let currentImage = document.getElementById("currentImg");
let imgUrl = currentImage.src;
let petListLength = petList.length - 1;
let pet = {
  name: document.getElementById("item-details-name").textContent,
  age: document.getElementById("item-details-age").textContent,
  breed: document.getElementById("item-details-breed").textContent,
  url: imgUrl,
};
buttonLike.addEventListener("click", function () {
  petListLength = petList.length - 1;
  pet.url = petList[countPet].url;
  userLikes.push(pet);
  localStorage.setItem("userLikes", JSON.stringify(userLikes));
  if (countPet < petListLength) {
    petList.splice(countPet, 1);
  } else {
    alert("There is no pet avaiable. Please Try again next Time.");
  }
  movePicture(countPet);
});
buttonDislike.addEventListener("click", function () {
  petList.splice(countPet, 1);
  petListLength = petList.length - 1;
  if (countPet > petListLength) {
    alert("There is no pet avaiable. Please Try again next Time.");
  } else {
    movePicture(countPet);
  }
});
buttonList.addEventListener("click", function () {
  window.open("list/list.html");
});
function movePicture(countPet) {
  pet = {
    name: document.getElementById("item-details-name").textContent,
    age: document.getElementById("item-details-age").textContent,
    breed: document.getElementById("item-details-breed").textContent,
    url: imgUrl,
  };
  document.getElementById("item-details-name").textContent =
    petList[countPet]["name"];
  document.getElementById("item-details-age").textContent =
    petList[countPet]["age"];
  document.getElementById("item-details-breed").textContent =
    petList[countPet]["breed"];
  if (countPet < petListLength) {
    currentImage.classList.add("scroll-animation");
    setTimeout(function () {
      currentImage.classList.remove("scroll-animation");
      currentImage.src = petList[countPet].url;
    }, 900);
  }
}

let likes = JSON.parse(localStorage.getItem("userLikes"));
console.log(likes);

function windowLoaded() {
  let petListContainer = document.getElementsByClassName("pet-list");
  for (let x = 0; x < userLikes.length; x++) {
    var newElement = document.createElement("figure");
    petListContainer.appendChild(newElement);
  }
}
window.addEventListener("load", windowLoaded());
