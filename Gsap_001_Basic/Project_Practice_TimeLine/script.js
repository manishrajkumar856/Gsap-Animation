
// Timeline is used to handle animation timeline
const timeLine = gsap.timeline();

timeLine.from(".logo",{
    opacity: 0,
    y: -20,
    dilay: 1,
    duration: 1,
})

timeLine.from("h4",{
    opacity: 0,
    y: -20,
    duration: 1,
    stagger: 0.3,
})

timeLine.from("main h1",{
    opacity: 0,
    y: 20,
    duration: 0.5,
    scale: 0.5
})