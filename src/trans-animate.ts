import gsap from 'gsap';
import { sessionMemory } from './session-memory';

const splashArtWidth: number = 350;
const splashArtGapWidth: number = 50;
let currentSplashArtIndex = sessionMemory.getCurrentSplashArtIndex();

function slideInNicoletteBanner() {
    gsap.to("#NIC", {
        y: "0%"
    })
    gsap.to("#OLE", {
        y: "0%"
    })
    gsap.to("#TTE", {
        x: "0%"
    })
}

function slideOutNicoletteBanner(instant: boolean = false) {
    gsap.to("#NIC", {
        y: "120%",
        duration: (instant ? 0 : 1)
    })
    gsap.to("#OLE", {
        y: "-120%",
        duration: (instant ? 0 : 1)
    })
    gsap.to("#TTE", {
        x: "120%",
        duration: (instant ? 0 : 1)
    })
}

function slideSplashHero() {
    currentSplashArtIndex = sessionMemory.getCurrentSplashArtIndex();
    gsap.to(".splash-art", {
        x: ((splashArtWidth + splashArtGapWidth) * -currentSplashArtIndex),
        duration: 0.3
    });
}

export const transAnimate = {
    slideInNicoletteBanner,
    slideOutNicoletteBanner,
    slideSplashHero
}