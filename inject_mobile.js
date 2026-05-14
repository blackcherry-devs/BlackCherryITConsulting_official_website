const fs = require('fs');
let code = fs.readFileSync('app/portafolio/page.tsx', 'utf8');

const projectsData = [
  {id: '01', name: 'GPAMEX', label: 'CONSTRUCCIÓN'},
  {id: '02', name: 'GRUPO COSIAM', label: 'INFRAESTRUCTURA'},
  {id: '03', name: 'ADELAI', label: 'TECNOLOGÍA'},
  {id: '04', name: 'CERATO', label: 'E-COMMERCE'},
  {id: '05', name: 'DANI SUACHÁ', label: 'DISEÑO'},
  {id: '06', name: 'GUERMAR', label: 'INDUSTRIAL'},
  {id: '07', name: 'LARS DYNAMICS', label: 'INDUSTRIAL'}
];

for (let p of projectsData) {
  const insertIndex = code.indexOf(`<div className="absolute top-8 left-8 text-white/30 font-headline font-black text-xl md:text-2xl z-10">${p.id}</div>`);
  
  if (insertIndex !== -1) {
    const mobileLayout = `
              {/* Mobile Centered Horizontal Layout (Visible ONLY on Mobile <= 600px) */}
              <div className="absolute inset-0 hidden max-[600px]:flex flex-col items-center justify-center z-30 p-6 text-center">
                <span className="font-headline font-medium text-[9px] tracking-[0.6em] uppercase text-white mb-4 opacity-70">
                  ${p.label}
                </span>
                <h3 className="font-headline font-black text-4xl text-white tracking-tighter uppercase leading-none mb-8 drop-shadow-lg">
                  ${p.name}
                </h3>
                <AnimatedButton 
                  asDiv 
                  theme="primary" 
                  className="opacity-100 scale-90"
                >
                  VER PROYECTO
                </AnimatedButton>
              </div>\n`;
    code = code.slice(0, insertIndex) + mobileLayout + code.slice(insertIndex);
  }
}

// Hide desktop text and button on mobile
code = code.replace(/<div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none">/g, 
  '<div className="absolute top-0 right-0 bottom-0 py-4 flex items-center justify-center z-30 pointer-events-none max-[600px]:hidden">');
code = code.replace(/<div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center">/g, 
  '<div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-50 flex items-center max-[600px]:hidden">');

fs.writeFileSync('app/portafolio/page.tsx', code);
console.log('Mobile layout injected');
