const slider = document.querySelector(".slider");
const slideDiv = document.querySelector(".slider-results-div")

slider.onchange = function () {
    slideDiv.innerHTML = this.value;
};