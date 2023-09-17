Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos:["https://cdn.cuberto.com/cb/home/hero/1.mp4"]})

gsap.to(".fleftelm",{
    scrollTrigger:{
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})
let section = document.querySelectorAll(".fleftelm")
Shery.imageEffect(".images", {
    style: 5,
    config: {onMouse: {value:1}},
    slideStyle:(setScroll) =>{
      section.forEach(function(section,index){
       ScrollTrigger.create({
        trigger:section,
        start: "top top",
        scrub: 1,
        onUpdate: function(prog){
           setScroll(prog.progress+index)
        }
       })
       })
      
    }
});