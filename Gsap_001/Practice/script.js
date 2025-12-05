
// From Initial Position to Final Position
gsap.to("#box", {
    x: 1000,
    duration: 1,
    delay: 1,
    rotate: 360,
    backgroundColor: "aqua",
    borderRadius: "50%",
    scale: 0.5,
    repeat: -1, // 1 for two times and -1 for infinite times
    yoyo: 2,    // Perform just like yoyo
})

// From Final Position to initial Position
gsap.from("#box2", {
    x: 500,
    y: -200,
    duration: 1,
    delay: 1,
    backgroundColor: "yellow", 
    repeat: -1, // 1 for two times and -1 for infinite times
    yoyo: true, // Perform just like yoyo
})


gsap.from("h1", {
    opacity: 0,
    delay: 1,
    duration: 1,
    y: 30,
    stagger: 0.5,   // this is used to animate multiple targeted element one by one 
})