gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin,MorphSVGPlugin,CSSRulePlugin,ScrambleTextPlugin,ScrollToPlugin);
var introFade = document.querySelectorAll('.introFade')
var desktopVideo = document.querySelectorAll('.desktopVideo')
var mobileVideo = document.querySelectorAll('.mobileVideo')
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

var html = document.documentElement
var start = document.querySelector('.start')
var w = window.clientWidth;
var h = window.clientHeight;

var videoResponsive = document.querySelectorAll('.videoResponsive')

function checkVideo(){
    if(document.body.clientWidth>768){
        for (let index = 0; index < videoResponsive.length; index++) {
            videoResponsive[index].removeChild(videoResponsive[index].firstChild);
            var source = document.createElement('source'); 
            source.setAttribute('src', `video/video${index+1}.mp4`);
            source.setAttribute('type', 'video/mp4');
            videoResponsive[index].appendChild(source)
            
        }
    }  else if(document.body.clientWidth <= 767){
        for (let index = 0; index < videoResponsive.length; index++) {
            videoResponsive[index].removeChild(videoResponsive[index].firstChild);
            var source = document.createElement('source'); 
            source.setAttribute('src', `video/Mobile/video${index+1}.mp4`);
            source.setAttribute('type', 'video/mp4');
            videoResponsive[index].appendChild(source)
            
            
        }
    }
}

checkVideo()

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

if(document.body.clientWidth>1200){
    gsap.set('.sk-wander',{
        top:'50%',
        opacity:100
    })
    
} else {
    gsap.set('.sk-wander',{
        top:'40%' ,
        opacity:100, 
})
}



findPosition()
setPosition()

start.addEventListener('click',()=>{
   /*gsap.to(window, {duration: 0, scrollTo: {y: '.contentBox1', autoKill: false,offsetY: 400}, ease: "power2"});*/
     window.scroll({top:  worldShadow.getBoundingClientRect().y + window.scrollY, left: 0, behavior: 'smooth' });
   
})

console.log( window.innerHeight)

window.addEventListener('resize',()=>{

    findPosition()
    setPosition()
    /*
    if( window.innerWidth != w || window.innerHeight !=h){
        console.log('asdsd')
        checkVideo()

        w = window.clientWidth
        h = window.clientHeight
    }
    */
    
});

window.addEventListener('load',()=>{
    
    
    MorphSVGPlugin.convertToPath('.pathBall') 
    var intro = gsap.timeline()
    
    
    intro.set('.svgLine,.contentBox,.introFade',{
        visibility:'visible',
        delay:1,
    })

    intro.to('.loaderWrap',{opacity:0,duration:0.5})
    
  
    intro.from('.introFade',{
        y:100,
        opacity:0,
        stagger:0.1,
        duration:1
    })

    intro.from('.svgLine',{
        opacity:0,
        y:100,
        },'<')

    intro.from('.contentBox1',{
            opacity:0,
            duration:1,
            },'<')

    intro.to(html,{
        overflow:'visible',
    })
    ScrollTrigger.matchMedia({

        "(min-width:992px)":()=>{
        
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

            var section2tl = gsap.timeline()
            section2tl.to('.section2InnerDeco',{
                
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
            },'<')

        },
        "(min-width:200px) and (max-width:767px)":()=>{
            gsap.fromTo(containerBefore,
                {
                background: "rgb(0,255,194)",
                background: "linear-gradient(0deg, rgba(0,255,194,1) 0%, rgba(66,134,222,1) 59%, rgba(137,6,252,1) 100%)",
                repeat:-1,
                
            
                
            },
                {
                    background: "rgb(0,255,194)",
                    background: "linear-gradient(360deg, rgba(0,255,194,1) 0%, rgba(66,134,222,1) 59%, rgba(137,6,252,1) 100%)",
                    repeat:-1,
                    duration:5,
                    ease: "none",
                    scrollTrigger:{
                        trigger:'.introBox',
                        toggleActions:"play pause resume pause"
                    }
                }
        
            ); 
        },
        "(min-width:768px)":()=>{
            gsap.fromTo(containerBefore,
                {
                background: "rgb(0,255,194)",
                background: "linear-gradient(0deg, rgba(0,255,194,1) 0%, rgba(66,134,222,1) 59%, rgba(137,6,252,1) 100%)",
                repeat:-1,
                
            
                
            },
                {
                    background: "rgb(0,255,194)",
                    background: "linear-gradient(360deg, rgba(0,255,194,1) 0%, rgba(66,134,222,1) 59%, rgba(137,6,252,1) 100%)",
                    repeat:-1,
                    duration:5,
                    ease: "none",
                    scrollTrigger:{
                        trigger:'.introBox',
                        toggleActions:"play pause resume pause"
                    }
                }
        
            ); 
        },
        "(min-width:1921px)" :()=>{
            console.log('4k')
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
        "(min-width:1441px) and (max-width:1920px)" :()=>{
            console.log('1080p')
        
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
        "(min-width:1201px) and (max-width:1440px)":()=>{
            console.log('hdpi')
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
        "(min-width:992px) and (max-width:1200px)":()=>{
            console.log('under 1200')
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
        "(min-width:768px) and (max-width:991px)":()=>{
            console.log('under 991')
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
                    start: 'top bottom',
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

            gsap.fromTo('.worldShadow',{
                opacity:0
            },{
                opacity:'100%',
                scrollTrigger:{
                
                    trigger:'.contentBox1',
                    start: 'top bottom',
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
                    start: 'top bottom',
                    end:'30px top',
                    scrub:true,
                    endTrigger: ".contentBox3",
                
                }
            },"<")

            var section2tl = gsap.timeline()
            section2tl.to('.section2InnerDeco',{
                
                scale:1,
                
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                y:0,
                scrollTrigger:{
                    trigger:'.section2Inner',
                    start:"+100+top bottom",
                
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
            },'<')
            
        
        
        
        
            
            return function() {
                tl.kill(); 
                // other cleanup code can go here. 
            };
        },
        "(max-width:767px) and (min-width:400.1px)":()=>{
            console.log('under767')
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
                    start: '-150+top bottom',
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

            gsap.fromTo('.worldShadow',{
                opacity:0
            },{
                opacity:'100%',
                scrollTrigger:{
                
                    trigger:'.contentBox1',
                    start: '-150+top bottom',
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
            
            var section2tl = gsap.timeline()
            section2tl.to('.section2InnerDeco',{
                
                scale:1,
                
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                y:0,
                scrollTrigger:{
                    trigger:'.section2Inner',
                    start:"top bottom",
              
                    end:'30px +240+center',
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
            },'<')
        
        
        
        
            
            return function() {
                tl.kill(); 
                // other cleanup code can go here. 
            };
        },
        "(max-width:400px)":()=>{
            console.log('under400')
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
                    start: '-150+top bottom',
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
                
                    trigger:'.worldShadow',
                    start: 'top bottom',
                    end:'bottom center',
                    scrub:true,
                    
                   
                
                }
            },"<")
        
            tl.fromTo('.travellerShadow',{
                opacity:0
            },{
                opacity:'100%',
                scrollTrigger:{
                
                    trigger:'.travellerShadow',
                    start: 'center center',
                    end:'bottom+=100 center',
                    scrub:true,
                   
                   
                }
            },"<")
        
            tl.fromTo('.flagShadow',{
                opacity:0
            },{
                opacity:'100%',
                scrollTrigger:{
            
                    trigger:'.flagShadow',
                    start: 'top center',
                    end:'bottom+=50 top-+50',
                    scrub:true,
                 
               
                }
            },"<")

            var section2tl = gsap.timeline()
            section2tl.to('.section2InnerDeco',{
                
                scale:1,
                
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                y:0,
                scrollTrigger:{
                    trigger:'.section2Inner',
                    start:"top bottom",
                  
                    end:'30px center',
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
            },'<')
        
        
            
            return function() {
                tl.kill(); 
                // other cleanup code can go here. 
            };
        }


        

        

        

    })
   

    gsap.to('.count', {
        ease:'none',duration:2, 
        scrambleText:{text:"212,837", chars:"0123456789",speed:1,},
        scrollTrigger:{
            trigger:'.count',
            start:"bottom bottom",
           
            
            
        
        }
    })

    gsap.to('.count2', {
        ease:'none',duration:1, 
        scrambleText:{text:"173,114.04", chars:"0123456789",speed:1,},
        scrollTrigger:{
            trigger:'.count2',
            start:"bottom bottom",
           
            
            
        
        }
    })

    gsap.to('.count3', {
        ease:'none',duration:1, 
        scrambleText:{text:"39,722.96", chars:"0123456789",speed:1,},
        scrollTrigger:{
            trigger:'.count3',
            start:"bottom bottom",
           
            
            
        
        }
    })




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

   


    gsap.fromTo('.section9',
    {
        background: "rgb(0,255,194)",
        background: "linear-gradient(0deg, rgba(0,255,194,1) 0%, rgba(66,134,222,1) 59%, rgba(137,6,252,1) 100%)",
        repeat:-1,
        
    
        
    },
        {
            background: "rgb(0,255,194)",
            background: "linear-gradient(360deg, rgba(0,255,194,1) 0%, rgba(66,134,222,1) 59%, rgba(137,6,252,1) 100%)",
            repeat:-1,
            duration:10,
            ease: "none",
            scrollTrigger:{
                trigger:'.section9',
                toggleActions:"play pause resume pause"
            }
        }

    );

    

    var fadeUp = document.querySelectorAll('.fadeUp')
    var fade = document.querySelectorAll('.fade')
    var fadeText = document.querySelectorAll('.fadeText')
    var stagFade = document.querySelectorAll('.stagFade')
    fadeUp.forEach(element => {
        gsap.from(element,{
            y:150,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:element,
               
                start:'top bottom'
            }
        })
    });
    fade.forEach(element => {
        gsap.from(element,{
            delay:0.5,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:element,
                
                start:'top bottom'
            }
        })
    });

    fadeText.forEach(element => {
        gsap.from(element,{
            delay:0.7,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:element,
              
                start:'top bottom'
            }
        })
    });
    gsap.from('.stagFade',{
        y:100,
        stagger: 0.15,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:'.stagFade',
            
            start:'top bottom'
        }
    })


    videoResponsive.forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            start: "center bottom",
          
            
            onEnter:()=>{
                if(element.played.length===0){
                    element.play();
                } 
            
            
            },


            
            toggleActions: "play none none none",
            
            
          });
    });
 
 


})









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

