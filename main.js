gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin);
let worldShadow = document.querySelector(".worldShadow"),
    contentBox = document.querySelector(".contentBox"),
    delta = MotionPathPlugin.getRelativePosition(contentBox, worldShadow, [0.5, 0.5], [0.5, 0.5]);







var tl = gsap.timeline()
