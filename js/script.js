const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

//Fetch the API data
const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100.");
    const images = await res.json();
    console.log(images);
    selectRandomImage(images);
};
getImage();

//Randomly Select the Index of an Image
const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length)
    // randomIndex();
    const randomImage = images[randomIndex];
   // console.log(randomImage);
};