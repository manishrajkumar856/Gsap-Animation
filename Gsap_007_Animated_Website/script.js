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