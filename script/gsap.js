
gsap.registerPlugin(ScrollTrigger)

gsap.set("body", {autoAlpha:1})

gsap.from(".hero", {
    x: -400,
    y: -200,
    alpha: 0,   
    duration: 0.7,
    delay: 0.5,
})

gsap.from(".heroImage", {
    x: 10,
    y: 100,
    alpha: 0,   
    duration: 0.7,
    
})

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