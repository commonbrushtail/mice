gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin);
let worldShadow = document.querySelector(".worldShadow"),
    contentBox = document.querySelector(".contentBox"),
    delta = MotionPathPlugin.getRelativePosition(contentBox, worldShadow, [0.5, 0.5], [0.5, 0.5]);

window.addEventListener('DOMContentLoaded', (event) => {
    ScrollTrigger.refresh();

gsap.set(contentBox, {
    x: "+=" + 50% + delta.x,
    y: "+=" + delta.y,
    duration: 2,
    ease: "power2.inOut"
  });
    });    
window.addEventListener('onResize', (event) => {
    ScrollTrigger.refresh();

gsap.set(contentBox, {
    x: "+=" + 50% + delta.x,
    y: "+=" + delta.y,
    duration: 2,
    ease: "power2.inOut"
});
    
});    






var tl = gsap.timeline()
