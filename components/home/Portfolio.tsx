import Link from "next/link";
import Image from "next/image";
import GridLines from "@/components/ui/GridLines";

export default function Portfolio() {
  const projects = [
    {
      id: "cerato",
      name: "Cerato",
      tags: "DISEÑO / E-COMMERCE / 2026",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb",
      bgClass: "hover:bg-[#8B090A]",
      hoverText: "group-hover:text-white"
    },
    {
      id: "adelai",
      name: "Adelai",
      tags: "DISEÑO / E-COMMERCE / 2026",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLkdMQk79PFyBNjIrv1vubo2RMq2nwLbc9POqHn-R8dYreFcYAkIrvbAr_fT0gDFBkAlqRmVAum3IcWC2rdqYPu1BHERzqMzEsLO55OTLVauR93VePLuu6qeClnB0_XFco1zBUE9_TyIXmqqlhe1AFjGhKcRPG0QdQH30HiMAQSsrGF3NGcBoQtUFMBFEopTlgDA_mcs7wT9Gab1V-NAM3q-Eeu2yyEccsrwsdTabKClKHRwwie2Br9MdEi0FqB1XZ1FNKQsNborp",
      bgClass: "hover:bg-on-surface",
      hoverText: "group-hover:text-white"
    },
    {
      id: "gpamex",
      name: "gpamex",
      tags: "SITIO WEB / 2025",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuyVGD6sPck3VMfPz7uyQrkY7JbFjNmFGquR8kOWJXMQ9QzJoP6aRi-YBoKxn34liISGDGNptdvVxpjASSZTn_FrPRZa2UAuUjrsCT-mHC9rdmhVu3nROT0mQuq6lnjcRJ2GBt36C8AhQJ4ru-xinb-YW40LfnwFh_We0nAw4U8zqNvw2nEAUzfFW4jsuBSBVC0BUxvWx56YHx7pFzKAGHx2AcOLjO1U-F7lxDOUlrjUUUDvQ7JEwg1A051OerN1O-6VfFZwX1OKk4",
      bgClass: "hover:bg-[#8B090A]",
      hoverText: "group-hover:text-white"
    },
    {
      id: "cosiam",
      name: "GRUPO COSIAM",
      tags: "DISEÑO / SITIO WEB / IA / 2026",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYu_vXX1OjkmWglodnptWz5x5ekEhxewB2x4Q6H4acKuceh_Hb8QwAS5NP9V_zRuUaJ1X2h2_33V55FfLLBdj1xmQ4AFv-VF364Y8HuJ7S8KnVierz4eHT_Sg9MyAkw4K-0MURLpWykvkupf5pHu224dSWkBvYwU-tDyn3QrOImEQTI2VoL63_F7NvJiOYP0u6ebnis7fDoHQremTSi0o9wNH115_v-ic2giv553uocrUvYSeQB57qVwKEoixvx3CjzmLrjlIJWcsb",
      bgClass: "hover:bg-on-surface",
      hoverText: "group-hover:text-white"
    }
  ];

  return (
    <section id="portafolio" className="w-full py-32 md:py-40 px-4 md:px-[7rem] bg-white relative overflow-hidden">
      <GridLines />
      <div className="px-4 md:px-12 mb-16 md:mb-24 relative z-10">
        <span className="font-headline font-black text-primary-container text-xs tracking-[0.3em] uppercase">03 / PORTAFOLIO</span>
        <h2 className="mt-8 font-headline font-bold text-5xl md:text-8xl tracking-tighter uppercase text-on-surface">Portafolio</h2>
      </div>
      
      <div className="flex flex-col divide-y divide-outline-variant/10 relative z-10">
        {projects.map((project, idx) => (
          <Link href={`/portafolio/${project.id}`} key={project.id} className={`group relative py-8 md:py-12 px-4 md:px-12 cursor-pointer transition-all duration-500 block ${project.bgClass}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-4 md:gap-0">
              <h3 className={`font-headline font-black text-4xl md:text-6xl uppercase tracking-tighter text-secondary ${project.hoverText} transition-colors`}>
                {project.name}
              </h3>
              <span className={`font-body text-[10px] md:text-xs uppercase tracking-widest text-secondary group-hover:text-white/60 transition-colors`}>
                {project.tags}
              </span>
            </div>
            {/* Desktop only video reveal */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-700 pointer-events-none overflow-hidden z-20 shadow-2xl rounded-xl bg-black">
              <video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
            </div>
          </Link>
        ))}
        
        <div className="pt-16 flex justify-start md:justify-end px-4 md:px-12">
          <Link className="inline-flex bg-primary-container hover:bg-primary text-white font-headline font-bold text-sm tracking-tight transition-all rounded-round-four items-center gap-4 group shadow-xl px-6 py-2 border border-primary-container uppercase min-h-[44px]" href="/portafolio">
            VER MÁS PROYECTOS 
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
              <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform font-bold text-primary-container">arrow_forward</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
