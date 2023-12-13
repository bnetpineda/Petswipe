let likes = JSON.parse(localStorage.getItem("userLikes")) || [];
let adopting = localStorage.getItem("adopting");
let submit = document.getElementById("submit");

function hasValue(inputElement) {
  return inputElement.value.trim() !== "";
}

submit.addEventListener("click", function () {
  let nameHasValue = hasValue(document.getElementById("name"));
  let emailHasValue = hasValue(document.getElementById("email"));
  let petNameHasValue = hasValue(document.getElementById("petName"));

  if (nameHasValue && emailHasValue && petNameHasValue) {
    alert("We will let you know in your email address.");
    window.location.href = "../index.html";
  } else {
    alert("Please complete the form");
  }
});

let adoptName = likes[adopting].name;
let adoptAge = likes[adopting].age;
let adoptUrl = likes[adopting].url;

console.log(adoptAge);
document.getElementById("petPicture").style.backgroundImage =
  'url("../' + adoptUrl + '")';
document.getElementById("petName").value = adoptName;
document.getElementById("age").value = adoptAge;

let currentDate = new Date();

// Format the date as desired
let formattedDate = currentDate.toDateString();

document.getElementById("date").value = formattedDate;
