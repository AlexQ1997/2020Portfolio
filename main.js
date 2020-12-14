
// Gsap Animations
gsap.from('.title', {
    opacity: 0, 
    duration: 2, 
    delay: 4,
    x: -50, ease: 
    "power1.out" })

gsap.from('.name ', {
    opacity: 0, 
    duration: 2.2, 
    y: -50, 
    delay: 4.5, 
    ease: "power1.out" })

gsap.from('footer, nav', {
    opacity: 0, 
    duration: 2, 
    y: 50, 
    delay: 6, 
    ease: "power1.out" })

gsap.from('.navigation', {
        opacity: 0, 
        duration: 2, 
        x: 50, 
        delay: 5.5, 
        ease: "power1.out" })


        gsap.from(".image", {
            duration: 1,
            opacity:0,
            repeat: -1,
            yoyo: true,
            repeatDelay: 3.5,
            stagger: 0.5
          });