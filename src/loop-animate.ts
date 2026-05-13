import gsap from "gsap";

function scrollHeroIndexPattern() {
    gsap.to("#horizontal-scroller-pattern", {
        x: "",
        repeat: -1,
        duration: 5.0,
        ease: "none"
    })
}

function scrollVerticalEdgeLeftPattern() {
    gsap.to(".vertical-scroll__left", {
        y: 50,
        repeat: -1,
        duration: 1.5,
        ease: "none"
    });
}

function scrollVerticalEdgeRightPattern() {
    gsap.to(".vertical-scroll__right", {
        y: -50,
        repeat: -1,
        duration: 1.5,
        ease: "none"
    });
}

function spinGeneralDecor1() {
    gsap.to("#spinning", {
        rotate: -360,
        duration: 5,
        transformOrigin: "center",
        repeat: -1,
        ease: "none"
    })
}

export const loopAnimate = {
    scrollHeroIndexPattern,
    scrollVerticalEdgeLeftPattern,
    scrollVerticalEdgeRightPattern,
    spinGeneralDecor1
}