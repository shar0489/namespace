var SHAR0489 = {
    boxClick: function () {
        this.style.borderColor = "black";
        this.style.backgroundColor = "red";
        console.log(this);
    },

    mouseOver: function (e) {
        e.target.classList.toggle("highlight");
        console.log(e);
        console.log(e.target);
    },

    mouseOut: function (e) {
        e.target.classList.toggle("highlight");
        e.target.removeAttribute('style');
        console.log(e);
        console.log(e.target);
    },

    init: function () {
        let newBoxSection = document.createElement("div");
        newBoxSection.className = "box";
        newBoxSection.textContent = "SHAR0489";
        let boxes = document.getElementById("boxes");
        boxes.appendChild(newBoxSection);



        newBoxSection.addEventListener("click", SHAR0489.boxClick);
        newBoxSection.addEventListener("mouseover", SHAR0489.mouseOver);
        newBoxSection.addEventListener("mouseout", SHAR0489.mouseOut);
    }

}

SHAR0489.init;