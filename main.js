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
        immediateRender:true,
        y: worldShadowTop 
    })
    gsap.set('.contentBox2',{
        immediateRender:true,
        y: travellerShadowTop 
    })
    gsap.set('.contentBox3',{
        immediateRender:true,
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



document.addEventListener('DOMContentLoaded', () => {
    findPosition()
    setPosition()
    
    
    
    
    
    
    gsap.set('.pathBall',{
        motionPath:{
            path:'.pathLine',
            align:'.pathLine',
            alignOrigin: [0.5, 0.5],
            start:0,
            end:0,
            
        }
    })
    
    
    
    
    var tl = gsap.timeline({
        defaults:{
            duration:0.0001
        },
        
        scrollTrigger:{
            markers:true,
            trigger:'.contentBox1',
            start: '100+top bottom',
            end:'-500top top',
            scrub:true,
            endTrigger: ".section2",
        }
    })
    
    tl.to('.pathBall',{
    
        motionPath:{
            path:'.pathLine',
            align:'.pathLine',
            alignOrigin: [0.5, 0.5],
        }
    })
    tl.from('.pathLine',{
        drawSVG: 0
    },"<")
    
   

    tl.fromTo('.worldShadow',{
        opacity:0
    },{
        opacity:'100%',
        scrollTrigger:{
            markers:true,
            trigger:'.contentBox1',
            start: 'bottom bottom',
            end:'top top',
            scrub:true,
            endTrigger: ".contentBox2",
        }
    },"<")

    tl.fromTo('.travellerShadow',{
        opacity:0
    },{
        opacity:'100%',
        scrollTrigger:{
            markers:true,
            trigger:'.contentBox2',
            start: 'bottom bottom',
            end:'-120+top top',
            scrub:true,
            endTrigger: ".contentBox3",
        }
    },"<")

    tl.fromTo('.flagShadow',{
        opacity:0
    },{
        opacity:'100%',
        scrollTrigger:{
            markers:true,
            trigger:'.contentBox3',
            start: 'bottom bottom',
            end:'top -450+top',
            scrub:true,
            endTrigger: ".contentBox3",
        }
    },"<")
    
    tl.to('.pathBall',{
        scale:10,
        fill:'white',
        scrollTrigger:{
            trigger:'.section2',
            start:"top bottom",
            end:"bottom bottom",
            scrub:true,
            markers:true,
        }
    })
    

})






