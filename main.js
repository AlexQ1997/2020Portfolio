
//     //Will grab the section tag
// const content = document.querySelector("section");
//     // pageYOffset properties returns the pixels the current 
//     //document has been scrolled from the upper left corner of the window vertically.
// let currentPos = window.pageYOffset;

// const callDistort = function () {
//     const newPos = window.pageYOffset;
//     const diff = newPos - currentPos;
//     const speed = diff * 0.30;
    
//     content.style.transform = "skewY(" + speed + "deg)";
//     currentPos = newPos; 
//     requestAnimationFrame(callDistort);
// }

// callDistort();


// const nav = document.getElementById("header").childNodes;
// const aTags = document.getElementsByTagName("a");

// for (var i = 0; i <aTags.length; i++) {
//     aTags[i].addEventListener("click", function() {
//         var current = this.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += "active";
//     });
// }

// const img1 = document.querySelector(".img-1");
// const img2 = document.querySelector(".img-2");
// const img3 = document.querySelector(".img-3");
// const img4 = document.querySelector(".img-4");
// const container = document.querySelector(".imgContainer");
// const images = document.querySelector(".images");

// document.addEventListener("mousemove", e => {
//     img1.setAttribute(
//         "style",
//         "top :" + (e.pageY - 255) + "px; left :" + (e.pageX - 200) + "px"   
//     );

//     img2.setAttribute(
//         "style",
//         "top :" + (e.pageY - 255) + "px; left :" + (e.pageX - 200) + "px"
//     );
//     img3.setAttribute(
//         "style",
//         "top :" + (e.pageY - 255) + "px; left :" + (e.pageX - 200) + "px"
//     );
//     img4.setAttribute(
//         "style",
//         "top :" + (e.pageY - 255) + "px; left :" + (e.pageX - 200) + "px"
//     );
        
    
// } );

// Navigation 
function show() {
    document.getElementsById('sidebar').classList.toggle('active');
}


// Gsap Animations
gsap.from('.title', {
    opacity: 0, 
    duration: 2.5, 
    x: -50, ease: 
    "power1.out" })

gsap.from('.name ', {
    opacity: 0, 
    duration: 2.5, 
    y: -50, 
    delay:1.4, 
    ease: "power1.out" })

gsap.from('footer, nav', {
    opacity: 0, 
    duration: 2, 
    y: 50, 
    delay:1.8, 
    ease: "power1.out" })

    gsap.from('.navigation', {
        opacity: 0, 
        duration: 2, 
        x: 50, 
        delay: 3.5, 
        ease: "power1.out" })
