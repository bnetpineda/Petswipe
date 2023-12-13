let likes = JSON.parse(localStorage.getItem("userLikes")) || [];

console.log("Likes:", likes);

let backList = document.getElementById("backList");
backList.addEventListener("click", function () {
  window.location.href = "../index.html";
});

for (let x = 0; x <= 10; x++) {
  const figureElement = document.getElementById("figure" + (x + 1));
  if (figureElement) {
    figureElement.style.display = "none";
  }
}

for (let x = 0; x < likes.length; x++) {
  const figureElement = document.getElementById("figure" + (x + 1));
  const pictureElement = document.getElementById("picture" + (x + 1));
  const captionElement = document.getElementById("caption" + (x + 1));

  if (figureElement && pictureElement && captionElement) {
    figureElement.style.display = "grid";
    pictureElement.src = "../"+ likes[x].url;
    captionElement.innerHTML =
      likes[x].name + "<br>" + likes[x].age + "<br>" + likes[x].breed;
  }
}
for (let x = 0; x <= likes.length; x++) {
  const figureElement = document.getElementById("figure" + (x + 1));
  if (figureElement) {
    figureElement.addEventListener("click", function () {
      let petName = document.getElementById("");
      if (confirm("Are you sure you want to adopt this pet?") == true) {
        localStorage.setItem("adopting", x);
        window.location.href = "../form/form.html";
      } else {
        alert("You canceled!");
      }
    });
  }
}
