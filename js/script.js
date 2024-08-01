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
    const randomImage = images[randomIndex]; // use randomIndex to grab a single image from your images array.
    // console.log(randomImage);
};

//display the image
const displayImage = function (randomImage) {
    const author = randomImage.author; //access the author property from the randomImage object. 
    const imageAddress = randomImage.download_url;//access the download_url property from the randomImage object. 
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");   
};

//add a click event and commit changes