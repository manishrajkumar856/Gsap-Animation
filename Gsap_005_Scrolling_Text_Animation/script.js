function marqueAnimation() {
  window.addEventListener("wheel", (dets) => {
    console.log(dets.deltaY);
    if (dets.deltaY > 0) {
      gsap.to(".marquew-text", {
        transform: "translateX(-200%)",
        repeat: -1,
        duration: 8,
        ease: "none",
      });
      gsap.to(".marquew-text img", {
        rotate: 180,
      });
    } else {
      gsap.to(".marquew-text", {
        transform: "translateX(0%)",
        duration: 8,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".marquew-text img", {
        rotate: 0,
      });
    }
  });
}


marqueAnimation();