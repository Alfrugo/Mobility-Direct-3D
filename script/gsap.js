
gsap.registerPlugin(ScrollTrigger)

gsap.from(".requestDemo1", {
    y: 200,
    alpha: 0,
    duration: 0.7,
    scrollTrigger: ".ulEfficiencies"
})


gsap.from(".requestDemo2", {
    y: 200,
    alpha: 0,
    duration: 0.7,
    scrollTrigger: "h3"
})

gsap.from(".requestDemo3", {
    x: -200,
    alpha: 0,
    duration: 0.7,
    scrollTrigger: ".transformingFac"
})