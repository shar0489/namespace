//    function circleClick() {
//        this.style.borderColor = "blue";
//        this.style.backgroundColor = "aqua";
//        console.log(this);
//    }
//
//    function mouseOver(e) {
//        e.target.classList.toggle("highlight");
//        console.log(e);
//        console.log(e.target);
//    }
//
//    function mouseOut(e) {
//        e.target.classList.toggle("highlight");
//        e.target.removeAttribute('style'); // remove any style added by the click event
//        console.log(e);
//        console.log(e.target);
//    }
//    document.addEventListener("DOMContentLoaded", init);



var SHAR0489 = {
    boxClick: function (e) {
        let target = e.currentTarget;
        target.style.borderColor = "blue";
        target.style.backgroundColor = "aqua";
        console.log(target);
    },

    mouseOver: function (e) {
        let target = e.currentTarget;
        target.target.classList.toggle("highlight");
        console.log(e);
        console.log(e.target);
    },

    mouseOut: function (e) {
        let target = e.currentTarget;
        target.target.classList.toggle("highlight");
        target.target.removeAttribute('style'); // remove any style added by the click event
        console.log(target);
        console.log(target.target);
    },

    init: function () {
        let newBoxSection = document.createElement("div");
        newBoxSection.className = "box";
        newBoxSection.textContent = "SHAR0489";
        // append the new element to the parent element with the id "circles"
        let boxes = document.getElementById("boxes");
        boxes.appendChild(newBoxSection);

        // add some event listeners:

        newBoxSection.addEventListener("click", SHAR0489.boxClick);
        newBoxSection.addEventListener("mouseover", SHAR0489.mouseOver);
        newBoxSection.addEventListener("mouseout", SHAR0489.mouseOut);
    }

}

SHAR0489.init;