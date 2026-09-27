const cameraButton = document.getElementById("camera-button");
const galleryButton = document.getElementById("gallery-button");
const continueButton = document.getElementById("continue-button");
const cropType = document.getElementById("crop-type");
const imageArea = document.querySelector(".image-area");

// Hidden file input for camera
const cameraInput = document.createElement("input");
cameraInput.type = "file";
cameraInput.accept = "image/*";
cameraInput.capture = "environment";
cameraInput.style.display = "none";

// Hidden file input for gallery
const galleryInput = document.createElement("input");
galleryInput.type = "file";
galleryInput.accept = "image/*";
galleryInput.style.display = "none";

document.body.appendChild(cameraInput);
document.body.appendChild(galleryInput);


// TAKE PHOTO
cameraButton.addEventListener("click", () => {
    cameraInput.click();
});


// CHOOSE FROM GALLERY
galleryButton.addEventListener("click", () => {
    galleryInput.click();
});


// HANDLE IMAGE SELECTION
function handleImage(file) {

    if (!file) {
        return;
    }

    // Make sure the selected file is an image
    if (!file.type.startsWith("image/")) {
        alert("Please select an image.");
        return;
    }

    const imageURL = URL.createObjectURL(file);

    imageArea.innerHTML = `
        <img src="${imageURL}" 
             alt="Selected crop"
             class="crop-preview">

        <h3>Crop image selected</h3>

        <p>
            Make sure the affected part of the plant is clearly visible.
        </p>
    `;
}


// Camera image selected
cameraInput.addEventListener("change", () => {
    handleImage(cameraInput.files[0]);
});


// Gallery image selected
galleryInput.addEventListener("change", () => {
    handleImage(galleryInput.files[0]);
});


// CONTINUE BUTTON
continueButton.addEventListener("click", () => {

    if (!cameraInput.files[0] && !galleryInput.files[0]) {
        alert("Please take a photo or choose an image first.");
        return;
    }

    if (cropType.value === "") {
        alert("Please select your crop.");
        return;
    }

    alert("Ready for crop analysis!");
});