let currentSplashArtIndex: 0 | 1 | 2 = 0;

function getCurrentSplashArtIndex() {
    return currentSplashArtIndex;
}

function setCurrentSplashArtIndex(newValue: 0 | 1 | 2) {
    currentSplashArtIndex = newValue;
}

export const sessionMemory = {
    getCurrentSplashArtIndex,
    setCurrentSplashArtIndex
}