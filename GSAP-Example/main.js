let tl=gsap.timeline()

tl.from('#section1',{duration:2,height:"100vh", padding:"0px",delay:1});
tl.from('#section1-text1',{duration:2,x:50,opacity:0});
tl.from('#section1-text2',{duration:2,x:-50,opacity:0},"-=2");