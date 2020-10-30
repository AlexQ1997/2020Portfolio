
    //Will grab the section tag
const content = document.querySelector("section");
    // pageYOffset properties returns the pixels the current 
    //document has been scrolled from the upper left corner of the window vertically.
let currentPos = window.pageYOffset;

const callDistort = function () {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.30;
    
    content.style.transform = "skewY(" + speed + "deg)";
    currentPos = newPos; 
    requestAnimationFrame(callDistort);
}

callDistort();


const nav = document.getElementById("header").childNodes;
const aTags = document.getElementsByTagName("a");

for (var i = 0; i <aTags.length; i++) {
    aTags[i].addEventListener("click", function() {
        var current = this.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += "active";
    });
}