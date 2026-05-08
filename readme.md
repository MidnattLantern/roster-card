# Roster Card
Live link: [midnattlantern.github.io/roster-card](https://midnattlantern.github.io/roster-card/)

## About Roster Card
Roster card is an experimentation and R&D lineaging from [MultiCo Roster](https://midnattlantern.github.io/multico-roster/), to discover new creative ways to express and present artistic elements for MultiCo Roster through mutable vector graphics. This experimentation serves to support my personal ambition to design engaging user interactions and convince visitors/users through instinct. It's also part of vocational training in graphical design.

My history with graphical design range all the way back to 2017 (2015 with raster art), trained through junior high and self taught curiosity. Up until this project, my vector skills didn't stretch beyond Adobe Illustrator/ Affinity, and static SVG inline or img url import, as well as basic fill manipulation in css. This project dig deeper down the low-end source code of an SVG file, from editing id's and classes, to change the text content of a <text> element in JavaScript.

## Raster asset(s)
The featured images are a set of drawings pulled from [MultiCo Roster](https://midnattlantern.github.io/multico-roster/). It's been compressed from its lossless PNG-format to a resource friendly webp-format through Affinity. These are the hero images, so they are the main attraction of this project. Because these assets feature transparent pixels, I can test making a backdrop shadow that isn't a square. The width and height of the source material vary in width, height and aspect ratio, which is a problem for a layout design that demand a fixed rule, this can be solved using Affinity's document setup tool and set the width/ height from there.

The grid image is a screenshot of Blender's editor view, an appropriate background for a R&D project experimenting on graphical technicality.

## Vector asset(s)


## AI disclosure
I remain committed to distancing myself from AI and LLMs by minimizing my use of them. Claude may have been involved when looking up technical information, such as TypeScript flags or syntax, Vite documentation, or for grammatical consultation on paragraphs.

Generating a raster image through AI was part of the vocational training programme. This project dodged that task by raising ethical concerns (carbon emissions, uncompensated artist theft, etc.) with the teacher. This is not an outright rejection of generative AI and its inevitable use in professional life, but an act to reduce its use whenever possible, reserving generative AI until it's absolutely necessary while encouraging more ethical methods of creation.

In a theoretical scenario where I would resort to [OpenArt.ai](https://openart.ai/suite/create-image/byte-plus-seedream-4-5), I'd upload [this image](https://se.pinterest.com/pin/415738609356010366/) as reference, and give it the prompt _"Video game splash art, fusing western and east Asian 'anime', floral black pattern on the trenchcoat, add silver plates on the shoulders. Wind flowing toward the figure. Remove the hat, give the figure shoulder-long straight silver hair following the wind. Replace the cane with a naginata with Victorian characteristics, as tall as the figure, the blade pointing to the sky."_ From what I've heard, the more specific the prompt, the better the results, but the outcome could still go either way.

## Other notes
To access the code of an SVG file in VS code, right click the file in the explorer, select "Open With...", then select "Text Editor".

When using the SVG import as an image source, you're stuck with a static asset that cannot be mutated. Inline enable full customization and access to the path's id's. However, that would make your HTML or JavaScript messy and WET. To get the best of both worlds, Vite can import the SVG as a string, by adding `?raw` at the end of an SVG import. Make an SVG vessel (container) and fill that vessel with the SVG string import. [vite.dev/guide/assets](https://vite.dev/guide/assets)
``` JavaScript
// JavaScript
import mySVG from './assets/mySVG.svg?raw';

const mySVGVessel = document.createElement("div");
mySVGVessel.innerHTML = mySVG;
```

Exported SVG files, (As far as I'm aware) will have a default value of width and height of 100%. This means the SVG will be as large or small as its parent/ container.
``` JavaScript
// JavaScript
mySVGVessel.classList.add("my-svg-vessel");
```
``` css
/* css */
.my-svg-vessel {
    width: 100px; /* 10px or 10000px, the SVG will scale */
}
```

## Deployment
Roster card is hosted on Github pages. Deployment is done through the gh-pages node package. Whenever the project is ready for publicity, make sure your console is on the same directory as package.json (check with the `ls` command), then run the following command in the terminal:
``` zsh
npm run deploy
```

## Valuable lessions & what I leaned
When exporting a vector asset in Affinity, most shapes may be intended to be exported as general `<path>` elements, however, if they resemble shapes such as rectangle or circle, even after converting to curves in Affinity, the metadata may turn them into specific shapes grouped in a `<g>` tag with matrix transformations and lots of metadata, making the SVG hard to maintain and messy in the code editor. This is great for optimization, as for instance a rectangle with transformation metadata, may take less space than a general path element. However, if you intend to dive into the metadata, path may be prefferable. To address this, you need to check the "Flatten transforms" checkbox in the export view.

"Flatten transforms" is checked:
![export view, checking the "Flatten transforms" box](./readme-images/flatten-transfomration-setting.png)

SVG meta data is messy and hard to read unless you intentionally need the groups and shape specific elements:
![SVG meta data without flattened transforms](./readme-images/unflattened-export.png)

SVG meta data is clean and easily maintainable, preferable if you only need general path elements:
![SVG meta dta with flattened transforms](./readme-images/flattened-export.png)