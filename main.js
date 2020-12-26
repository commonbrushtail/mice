gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin,MorphSVGPlugin,CSSRulePlugin,ScrambleTextPlugin);

var containerBefore = CSSRulePlugin.getRule(".container:before"); //get the rule
var section2InnerBefore = CSSRulePlugin.getRule(".section2Inner:before"); //get the rule
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
       
        y: worldShadowTop 
    })
    gsap.set('.contentBox2',{
       
        y: travellerShadowTop 
    })
    gsap.set('.contentBox3',{
       
        y: flagShadowShadowTop 
    })
}

window.addEventListener('DOMContentLoaded', ()=>{
    findPosition()
    setPosition()
    
});
window.addEventListener('resize',()=>{
    findPosition()
    setPosition()
    
});






MorphSVGPlugin.convertToPath('.pathBall') 


  
ScrollTrigger.matchMedia({

    "(min-width:768px)":()=>{
       
        gsap.fromTo('.worldShadow',{
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
    
        gsap.fromTo('.travellerShadow',{
            opacity:0
        },{
            opacity:'100%',
            scrollTrigger:{
               
                trigger:'.contentBox2',
                start: 'top bottom',
                end:'bottom top',
                scrub:true,
                endTrigger: ".contentBox3",
                
            }
        },"<")
    
        gsap.fromTo('.flagShadow',{
            opacity:0
        },{
            opacity:'100%',
            scrollTrigger:{
           
                trigger:'.contentBox3',
                start: 'center bottom',
                end:'top top',
                scrub:true,
                endTrigger: ".contentBox3",
               
            }
        },"<")

    },
    "(min-width:1201px) and (min-height:1201px)" :()=>{
        console.log('1201 and 1200')
       /*for 1080p screen*/
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
                duration:30
            },
            
            scrollTrigger:{
            
                trigger:'.contentBox1',
                start: 'bottom+=200 bottom',
                end:'bottom-=300 center+=50',
                scrub:true,
                endTrigger:".container",
              
                
                
            }
        })
        
        tl.to('.pathBall',{
            duration:20,
            motionPath:{
                path:'.pathLine',
                align:'.pathLine',
                alignOrigin: [0.5, 0.5],
            }
        })
        
        tl.fromTo('.pathLine',{
            drawSVG: '0% 0%',
            
        },{drawSVG:'100% 0%',duration:20,},"<")
        
       
    
       

        return function() {
            tl.kill(); 
            // other cleanup code can go here. 
          };
    
       
    
    },
    "(min-width:1201px) and (max-height:1200px)" :()=>{
        console.log('1201 and 900')
       /*for 1080p screen*/
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
                duration:30
            },
            
            scrollTrigger:{
            
                trigger:'.contentBox1',
                start: 'bottom bottom',
                end:'bottom-=300 center+=50',
                scrub:true,
                endTrigger:".container",
                
                
            }
        })
        
        tl.to('.pathBall',{
            duration:20,
            motionPath:{
                path:'.pathLine',
                align:'.pathLine',
                alignOrigin: [0.5, 0.5],
            }
        })
        
        tl.fromTo('.pathLine',{
            drawSVG: '0% 0%',
            
        },{drawSVG:'100% 0%',duration:20,},"<")
        
       
    
       
        return function() {
            tl.kill(); 
            // other cleanup code can go here. 
          };
    
       
    
    },
    "(min-width:1201px) and (max-height:1401px)":()=>{
        console.log('1201 active')
        /*for hdpi laptop*/
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
                duration:30
            },
            
            scrollTrigger:{
            
                trigger:'.contentBox1',
                start: 'bottom bottom',
                end:'bottom-=300 center+=50',
                scrub:true,
                endTrigger:".container",
                
                
            }
        })
        
        tl.to('.pathBall',{
            duration:20,
            motionPath:{
                path:'.pathLine',
                align:'.pathLine',
                alignOrigin: [0.5, 0.5],
            }
        })
        
        tl.fromTo('.pathLine',{
            drawSVG: '0% 0%',
            
        },{drawSVG:'100% 0%',duration:20,},"<")
        
       

        return function() {
            tl.kill(); 
            // other cleanup code can go here. 
          };
    
       
    
    },
    "(max-width:1200px) and (min-width:987px)":()=>{
        console.log('under 1366')
        gsap.set('.pathBall1200',{
            motionPath:{
                path:'.pathLine1200',
                align:'.pathLine1200',
                alignOrigin: [0.5, 0.5],
                start:0,
                end:0,
                
            }
        })
        var tl = gsap.timeline({
           
            defaults:{
                duration:30
            },
            
            scrollTrigger:{
            
                trigger:'.contentBox1',
                start: 'bottom bottom',
                end:'bottom-=300 center+=50',
                scrub:true,
                endTrigger:".container",
                
                
            }
        })
        
        tl.to('.pathBall1200',{
            duration:20,
            motionPath:{
                path:'.pathLine1200',
                align:'.pathLine1200',
                alignOrigin: [0.5, 0.5],
            }
        })
        
        tl.fromTo('.pathLine1200',{
            drawSVG: '0% 0%',
            
        },{drawSVG:'100% 0%',duration:20,},"<")
        
       
    
        
        return function() {
            tl.kill(); 
            // other cleanup code can go here. 
          };
    },
    "(max-width:986px) and (min-height:500px)":()=>{
        console.log('under 986')
        gsap.set('.pathBall768',{
            motionPath:{
                path:'.pathLine768',
                align:'.pathLine768',
                alignOrigin: [0.5, 0.5],
                start:0,
                end:0,
                
            }
        })
        var tl = gsap.timeline({
           
            defaults:{
                duration:30
            },
            
            scrollTrigger:{
            
                trigger:'.contentBox1',
                start: 'bottom bottom',
                end:'bottom-=300 top',
                scrub:true,
                endTrigger:".container",
                
                
            }
        })
        
        tl.to('.pathBall768',{
            duration:20,
            motionPath:{
                path:'.pathLine768',
                align:'.pathLine768',
                alignOrigin: [0.5, 0.5],
            }
        })
        
        tl.fromTo('.pathLine768',{
            drawSVG: '0% 0%',
            
        },{drawSVG:'100% 0%',duration:20,},"<")
        
       
    
    
    
        
        return function() {
            tl.kill(); 
            // other cleanup code can go here. 
          };
    },
    "(max-width:768px) and (min-width:400.1px)":()=>{
        
        gsap.set('.pathBallMobile',{
            motionPath:{
                path:'.pathLineMobile',
                align:'.pathLineMobile',
                alignOrigin: [0.5, 0.5],
                start:0,
                end:0,
                
            }
        })
        var tl = gsap.timeline({
           
            defaults:{
                duration:30
            },
            
            scrollTrigger:{
            
                trigger:'.contentBox1',
                start: 'bottom bottom',
                end:'bottom-=300 top',
                scrub:true,
                endTrigger:".container",
                
                
            }
        })
        
        tl.to('.pathBallMobile',{
            duration:20,
            motionPath:{
                path:'.pathLineMobile',
                align:'.pathLineMobile',
                alignOrigin: [0.5, 0.5],
            }
        })
        
        tl.fromTo('.pathLineMobile',{
            drawSVG: '0% 0%',
            
        },{drawSVG:'100% 0%',duration:20,},"<")
        
       
    
        tl.fromTo('.worldShadow',{
            opacity:0
        },{
            opacity:'100%',
            scrollTrigger:{
            
                trigger:'.contentBox1',
                start: 'top bottom',
                end:'center bottom',
                scrub:true,
                endTrigger:".container",
            

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
    
        
        return function() {
            tl.kill(); 
            // other cleanup code can go here. 
          };
    },
    "(max-width:400px)":()=>{
        
        gsap.set('.pathBallMobile320',{
            motionPath:{
                path:'.pathLineMobile320',
                align:'.pathLineMobile320',
                alignOrigin: [0.5, 0.5],
                start:0,
                end:0,
                
            }
        })
        var tl = gsap.timeline({
           
            defaults:{
                duration:30
            },
            
            scrollTrigger:{
            
                trigger:'.contentBox1',
                start: 'bottom bottom',
                end:'bottom-=300 top',
                scrub:true,
                endTrigger:".container",
                
                
            }
        })
        
        tl.to('.pathBallMobile320',{
            duration:20,
            motionPath:{
                path:'.pathLineMobile320',
                align:'.pathLineMobile320',
                alignOrigin: [0.5, 0.5],
            }
        })
        
        tl.fromTo('.pathLineMobile320',{
            drawSVG: '0% 0%',
            
        },{drawSVG:'100% 0%',duration:20,},"<")
        
       
    
        tl.fromTo('.worldShadow',{
            opacity:0
        },{
            opacity:'100%',
            scrollTrigger:{
            
                trigger:'.contentBox1',
                start: 'top bottom',
                end:'center bottom',
                scrub:true,
                endTrigger:".container",
              
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
    
        
        return function() {
            tl.kill(); 
            // other cleanup code can go here. 
          };
    }


    

    

    

})








var section2tl = gsap.timeline()
section2tl.to('.section2InnerDeco',{
    onComplete:()=>{

    },
    scale:1,
    
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    y:0,
    scrollTrigger:{
        trigger:'.section2Inner',
        start:"top center",
       
        end:'50px +240+center',
        scrub:true,
      
    }
})
section2tl.to('.section2Inner .textWrap',{
    opacity:1,
    scrollTrigger:{
        trigger:'.section2Inner',
        start:"top center",
       
        end:'120px +240+center',
        scrub:true,
       
    }
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

gsap.fromTo('.section9',
    {
    background: "rgb(0,255,194)",
    background: "linear-gradient(0deg, rgba(0,255,194,1) 0%, rgba(4,246,195,1) 12%, rgba(17,223,201,1) 24%, rgba(37,186,209,1) 39%, rgba(66,134,222,1) 59%, rgba(102,69,237,1) 80%, rgba(137,6,252,1) 100%)",
    repeat:-1,
 
    
},
    {
        background: "rgb(0,255,194)",
        background: "linear-gradient(360deg, rgba(0,255,194,1) 0%, rgba(4,246,195,1) 12%, rgba(17,223,201,1) 24%, rgba(37,186,209,1) 39%, rgba(66,134,222,1) 59%, rgba(102,69,237,1) 80%, rgba(137,6,252,1) 100%)",
        repeat:-1,
        duration:8,
        ease: "none"
    }

);

*/
gsap.to('.count', {ease:'none',duration:2, scrambleText:{text:"212,837", chars:"0123456789XX",speed:1,}})

/*
MotionPathHelper.create(".pathBallMobile",{
  path: ".pathLineMobile",
  pathWidth: 5,
  pathColor: "red",
  pathOpacity: 0.6,
  selected: true,
  start: 0.1,
  end: 1,
  duration: 5,
  ease: "power2.inOut"
})


/*

gsap.fromTo('.lineDecoration',{
    repeat:-1,
    
    yoyo:true,
    background: 'rgb(0,255,194)',
    background: 'linear-gradient(0deg, rgba(0,255,194,1) 0%, rgba(4,246,195,1) 9%, rgba(17,223,201,1) 18%, rgba(37,186,209,1) 35%, rgba(66,134,222,1) 58%, rgba(102,69,237,1) 82%, rgba(137,6,252,1) 100%)'
},{
    background: 'rgb(0,255,194)',
    background: 'linear-gradient(0deg, rgba(0,255,194,1) 15%, rgba(4,246,195,1) 30%, rgba(17,223,201,1) 45%, rgba(37,186,209,1) 60%, rgba(66,134,222,1) 75%, rgba(102,69,237,1) 90%, rgba(137,6,252,1) 100%)',
    repeat:-1,
    duration:5,
    ease:'power2',
    
    
})
*/

gsap.to('.gradient1,.decoration1',{
 
  attr:{  gradientTransform:"translate(-325.25 2915.14) rotate(360)"},
  scrollTrigger:{
      trigger:'.decoration1',
   
      start:'top bottom',
      endTrigger:'.section2',
      end:'center bottom',
      scrub:true,
      
  }
})