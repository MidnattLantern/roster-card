import './style.scss'
import NicoletteSVG from "/nicolette-name.svg?raw";
import ScrollFragmentSVG from "./assets/scroll-fragment.svg?raw";
import RosterCardDecorSVG from "./assets/roster-card-decor.svg?raw";
import HeroIndexSVG from "./assets/hero-index.svg?raw";
import { transAnimate } from './trans-animate';
import { sessionMemory } from './session-memory';
import { loopAnimate } from './loop-animate';

let currentSplashArtIndex = sessionMemory.getCurrentSplashArtIndex();
let heroIndexValue: null | SVGTextContentElement = null;

const viewport = document.getElementById("main");

const splashArtFrame = document.createElement("figure");
splashArtFrame.classList.add("splash-art-frame");
splashArtFrame.id = "splashArtFrame";

const splashArtCaption = document.createElement("figcaption");
splashArtCaption.textContent = "ニコレット";
splashArtCaption.setAttribute("aria-label", "Nicolette"); // don't slaughter the pronunciation

// ==========
// Splash art
// ==========
const splashArt1 = document.createElement("img");
splashArt1.src = "./nicolette-compressed-1.webp";
splashArt1.id = "splashArt1";
splashArt1.classList.add("splash-art");
splashArt1.setAttribute("loading", "lazy");

const splashArt2 = document.createElement("img");
splashArt2.src = "./nicolette-compressed-2.webp";
splashArt2.id = "splashArt2";
splashArt2.classList.add("splash-art");
splashArt2.setAttribute("loading", "lazy");

const splashArt3 = document.createElement("img");
splashArt3.src = "./nicolette-compressed-3.webp";
splashArt3.id = "splashArt3";
splashArt3.classList.add("splash-art");
splashArt3.setAttribute("loading", "lazy");

splashArtFrame.append(splashArt1, splashArt2, splashArt3, splashArtCaption);
// ==========

// ====================
// Splash art selectors
// ====================
const splashArtSelectors = document.createElement("div");
splashArtSelectors.classList.add("splash-art-selectors");

const splashArtButton1 = document.createElement("button");
splashArtButton1.textContent = "Splash hero 1";
splashArtButton1.classList.add("splash-preview-1");
splashArtButton1.addEventListener("click", () => {
    handleScrollSplashArt(0);
})

const splashArtButton2 = document.createElement("button");
splashArtButton2.textContent = " Splash hero 2";
splashArtButton2.classList.add("splash-preview-2");
splashArtButton2.addEventListener("click", () => {
    handleScrollSplashArt(1);
})

const splashArtButton3 = document.createElement("button");
splashArtButton3.textContent = "Splash hero 3";
splashArtButton3.classList.add("splash-preview-3");
splashArtButton3.addEventListener("click", () => {
    handleScrollSplashArt(2);
})

splashArtSelectors.append(splashArtButton1, splashArtButton2, splashArtButton3);
// ====================

// ===
// SVG
// ===
const svgNicoletteBanner = document.createElement("div");
svgNicoletteBanner.classList.add('svg-nicolette-banner');
svgNicoletteBanner.innerHTML = NicoletteSVG;
svgNicoletteBanner.addEventListener("wheel", () => {
    transAnimate.slideOutNicoletteBanner();
});
svgNicoletteBanner.addEventListener("click", () => {
    transAnimate.slideInNicoletteBanner();
});

// ===

// ==========
// Hero index
// ==========
const heroIndexWrapper = document.createElement("div");
heroIndexWrapper.classList.add("hero-index");
heroIndexWrapper.innerHTML = HeroIndexSVG;
// ==========

// ==============
// top left decor
// ==============
const topLeftDecorWrapper = document.createElement("div");
topLeftDecorWrapper.classList.add("top-left-decor");

const rosterCardDecor = document.createElement("div");
rosterCardDecor.classList.add("roster-card-decor");
rosterCardDecor.innerHTML = RosterCardDecorSVG;

topLeftDecorWrapper.append(
    rosterCardDecor,
    heroIndexWrapper
);
// ==============

// ===============
// Vertical scroll
// ===============
const verticalScrollLeft = document.createElement("div");
verticalScrollLeft.classList.add("vertical-scroll", "vertical-scroll__left");
for (let i = 0; i < 16; i++) {
    verticalScrollLeft.innerHTML += ScrollFragmentSVG;
}

const verticalScrollRight = document.createElement("div");
verticalScrollRight.classList.add("vertical-scroll", "vertical-scroll__right");
for (let i = 0; i < 16; i++) {
    verticalScrollRight.innerHTML += ScrollFragmentSVG;
}
// ===============

viewport?.append(
    splashArtFrame,
    splashArtSelectors,
    svgNicoletteBanner, 
    topLeftDecorWrapper,
    verticalScrollLeft,
    verticalScrollRight
);

function handleScrollSplashArt(setIndex: 0 | 1 | 2 ) {
    sessionMemory.setCurrentSplashArtIndex(setIndex);
    currentSplashArtIndex = sessionMemory.getCurrentSplashArtIndex();

    transAnimate.slideSplashHero();
    transAnimate.slideInNicoletteBanner();

    if (!heroIndexValue) return;
    heroIndexValue.textContent = setIndex.toString();
}

// ==============
// Initialization
// ==============
document.addEventListener("DOMContentLoaded", () => {
    heroIndexValue = document.querySelector<SVGTextElement>("#hero-index-value");
    if (!heroIndexValue) return;
    heroIndexValue.textContent = currentSplashArtIndex.toString();

    transAnimate.slideOutNicoletteBanner(true);

    loopAnimate.scrollHeroIndexPattern();
    loopAnimate.scrollVerticalEdgeLeftPattern();
    loopAnimate.scrollVerticalEdgeRightPattern();
});
// ==============