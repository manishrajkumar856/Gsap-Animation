gsap.from(".page1 .box",{
    scale: 0,
    duration: 2,
    rotation: 360,
})

gsap.from(".page2 .box",{
    scale: 0,
    duration: 2,
    rotation: 360,
    // Scroll Trigger Props
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        // markers: true,
        start:"top 50%"
    }
})


gsap.from(".page3 #hello",{
    opacity: 0,
    duration: 2,
    x: -200,

    // Scroll Trigger Props
    scrollTrigger: {
        trigger: ".page3 #hello",
        scroller: "body",
        // markers: true,
        start: "top 60%"
    }
})

gsap.from(".page3 #sus",{
    opacity: 0,
    duration: 2,
    x: 200,

    // Scroll Trigger Props
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -90%",
        pin: true,
    }
})