/* =========================
   SCAN SYSTEM
========================= */

const scanButton = document.getElementById("scan-button");

const scanOverlay = document.getElementById("scan-overlay");

const closeScan = document.getElementById("close-scan");

const cameraOption = document.getElementById("camera-option");

const galleryOption = document.getElementById("gallery-option");

const selectedImageContainer =
    document.getElementById("selected-image-container");

const selectedImage =
    document.getElementById("selected-image");

const aiResult =
    document.getElementById("ai-result");

const doneScan =
    document.getElementById("done-scan");


/* =========================
   HIDDEN FILE INPUTS
========================= */

const cameraInput = document.createElement("input");

cameraInput.type = "file";
cameraInput.accept = "image/*";
cameraInput.capture = "environment";

cameraInput.style.display = "none";


const galleryInput = document.createElement("input");

galleryInput.type = "file";
galleryInput.accept = "image/*";

galleryInput.style.display = "none";


document.body.appendChild(cameraInput);
document.body.appendChild(galleryInput);


/* =========================
   OPEN SCAN OVERLAY
========================= */

scanButton.addEventListener("click", function () {

    scanOverlay.style.display = "flex";

});


/* =========================
   CLOSE SCAN OVERLAY
========================= */

closeScan.addEventListener("click", function () {

    closeScanOverlay();

});


function closeScanOverlay() {

    scanOverlay.style.display = "none";

    resetScan();

}


/* =========================
   TAKE PHOTO
========================= */

cameraOption.addEventListener("click", function () {

    cameraInput.click();

});


/* =========================
   GALLERY
========================= */

galleryOption.addEventListener("click", function () {

    galleryInput.click();

});


/* =========================
   CAMERA IMAGE
========================= */

cameraInput.addEventListener("change", function () {

    handleImage(this.files[0]);

});


/* =========================
   GALLERY IMAGE
========================= */

galleryInput.addEventListener("change", function () {

    handleImage(this.files[0]);

});


/* =========================
   HANDLE IMAGE
========================= */

function handleImage(file) {

    if (!file) {
        return;
    }


    // Make sure the selected file is an image

    if (!file.type.startsWith("image/")) {

        alert("Please select an image.");

        return;

    }


    // Create temporary URL for the image

    const imageURL = URL.createObjectURL(file);


    // Show selected image

    selectedImage.src = imageURL;

    selectedImageContainer.style.display = "block";


    // Hide scan choices after selecting image

    document.querySelector(".scan-options").style.display = "none";


    // Show analyzing state

const analyzingState =
    document.getElementById("analyzing-state");

analyzingState.style.display = "block";


// Hide result for now

aiResult.style.display = "none";

    // Show Done button

    doneScan.style.display = "block";

}


/* =========================
   DONE BUTTON
========================= */

doneScan.addEventListener("click", function () {

    closeScanOverlay();

});


/* =========================
   RESET SCAN
========================= */

function resetScan() {

    selectedImage.src = "";

    selectedImageContainer.style.display = "none";
    document.getElementById("analyzing-state").style.display = "none";

    aiResult.style.display = "none";

    doneScan.style.display = "none";


    document.querySelector(".scan-options").style.display = "flex";


    cameraInput.value = "";

    galleryInput.value = "";

}