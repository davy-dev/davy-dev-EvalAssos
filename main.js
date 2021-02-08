//===================DOM====================================

const card1=document.querySelector('.cardNiv1')
const card2=document.querySelector('.cardNiv2')
const hr=document.querySelector('.hr')
const hr2=document.querySelector('.hr2')
const ligne1=document.querySelector('.ligne1')
const ligne2=document.querySelector('.ligne2')
const ligne3=document.querySelector('.ligne3')
const circle=document.querySelector('#ellipse')
const logo=document.querySelector('.logo')
const nav=document.querySelector('.nav')
const courses=document.querySelector('.courses')
const contain=document.querySelector('body')

//==============================================================

const tl= gsap.timeline()
const animMenue=gsap.timeline()


animMenue.pause()


//========== Animation Logo for the  presentation==========

 tl
.from(ligne1,1,{x:200,opacity:0})
.from(ligne2,0.6,{x:-200,opacity:0})
.from(ligne3,0.6,{x:200,opacity:0})
.from(circle,0.6,{autoAlpha:-1})

//=========================================================


//=============Animations cards ===========================

gsap.from(card1,{
    scrollTrigger:'.prix',
   scale: 0,
   autoAlpha:0,duration: 1
})

gsap.from(card2,{
    scrollTrigger:card2,
    start:"start center",
    y: 200,
    autoAlpha:0,duration: 1.5
})

gsap.from(hr,{
scrollTrigger:hr,
   scale: 0,
   autoAlpha:0,duration: 3
})

gsap.from(hr2,2,{
scrollTrigger:hr2,
    scale:0,
   autoAlpha:0,duration: 2,
   
   
})

//========================================================


//=========Animation logo and toggle menue============

animMenue
     .to(ligne2,0.2,{y:"-=10",opacity:0})
     .to(ligne3,0.2,{y:"-=34",opacity:0})
     .to(ligne1,0.2,{rotate:88,y:"10", scaleX:"0.4" })
     .from(nav,{scaleY:0,duration:0.4})
     
    

 logo.addEventListener('click',()=>{
     
       
    animMenue.play()
    
    
})

courses.addEventListener('click',()=>{
    animMenue.reverse()
    
})

window.addEventListener('scroll',()=>{

    animMenue.reverse()
    

})

//======================================================



// ===================== animation Cards when over On===============

if(window.matchMedia("(min-width: 1024px)").matches){




   
    animMenue.pause(animMenue)
    nav.style.transform="scale(1)"


card1.addEventListener('mouseenter',()=>{

        gsap.to(card1,{
        duration:1,
        scale:1.1,
        ease:"elastic(4,0.5)"})

        gsap.to(card2,{
        duration:1,
        scale:0.8,
        ease:"elastic(4,0.5)"
    

        })


    })




    card2.addEventListener('mouseenter',()=>{

        gsap.to(card2,{
        duration:1.1,
        scale:1,
        ease:"elastic(4,0.9)"})

        gsap.to(card1,{
        duration:1,
        scale:0.8,
        ease:"elastic(4,0.9)"
    

        })


    })

    
    
    
}

//========animation on Scroll===========================


if(window.matchMedia("(min-width:576px)").matches){

   

const action=gsap.timeline({defaults:{duartion:1},
scrollTrigger:{
    trigger:"#path",
    scrub:2,
    start:"top 300px",
    end:"bottom 300px",
   
    
    
}})
.from("#path",{
    drawSVG:0,
    duration:1,
    opacity:0.2})




}


    


   






