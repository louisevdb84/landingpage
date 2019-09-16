window.onload = function () {
    delay();
}

function drawCurtains() {
    var curtainLeft = document.getElementById("left-curtain");
    curtainLeft.classList.add("draw-left-panel");
    var curtainRight = document.getElementById("right-curtain");
    curtainRight.classList.add("draw-right-panel");
}

function delay() {

    setTimeout(function () {
        drawCurtains();
    }, 700);
};