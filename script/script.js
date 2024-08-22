function smooth() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });



  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
smooth();


function mouseFollower() {
  window.addEventListener("mousemove", (dets) => {
    document.querySelector("#circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`

  })
}
mouseFollower();

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top 30%",
    end: "top 0",
    scrub: 3,

  }
})

tl.to(".page1 h1", {
  x: -100,
  opacity: .1,
}, "anim")

tl.to(".heading-text p", {
  opacity: .1
}, "anim")

tl.to(".page1 h2", {
  x: 100,
  opacity: .1,
}, "anim")

tl.to(".page1 video", {
  width: "85%"
}, "anim")


let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -115%",
    end: "top -120%",
    scrub: 3,
  }
})

tl1.to(".main", {
  backgroundColor: "#fff",

})

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".elem",
    scroller: ".main",
    stagger:1
  }
})
tl2.from(".page2-part0", {
  y: 20,
  opacity: 0,
  duration: .3,
})

tl2.from(".elem", {
  y: 20,
  opacity: 0,
  duration:.3,
  stagger:1,
  ease:Expo
})


document.querySelector("#image1").style.opacity = 1;

document.querySelector("#elem1").addEventListener("mouseenter", () => {
  document.querySelector("#image1").style.opacity = 1;
})
document.querySelector("#elem1").addEventListener("mouseleave", () => {
  document.querySelector("#image1").style.opacity = 1;

})

document.querySelector("#elem2").addEventListener("mouseenter", () => {
  document.querySelector("#image2").style.opacity = 1;

})
document.querySelector("#elem2").addEventListener("mouseleave", () => {
  document.querySelector("#image2").style.opacity = 0;

})

document.querySelector("#elem3").addEventListener("mouseenter", () => {
  document.querySelector("#image3").style.opacity = 1;

})
document.querySelector("#elem3").addEventListener("mouseleave", () => {
  document.querySelector("#image3").style.opacity = 0;

})

gsap.to(".slides", {
  transform: "translateX(-158%)",
  opacity: 1,
  scrollTrigger: {
    trigger: ".page4",
    scroller: ".main",
    start: "top -31%",
    end: "top -100%",
    scrub: 8,
    pin: true,
  }
})

const magneto = document.querySelector(".magneto");
const magnetoText = document.querySelector(".magneto p");

magneto.addEventListener("mousemove", (event) => {
  const boundBox = magneto.getBoundingClientRect();

  const magnetoStright = 40;
  const magnetoTextStright = 80;
  const newX = ((event.clientX - boundBox.left) / magneto.offsetWidth) - 0.5;
  const newY = ((event.clientY - boundBox.top) / magneto.offsetHeight) - 0.5;

  gsap.to(magneto, {
    duration: .5,
    x: newX * magnetoStright,
    y: newY * magnetoStright,
    ease: Power4.eseOut,
  })
  gsap.to(magnetoText, {
    duration: .5,
    x: newX * magnetoTextStright,
    y: newY * magnetoTextStright,
    ease: Power4.eseOut,
  })
})

magneto.addEventListener("mouseleave", () => {
  gsap.to(magneto, {
    duration: .5,
    x: 0,
    y: 0,
    ease: Elastic.easeOut,
  })
  gsap.to(magnetoText, {
    duration: .5,
    x: 0,
    y: 0,
    ease: Elastic.easeOut,
  })
})


const magneto1 = document.querySelector(".magneto1");
const magnetoText1 = document.querySelector(".magneto1 p");

magneto1.addEventListener("mousemove", (event) => {
  const boundBox = magneto1.getBoundingClientRect();

  const magnetoStright = 40;
  const magnetoTextStright = 80;
  const newX = ((event.clientX - boundBox.left) / magneto1.offsetWidth) - 0.5;
  const newY = ((event.clientY - boundBox.top) / magneto1.offsetHeight) - 0.5;

  gsap.to(magneto1, {
    duration: .5,
    x: newX * magnetoStright,
    y: newY * magnetoStright,
    ease: Power4.eseOut,
  })
  gsap.to(magnetoText1, {
    duration: .5,
    x: newX * magnetoTextStright,
    y: newY * magnetoTextStright,
    ease: Power4.eseOut,
  })
})

magneto1.addEventListener("mouseleave", () => {
  gsap.to(magneto1, {
    duration: .5,
    x: 0,
    y: 0,
    ease: Elastic.easeOut,
  })
  gsap.to(magnetoText1, {
    duration: .5,
    x: 0,
    y: 0,
    ease: Elastic.easeOut,
  })
});

document.querySelectorAll(".element").forEach((elem) => {
  elem.addEventListener("mousemove", (dets) => {
    const diff = dets.clientY - elem.getBoundingClientRect().top;
    gsap.to(elem.querySelector("img"),{
      opacity:1,
      ease:Power1,
      y:diff,
      x:dets.clientX,
    })
  //   gsap.to(".element h3",{
  //     opacity:1
  //   })
  })

  elem.addEventListener("mouseleave", (dets) => {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      duration: .5,
      ease:Power3
    })
  })
})