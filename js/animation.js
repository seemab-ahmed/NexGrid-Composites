// plane requsest animation 
document.addEventListener('DOMContentLoaded', function () {
    const viewportWidth = window.innerWidth;
    const animationSettings = viewportWidth > 1400 ? 
        { x: "-100vw", xEnd: "100vw" } : 
        { x: "-50vw", xEnd: "50vw" };

    gsap.fromTo(".request-btm-img img",
        {
            x: animationSettings.x // Start position based on viewport width
        },
        {
            x: animationSettings.xEnd, // End position based on viewport width
            scrollTrigger: {
                trigger: ".request-btm-img",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            },
            duration: 4
        }
    );
});
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin if using GSAP 3

    gsap.fromTo(".stats-right", 
        { 
            y: "100%", // Starting position (slide in from below)
        }, 
        { 
            y: "0%", // Ending position (slide to normal position)
            duration: 1, // Duration of the animation
            scrollTrigger: {
                trigger: ".stats-right", // Element that triggers the animation
                start: "top 120%", // Trigger the animation when the top of the element hits 80% from the top of the viewport
                once: true // Ensure the animation only happens once
            }
        }
    );
});
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a GSAP timeline for the animation
const bannerAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".banner-left", // Element that triggers the animation
        start: "top 80%", // Start when the top of the trigger is at 80% of viewport
        toggleActions: "play none none none", // Play animation only once when it comes into view
    }
});

// Animation sequence
bannerAnimation.from(".banner-left .pre-header", {
    x: -100, // Slide from left
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})
.from(".banner-left h1", {
    x: -100, // Slide from left
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.4") // Overlap animation by 0.4 seconds
.from(".banner-left .banner-detail", {
    x: -100, // Slide from left
    opacity: 0,
    duration: 1.,
    ease: "power3.out"
}, "-=0.4") // Overlap animation by 0.4 seconds

gsap.registerPlugin(ScrollTrigger);

// Create a GSAP timeline for left-side elements
const leftAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".transform-col-left", // Triggering element for left animation
        start: "top 80%", // Start when the top of the element is at 80% of the viewport height
        toggleActions: "play none none none", // Play only once
    }
});

// Animation for elements sliding from the left
leftAnimation.from(".transform-col-left", {
    x: -100, // Slide from left
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

// Create a GSAP timeline for right-side elements
const rightAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".transform-wrapper", // Triggering element for right animation
        start: "top 80%", // Start when the top of the element is at 80% of the viewport height
        toggleActions: "play none none none", // Play only once
    },
    scrollTrigger: {
        trigger: ".transform-wrapper", // Triggering element for right animation
        start: "top 80%", // Start when the top of the element is at 80% of the viewport height
        toggleActions: "play none none none", // Play only once
    }
});

// Animation for elements sliding from the right
rightAnimation.from(".transform-wrapper", {
    x: 100, // Slide from right
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});
const bottomAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-content", // Triggering element for the bottom animation
        start: "top 80%", // Start when the top of the element is at 80% of the viewport height
        toggleActions: "play none none none", // Play only once
    }
});

// Animation for elements sliding from the bottom
bottomAnimation.from(".about-content", {
    y: 100, // Slide from bottom
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});