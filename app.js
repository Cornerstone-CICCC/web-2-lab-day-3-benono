gsap.registerPlugin(ScrollTrigger);

// section1
let section1TimeLine = gsap.timeline();
section1TimeLine
  .from(".section1 h1 span:first-child", {
    x: "-100vw",
    opacity: 0,
    duration: 1,
  })
  .from(
    ".section1 h1 span:nth-child(2)",
    {
      x: "100vw",
      opacity: 0,
      duration: 1,
    },
    "<"
  )
  .from(".section1 p", {
    rotation: 90,
    opacity: 0,
    transformOrigin: "left top",
  })
  .from(".section1 img", {
    y: "100vh",
    opacity: 0,
  });

// section2
let section2TimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "center 80%",
    end: "top top",
    toggleActions: "play reverse play reverse",
    scrub: 1,
  },
});
section2TimeLine
  .from(".section2 h2 span", {
    y: "-100vh",
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  })
  .from(".section2 p", {
    opacity: 0,
    duration: 1,
    rotationY: 90,
    ease: "power2.out",
  });

let horizontalSections = gsap.utils.toArray(".horizontal-sections section");
let horizontalScroll = gsap.to(horizontalSections, {
  xPercent: -100 * (horizontalSections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-sections",
    pin: true,
    scrub: 1,
    snap: 1 / (horizontalSections.length - 1),
    end: () =>
      "+=" + document.querySelector(".horizontal-sections").offsetWidth,
  },
});

let section3TimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "center 80%",
    end: "center center",
    toggleActions: "play reverse play reverse",
    scrub: 1,
  },
});
section3TimeLine
  .from(".section3 h2 ", {
    y: "-100",
    x: "-100vw",
    opacity: 0,
  })
  .fromTo(
    ".section3 p span",
    {
      y: "100vh",
      ease: "power2.out",
    },
    {
      y: "0",
      backgroundColor: "white",
      color: "black",
      stagger: 0.2,
    }
  );

gsap.from(".section4 .portfolio-item", {
  x: "100vh",
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".section4",
    containerAnimation: horizontalScroll,
    start: "left center",
    end: "right bottom",
    toggleActions: "play reverse play reverse",
    scrub: 1,
  },
});

// section 5
let section5TimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top center",
    end: "center center",
    toggleActions: "play reverse play reverse",
    scrub: 1,
  },
});

// Split text into individual characters
let chars = gsap.utils.toArray(".section5 h2").flatMap((h2) => {
  return h2.textContent.split("").map((char) => {
    let span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    return span;
  });
});

// Clear the original text content
document.querySelector(".section5 h2").textContent = "";
// Append each character to the h2 element
for (let i = 0; i < chars.length; i++) {
  document.querySelector(".section5 h2").appendChild(chars[i]);
}

section5TimeLine
  .from(chars, {
    y: -200,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  })
  .from(".section5 p", {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
  })
  .from(".section5 .contact-btn", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: "power2.out",
  })
  .fromTo(
    ".section5",
    {
      backgroundPosition: "200% 90%",
    },
    {
      backgroundPosition: "90% 90%",
      backgroundColor: "black",
      duration: 1,
      ease: "power2.inOut",
    }
  );
