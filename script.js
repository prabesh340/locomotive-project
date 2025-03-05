const loader = () => {
  var tl = gsap.timeline();

  tl.to(".yellow", {
    top: "-100%",
    ease: "expo.out",
  });
  tl.to("video,.loader", {
    top: "-100%",
    delay: 0.8,
  });
  tl.from(
    ".text h1",
    {
      color: "#fff",
      ease: "expo.out",
    },
    "=-0.4"
  );

  tl.to(
    ".loader,.text",
    {
      opacity: 0,
      display: "none",
    },
    "=-0.2"
  );
};

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  
});
const body = document.querySelector("body");
body.style.display="none"
window.addEventListener("load",() => {
  gsap.to("body",{
    display:"initial",
    delay:1
  })
  setTimeout(() => {
    loader();

  },1220)


})