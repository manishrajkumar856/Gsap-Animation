let initialPath = "M 10 200 Q 750 200 1500 200";
const finalPath = "M 10 200 Q 750 200 1500 200";

const strings = document.querySelector("#string");

strings.addEventListener("mousemove", (event)=>{
    console.log(event.y);
    Path = `M 30 200 Q ${event.x} ${event.y} 1500 200`;

    gsap.to("svg path", {
        attr: {
            d: Path,
        },
        ease: "power3.out"
    })
})

strings.addEventListener("mouseleave", (event)=>{
    console.log(event.y);
    Path = "M 30 200 Q 750 200 1500 200";

    gsap.to("svg path", {
        attr: {
            d: Path,
        },
        duration: 3,
        ease: "elastic.out(1,0.2)"
    })
})