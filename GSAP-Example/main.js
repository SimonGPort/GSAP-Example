
gsap.registerPlugin(ScrollTrigger)

// Premiere animation au loading
let tl=gsap.timeline()

tl.from('#section1',{duration:2,height:"100vh", padding:"0px",delay:1});
tl.from('#section1-text1',{duration:0.5,x:50,opacity:0});
tl.from('#section1-text2',{duration:0.5,x:-50,opacity:0},"-=0.5");

//ScrollTrigger section1 picture zoom on scroll
gsap.to("#section1-picture",{
scrollTrigger:{
  onUpdate:(self)=>{console.log("update",self.progress)},
  // markers:true,
  start:"top top",
  end:"bottom top",
trigger:"#section1-picture",
toggleActions:"restart complete reverse none",
scrub:true
},
backgroundSize: `200%`
// backgroundSize: `${clientWidth/2}%`
})

//ScrollTrigger section2 text animation on scroll
gsap.from("#section2-text1",{
  scrollTrigger:{
    // markers:true,
  trigger:"#section2-main-text-wrapper",
  toggleActions:"restart complete restart complete",
  },
  duration:1,x:50,opacity:0
  })

  gsap.from("#section2-text2",{
    scrollTrigger:{
      // markers:true,
    trigger:"#section2-main-text-wrapper",
    toggleActions:"restart complete restart complete",
    },
    duration:1,x:-50,opacity:0
    })