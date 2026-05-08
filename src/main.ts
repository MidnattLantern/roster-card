import gsap from 'gsap';
import './style.scss'
import NicoletteSVG from "/nicolette-name.svg?raw";
import SlantedHeroSVG from "./assets/slanted-hero.svg?raw";
import SlantedHeroIndexSVG from "./assets/slanted-hero-index.svg?raw";
import BulletdiamondSVG from "./assets/bulletdiamond2.svg?raw";

const splashArtWidth: number = 350;
const splashArtGapWidth: number = 50;
let currentSplashArtIndex: 0 | 1 | 2 = 0;

const viewport = document.getElementById("main");

const splashArtFrame = document.createElement("figure");
splashArtFrame.classList.add("splash-art-frame");
splashArtFrame.id = "splashArtFrame";

// ==========
// Splash art
// ==========
const splashArt1 = document.createElement("img");
splashArt1.src = "./nicolette-compressed-1.webp";
splashArt1.id = "splashArt1";
splashArt1.classList.add("splash-art");

const splashArt2 = document.createElement("img");
splashArt2.src = "./nicolette-compressed-2.webp";
splashArt2.id = "splashArt2";
splashArt2.classList.add("splash-art");

const splashArt3 = document.createElement("img");
splashArt3.src = "./nicolette-compressed-3.webp";
splashArt3.id = "splashArt3";
splashArt3.classList.add("splash-art");

splashArtFrame.append(splashArt1, splashArt2, splashArt3);
// ==========

// ====================
// Splash art selectors
// ====================
const splashArtSelectors = document.createElement("div");
splashArtSelectors.classList.add("splash-art-selectors");

const splashArtButton1 = document.createElement("button");
splashArtButton1.textContent = "splash hero 0";
splashArtButton1.addEventListener("click", () => {
    handleScrollSplashArt(0);
})

const splashArtButton2 = document.createElement("button");
splashArtButton2.textContent = "splash hero 1";
splashArtButton2.addEventListener("click", () => {
    handleScrollSplashArt(1);
})

const splashArtButton3 = document.createElement("button");
splashArtButton3.textContent = "splash hero 2";
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

const slantedStripeHeroWrapper = document.createElement("div");
slantedStripeHeroWrapper.classList.add("slanted-stripe-hero-wrapper");

const svgHeroContainer = document.createElement("div");
svgHeroContainer.innerHTML = SlantedHeroSVG;

const svgHeroIndexContainer = document.createElement("div");
svgHeroIndexContainer.innerHTML = SlantedHeroIndexSVG;
let slantedHeroIndexValue: null | SVGTextContentElement = null;

document.addEventListener("DOMContentLoaded", () => {
    slantedHeroIndexValue = document.querySelector<SVGTextElement>("#slanted-hero-index-value");
    if (!slantedHeroIndexValue) return;
    slantedHeroIndexValue.textContent = currentSplashArtIndex.toString();

    // initialization
    gsap.to("#NIC", {
        y: "120%"
    })
    gsap.to("#OLE", {
        y: "-120%"
    })
    gsap.to("#TTE", {
        x: "120%"
    })
});

const bulletdiamond = document.createElement("div");
bulletdiamond.innerHTML = BulletdiamondSVG;

slantedStripeHeroWrapper.append(svgHeroContainer, svgHeroIndexContainer, bulletdiamond);
// ===

viewport?.append(splashArtFrame, splashArtSelectors, svgNicoletteBanner, slantedStripeHeroWrapper);

function handleScrollSplashArt(setIndex: 0 | 1 | 2 ) {
    currentSplashArtIndex = setIndex;
    gsap.to(".splash-art", {
        x: ((splashArtWidth + splashArtGapWidth) * -currentSplashArtIndex),
        duration: 0.3
    });

    gsap.to("#NIC", {
        y: "0%"
    })
    gsap.to("#OLE", {
        y: "0%"
    })
    gsap.to("#TTE", {
        x: "0%"
    })

    if (!slantedHeroIndexValue) return;
    slantedHeroIndexValue.textContent = setIndex.toString();
}
