let dogsObj = {
  0: "Corgie",
  1: "Pitbull",
  2: "Husky",
  3: "Golden Retriever",
  4: "Beagle",
  5: "Bulldog",
  6: "German Shepherd",
  7: "Poodle",
  8: "Rottweiler",
  9: "Pug",
  10: "Chihuahua",
};
let numDogs = Object.keys(dogsObj).length - 1;
let randomNum = Math.round(Math.random() * numDogs);
let randomDog = dogsObj[randomNum];
let image;
switch (randomDog) {
  case "Corgie":
    image = "../images/Corgie.jpg";
    break;
  case "Pitbull":
    image = "../images/pitbull.jpg";
    break;
  case "Husky":
    image = "../images/husky_puppy.jpg";
    break;
  case "Golden Retriever":
    image = "../images/golden_retriever.jpg";
    break;
  case "Beagle":
    image = "../images/beagle.jpg";
    break;
  case "Bulldog":
    image = "../images/bulldog.jpg";
    break;
  case "German Shepherd":
    image = "../images/German_Shepherd.jpg";
    break;
  case "Poodle":
    image = "../images/poodle.jpeg";
    break;
  case "Rottweiler":
    image = "../images/rottweiler.jpg";
    break;
  case "Pug":
    image = "../images/pug.jpg";
    break;
  case "Chihuahua":
    image = "../images/chihuahua.jpg";
    break;
}

$(document).ready(function () {
  $("#quizResults").append(`<h1 id="randomDog">${randomDog}!</h1>`);
  $("#quizResults").append(`<img id="dogImage" src="${image}">`);
});
