const fs = require('fs');
let code = fs.readFileSync('app/portafolio/page.tsx', 'utf8');
code = code.replace(
  'className="w-full lg:w-1/2 relative z-20 px-[var(--gutter-width)] lg:px-0 lg:pl-[var(--gutter-width)] pt-0 lg:pt-20"',
  'className="w-full lg:w-1/2 relative z-20 px-0 min-[601px]:px-[var(--gutter-width)] lg:px-0 lg:pl-[var(--gutter-width)] pt-0 lg:pt-20"'
);
fs.writeFileSync('app/portafolio/page.tsx', code);
console.log('page.tsx patched');

let carouselCode = fs.readFileSync('components/portafolio/HeroImageCarousel.tsx', 'utf8');
carouselCode = carouselCode.replace(
  'className="w-[calc(100vw-var(--gutter-width)*2)] lg:w-[calc(50vw-var(--gutter-width))] h-full flex-shrink-0 relative"',
  'className="w-[100vw] min-[601px]:w-[calc(100vw-var(--gutter-width)*2)] lg:w-[calc(50vw-var(--gutter-width))] h-full flex-shrink-0 relative"'
);
fs.writeFileSync('components/portafolio/HeroImageCarousel.tsx', carouselCode);
console.log('HeroImageCarousel.tsx patched');
