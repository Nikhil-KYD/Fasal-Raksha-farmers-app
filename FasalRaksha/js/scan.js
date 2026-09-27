const cameraButton = document.getElementById("camera-button");
const galleryButton = document.getElementById("gallery-button");
const continueButton = document.getElementById("continue-button");

const cropType = document.getElementById("crop-type");
const imageArea = document.querySelector(".image-area");


// Hidden camera input
const cameraInput = document.createElement("input");

cameraInput.type = "file";
cameraInput.accept = "image/*";
cameraInput.capture = "environment";
cameraInput.style.display = "none";


// Hidden gallery input
const galleryInput = document.createElement("input");

galleryInput.type = "file";
galleryInput.accept = "image/*";
galleryInput.style.display = "none";


document.body.appendChild(cameraInput);
document.body.appendChild(galleryInput);


// Store selected file
let selectedFile = null;


// TAKE PHOTO

cameraButton.addEventListener("click", () => {
    cameraInput.click();
});


// GALLERY

galleryButton.addEventListener("click", () => {
    galleryInput.click();
});


// HANDLE IMAGE

function handleImage(file) {

    if (!file) {
        return;
    }

    if (!file.type.startsWith("image/")) {
        alert("Please select an image.");
        return;
    }

    selectedFile = file;

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


// CAMERA IMAGE

cameraInput.addEventListener("change", () => {

    handleImage(cameraInput.files[0]);

});


// GALLERY IMAGE

galleryInput.addEventListener("change", () => {

    handleImage(galleryInput.files[0]);

});


// CONTINUE

continueButton.addEventListener("click", () => {

    if (!selectedFile) {

        alert("Please take a photo or choose an image first.");

        return;
    }


    if (cropType.value === "") {

        alert("Please select your crop.");

        return;
    }


    // Convert image to Base64
    const reader = new FileReader();

    reader.onload = function () {

        sessionStorage.setItem(
            "scanImage",
            reader.result
        );


        sessionStorage.setItem(
            "scanCrop",
            cropType.options[cropType.selectedIndex].text
        );


        // Go to result page
        window.location.href = "result.html";

    };


    reader.readAsDataURL(selectedFile);

});