gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin);


var worldShadow = document.querySelector(".worldShadow"),
    travellerShadow = document.querySelector(".travellerShadow"),
    flagShadow = document.querySelector(".flagShadow"),
    contentBox1 = document.querySelector(".contentBox1"),
    worldShadowTop,
    travellerShadowTop, 
    flagShadowShadowTop; 
    


function findPosition(){
    worldShadowTop =  worldShadow.getBoundingClientRect().y + window.scrollY
    travellerShadowTop =  travellerShadow.getBoundingClientRect().y + window.scrollY
    flagShadowShadowTop =  flagShadow.getBoundingClientRect().y + window.scrollY
        
}






function setPosition(){
    gsap.set('.contentBox1',{
        y: worldShadowTop 
    })
    gsap.set('.contentBox2',{
        y: travellerShadowTop 
    })
    gsap.set('.contentBox3',{
        y: flagShadowShadowTop 
    })
}








window.addEventListener('load', ()=>{
    findPosition()
    setPosition()
});
window.addEventListener('resize',()=>{
    findPosition()
    setPosition()
});

