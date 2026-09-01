/* THIS IS JUST FOR FUN */

const icons = document.querySelectorAll(".draggable");

icons.forEach(function(icon) {

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    icon.addEventListener("pointerdown", function(event) {

        isDragging = true;

        const rect = icon.getBoundingClientRect();

        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        icon.setPointerCapture(event.pointerId);

    });

    icon.addEventListener("pointermove", function(event) {

        if (!isDragging) return;

        icon.style.left =
            (event.clientX - offsetX) + "px";

        icon.style.top =
            (event.clientY - offsetY) + "px";

    });

    icon.addEventListener("pointerup", function() {

        isDragging = false;

    });

});