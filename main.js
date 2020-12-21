gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin,MorphSVGPlugin,CSSRulePlugin);

var containerBefore = CSSRulePlugin.getRule(".container:before"); //get the rule
var section2Before = CSSRulePlugin.getRule(".section2:before"); //get the rule
var section2After = CSSRulePlugin.getRule(".section2:after"); //get the rule
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
    
    
    
    MorphSVGPlugin.convertToPath('.ball02') 
    MorphSVGPlugin.convertToPath('.pathBall') 
    



    
    gsap.set('.pathBall',{
        motionPath:{
            path:'.pathLine',
            align:'.pathLine',
            alignOrigin: [0.5, 0.5],
            start:0,
            end:0,
            
        }
    })

    var action = gsap.timeline({
        defaults: {
          duration:5,
          
        }})
    .to('.ball02',{morphSVG:'.decoration1',x:-190,y:-2016,}) 
      
    
    
    
    
    var tl = gsap.timeline({
        onComplete:()=>{
            gsap.to('.section2Ball',{
                scale:1,
                backgroundColor:'white',
                
                
            },""
                )
        
        },
        defaults:{
            duration:30
        },
        
        scrollTrigger:{
        
            trigger:'.contentBox1',
            start: '100+top bottom',
            end:'-100top top',
            scrub:true,
            endTrigger:".section2",
            markers:true,
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
       
            trigger:'.contentBox3',
            start: 'bottom bottom',
            end:'top -450+top',
            scrub:true,
            endTrigger: ".contentBox3",
        }
    },"<")

   
 
   
    
    tl.add(action,"-=4.5")

    
    

    
    
    
  
   

})



gsap.fromTo(containerBefore,
    {
    background: "rgb(0,255,194)",
    background: "linear-gradient(0deg, rgba(0,255,194,1) 0%, rgba(4,246,195,1) 12%, rgba(17,223,201,1) 24%, rgba(37,186,209,1) 39%, rgba(66,134,222,1) 59%, rgba(102,69,237,1) 80%, rgba(137,6,252,1) 100%)",
    repeat:-1,
 
    
},
    {
        background: "rgb(0,255,194)",
        background: "linear-gradient(360deg, rgba(0,255,194,1) 0%, rgba(4,246,195,1) 12%, rgba(17,223,201,1) 24%, rgba(37,186,209,1) 39%, rgba(66,134,222,1) 59%, rgba(102,69,237,1) 80%, rgba(137,6,252,1) 100%)",
        repeat:-1,
        duration:6,
        ease: "none"
    }

);

/*
MotionPathHelper.create(".pathBall",{
  path: ".pathLine",
  pathWidth: 5,
  pathColor: "red",
  pathOpacity: 0.6,
  selected: true,
  start: 0.1,
  end: 1,
  duration: 5,
  ease: "power2.inOut"
})

*/




