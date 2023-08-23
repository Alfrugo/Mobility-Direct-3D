
gsap.registerPlugin(ScrollTrigger)

gsap.set("body", {autoAlpha:1})

gsap.from(".hero", {
    x: -400,
    y: -200,
    alpha: 0,   
    duration: 0.7,
})

gsap.from(".heroImage", {
    x: 10,
    y: 100,
    alpha: 0,   
    duration: 1,    
})

gsap.from(".transforming", {
    x: 10,
    y: 100,
    alpha: 0,   
    duration: 1,    
})

gsap.from("h1", {
    x: 10,
    y: 100,
    alpha: 0,   
    duration: 0.7,
    scrollTrigger: ".orangeEmpower",
    delay: 1,
})

gsap.from("h3", {
    x: 10,
    y: 100,
    alpha: 0,   
    duration: 0.7,
    scrollTrigger: ".mobilityDirectBasic",
    delay: 1
   
})



gsap.from(".greenTitle", {
    x: 10,
    y: 100,
    alpha: 0,   
    duration: 0.7,
    scrollTrigger: "li",
    delay: 0.74,
   
})

gsap.from(".tierDescriptionSimple", {
    y: 50,
    alpha: 0,   
    duration: 0.7,
    delay: 0.74,
    scrollTrigger: "h5"
})

gsap.from(".tierDescriptionPlus", {
    y: 50,
    alpha: 0,   
    duration: 0.7,
    delay: 1,
    scrollTrigger: "h5"
})

gsap.from(".tierDescriptionPro", {
    y: 50,
    alpha: 0,   
    duration: 0.7,
    delay: 1.3,
    scrollTrigger: "h5"
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


gsap.from(".facilityRender", {
    scale: 0.5,
    alpha: 0,
    duration: 0.7,
    scrollTrigger: ".facilityRender",
    delay: 1
})