var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});
document.addEventListener("mousemove", function (dets) {
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "120px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    //markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

// In your script.js file
gsap.registerPlugin(ScrollTrigger);

// Select the "About Me" container
const aboutMeContainer = document.getElementById("about-me");

// Create a GSAP timeline for the animation
const tlAboutMe = gsap.timeline({
  scrollTrigger: {
    trigger: aboutMeContainer,
    start: "top 80%", // Adjust this value to control when the animation starts
    toggleActions: "play none none reverse",
  },
});

// Define the animation for the "About Me" container
tlAboutMe.from(aboutMeContainer, {
  opacity: 0,
  y: 100, // Adjust this value to control the distance from the bottom
  duration: 1.5, // Adjust the duration as needed
});

// CSS for initial state of the "About Me" container
aboutMeContainer.style.opacity = 0;
aboutMeContainer.style.transform = "translateY(100px)";

// In your script.js file
gsap.registerPlugin(ScrollTrigger);

// Select all the cards (adjust the selector as needed)
const cards = document.querySelectorAll(".card");

// Loop through each card and create a GSAP timeline for the animation
cards.forEach((card, index) => {
  const tlCard = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: "top 80%", // Adjust this value to control when the animation starts for each card
      toggleActions: "play none none reverse",
    },
  });

  // Define the animation for each card
  tlCard.from(card, {
    opacity: 0,
    y: 100, // Adjust this value to control the distance from the bottom for each card
    duration: 1, // Adjust the duration as needed
    delay: index * 0.2, // Add a delay to stagger the animations (optional)
  });

  // CSS for the initial state of each card
  card.style.opacity = 0;
  card.style.transform = "translateY(100px)";
});


