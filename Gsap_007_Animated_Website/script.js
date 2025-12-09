// function splittedText() {
//   const h1 = document.querySelector("h1");
//   const splittedText = h1.textContent.split("");
//   const halfText = Math.floor(splittedText.length/2);

//   console.log(halfText)
//   let clutter = "";
//   splittedText.forEach((text, idx) => {
//     if(idx <= halfText){
//       clutter += `<span class="one-half">${text}</span>`;
//     }
//     else{
//       clutter += `<span class="second-half">${text}</span>`;
//     }
//   });

//   h1.innerHTML = clutter;
// }


// splittedText();
// gsap.from("h1 .one-half",{
//   opacity: 0,
//   y: 50,
//   delay: 0.5,
//   duration: 0.6,
//   stagger: 0.3,
// })

// gsap.from("h1 .second-half",{
//   opacity: 0,
//   y: 50,
//   delay: 0.5,
//   duration: 0.6,
//   stagger: -0.3,
// })

function animation01(){
    const tl = gsap.timeline();

tl.from(".header-sec .logo",{
    y: -30,
    opacity: 0,
    delay: 0.71,
    duration: 0.5,

})

tl.from(".header-sec .links a, .header-sec .nav-btn",{
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
})


tl.from(".hero-section .text-sec h1",{
    x: -300,
    opacity: 0,
    duration: 0.5,
})

tl.from(".hero-section .text-sec p",{
    x: -100,
    opacity: 0,
    duration: 0.4,
})


tl.from(".text-sec .btn-sec",{
    x: -50,
    opacity: 0,
    duration: 0.4,
})

tl.from(".hero-section .img-sec",{
    x: 50,
    opacity: 0,
    duration: 0.5,
}, "-=1")

}


function animation02(){
    tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: ".sec-01",
            scroller: "body",
            start: "top 60%",
            end: "top -50%",
            markers: true,
            scrub: 1,
        },
        stagger: 0.5,
    })

    tl2.from(".sec-01 .ser-text-sec",{
        y: -50,
        duration: 0.4,
        opacity: 0,

    })

    tl2.from(".sec-01 .servics-container .line1.left",{
        x: -200,
        duration: 1,
        opacity: 0,
    },"elem1")

    tl2.from(".sec-01 .servics-container .line1.right",{
        x: 200,
        duration: 1,
        opacity: 0,
    },"elem1")

    tl2.from(".sec-01 .servics-container .line2.left",{
        x: -200,
        duration: 1,
        opacity: 0,
    },"elem2")

    tl2.from(".sec-01 .servics-container .line2.right",{
        x: 200,
        duration: 1,
        opacity: 0,
    },"elem2")


    tl2.from(".sec-01 .full-box-cont h3, .sec-01 .full-box-cont p",{
        x: -50,
        opacity: 0,
        stagger: 0.2,
    })

    
    tl2.from(".sec-01 .full-box-cont .btn-sec",{
        x: -50,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger:{
            trigger: ".sec-01 button",
            scroller: "body",
            start: "top 60%",
            end: "top 70%",
            markers: true,
            scrub: 2,
        }
    },"-=1")

    tl2.from(".sec-01 .full-box-cont img",{
        x: 50,
        opacity: 0,
        stagger: 0.2,
    })
}

function animation03(){
    tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: ".sec-03 .ser-text-sec",
            scroller: "body",
            
            start: "top 60%",
            end: "top: 40%",
            scrub: 2,
        },
    })

    tl3.from(".sec-03 .ser-text-sec",{
        y: -50,
        opacity: 0,
        duration: 1,
    })

    tl3.from(".sec-03 .text-div p",{
        Y: -50,
        opacity: 0,
        duration: 1,
        stagger:1,
    })

    tl3.from(".sec-03 .text-div",{
        x: -90,
        opacity: 0,
        duration: 0.5,
    })

}

animation01();
animation02();
animation03();