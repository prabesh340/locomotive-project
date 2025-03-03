var tl = gsap.timeline();

tl.to(".yellow",{
    top:"-100%",
    ease:"expo.out"
})
tl.to("video,.loader",{
    top:"-100%",
    delay:0.7,
})
tl.from(".page1 h1",{
    color:"#fff",
    ease:"expo.out"
},"=-0.4")
tl.to("video",{
    display:"none"
},)
