const mainSec = document.querySelector("#main");
const box = document.querySelector(".box");
const imgDiv = document.querySelector(".imgDiv");

mainSec.addEventListener("mousemove",(event)=>{
    gsap.to(box, {
        x: event.x,
        y: event.y,
        delay: 0.21,
        duration: 0.6,
        ease: "circ.out"
    })
})

imgDiv.addEventListener("mouseenter",(event)=>{
    box.innerText = "Move here"
    gsap.to(box, {
        scale: 2,
        duration: 0.5,
        backgroundColor: "#ffffff69"
    })
})


imgDiv.addEventListener("mouseleave",(event)=>{
    box.innerText = "";
    gsap.to(box, {
        scale: 1,
        duration: 0.5,
        backgroundColor: "#ffffff",
    })
})