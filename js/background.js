const images = [
    "seoul.jpg",
    "busan.jpg",
    "daegu.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;

document.body.style.backgroundSize = "cover";

document.body.style.backgroundRepeat = "no-repeat";

document.body.style.backgroundPosition = "center";