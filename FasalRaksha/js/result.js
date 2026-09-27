const resultImage = document.getElementById("result-image");
const cropName = document.getElementById("crop-name");

const savedImage = sessionStorage.getItem("scanImage");
const savedCrop = sessionStorage.getItem("scanCrop");


// Display selected image
if (savedImage) {
    resultImage.src = savedImage;
} else {
    resultImage.style.display = "none";
}


// Display selected crop
if (savedCrop) {
    cropName.textContent = savedCrop;
}