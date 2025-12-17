import svgPaths from "./svg-gshr5vnkae";
import imgNaturhistoriskMuseumLogo from "figma:asset/8aa0d717f8eefaf52caca3406bd13c7aeeee3466.png";
import imgImage1 from "figma:asset/85a93dff094cd92eb9de11fb58d10e7863aa8116.png";

function Navigation() {
  return (
    <nav className="absolute top-[40px] right-[120px] flex gap-[28px] items-start text-[24px] text-black z-10">
      <p className="cursor-pointer">Home</p>
      <p className="cursor-pointer">Visit</p>
      <p className="cursor-pointer">{`Exhibitions `}</p>
      <p className="cursor-pointer">Mols laboratory</p>
      <p className="cursor-pointer">About</p>
    </nav>
  );
}

function Hero() {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <section className="relative w-full h-[200px] mb-8">
      {/* Logo */}
      <div 
        data-logo="true"
        className="absolute left-[50px] top-[45px] w-[280px] h-[70px] cursor-pointer hover:opacity-80 transition-opacity z-10"
        onClick={handleLogoClick}
      >
        <img alt="Naturhistorisk Museum Logo" className="w-full h-full object-cover" src={imgNaturhistoriskMuseumLogo} />
      </div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Title */}
      <div className="absolute left-[50px] top-[145px]">
        <h1 className="text-[48px] font-['Inter:Bold',sans-serif] text-black leading-tight">
          New in the "The Global Backyard"
        </h1>
      </div>
    </section>
  );
}

function ExhibitionContent() {
  return (
    <section className="relative w-full px-12 pb-8">
      <div className="max-w-[1920px] mx-auto">
        {/* Large Exhibition Image */}
        <div className="w-full max-w-[900px] mx-auto mb-8">
          <img alt="Endangered Predators Exhibition" className="w-full h-auto" src={imgImage1} />
        </div>
        
        {/* Exhibition Description */}
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[48px] font-['Inter:Bold',sans-serif] text-black mb-6 leading-tight">
            Endangered Predators of Denmark
          </h2>
          <p className="text-[22px] font-['Inter:Bold',sans-serif] text-black leading-relaxed">
            Go on the journey to learn about amazing predators of Denmark. Learn about their hunting routines and their amazing skills. Discover what lead to these amazing animals being put on the Endangered List. Before you feel sadness of them being endangered know there's a way to help these amazing animals. Take part of discovering the Denmark's Backyard of amazing and breathtaking Predators.
          </p>
        </div>
      </div>
    </section>
  );
}

function SocialIcons() {
  return (
    <div className="flex gap-[20px] items-center justify-center py-4">
      {/* Trip */}
      <div className="w-[60px] h-[60px] cursor-pointer hover:opacity-80 transition-opacity">
        <svg className="w-full h-full" fill="none" viewBox="0 0 101 65">
          <path d={svgPaths.p15f0f980} fill="#00AF87" stroke="#00AF87" strokeWidth="3.125" />
        </svg>
      </div>
      
      {/* Facebook */}
      <div className="w-[60px] h-[60px] cursor-pointer hover:opacity-80 transition-opacity">
        <svg className="w-full h-full" fill="none" viewBox="0 0 97 97">
          <path d={svgPaths.p35071b00} fill="#1877F2" stroke="#1877F2" strokeWidth="3.125" />
        </svg>
      </div>
      
      {/* Instagram */}
      <div className="w-[55px] h-[55px] cursor-pointer hover:opacity-80 transition-opacity">
        <svg className="w-full h-full" fill="none" viewBox="0 0 88 88">
          <path d={svgPaths.p2203580} fill="url(#paint0_radial_5_114_ex)" />
          <path d={svgPaths.p2203580} fill="url(#paint1_radial_5_114_ex)" />
          <path d={svgPaths.p2203580} fill="url(#paint2_radial_5_114_ex)" />
          <path d={svgPaths.p2dce1080} fill="white" />
          <path clipRule="evenodd" d={svgPaths.pa3d7c80} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pfb0ce80} fill="white" fillRule="evenodd" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(31.25 65.625) rotate(-55.3758) scale(79.7488)" gradientUnits="userSpaceOnUse" id="paint0_radial_5_114_ex" r="1">
              <stop stopColor="#B13589" />
              <stop offset="0.79309" stopColor="#C62F94" />
              <stop offset="1" stopColor="#8A3AC8" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(28.125 90.625) rotate(-65.1363) scale(70.6069)" gradientUnits="userSpaceOnUse" id="paint1_radial_5_114_ex" r="1">
              <stop stopColor="#E0E8B7" />
              <stop offset="0.444662" stopColor="#FB8A2E" />
              <stop offset="0.71474" stopColor="#E2425C" />
              <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(-4.6875 3.125) rotate(-8.1301) scale(121.534 25.9949)" gradientUnits="userSpaceOnUse" id="paint2_radial_5_114_ex" r="1">
              <stop offset="0.156701" stopColor="#406ADC" />
              <stop offset="0.467799" stopColor="#6A45BE" />
              <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      
      {/* LinkedIn */}
      <div className="w-[60px] h-[60px] cursor-pointer hover:opacity-80 transition-opacity">
        <svg className="w-full h-full" fill="none" viewBox="0 0 97 97">
          <path d={svgPaths.p2a2a4200} fill="#0072B1" stroke="#0072B1" strokeWidth="3.125" />
        </svg>
      </div>
      
      {/* YouTube */}
      <div className="w-[60px] h-[60px] cursor-pointer hover:opacity-80 transition-opacity">
        <svg className="w-full h-full" fill="none" viewBox="0 0 97 70">
          <path d={svgPaths.p1356e600} fill="#E62117" stroke="#E62117" strokeWidth="3.125" />
        </svg>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative w-full mt-8">
      <div className="bg-[#003d73] rounded-[30px] w-full px-12 py-8">
        <div className="max-w-[1920px] mx-auto flex gap-[120px] items-start justify-center text-white text-[18px]">
          {/* Museum Info */}
          <div>
            <p className="font-['Inter:Bold',sans-serif] mb-3">Naturhistorisk Museum</p>
            <div className="font-['Inter:Medium',sans-serif] leading-relaxed">
              <p className="mb-0">Wilhelm Meyers Allé 10</p>
              <p className="mb-0">Universitetsparken</p>
              <p className="mb-0">8000 Aarhus C</p>
              <p className="mb-0">Tlf 86 12 97 77</p>
              <a className="underline cursor-pointer hover:opacity-80 transition-opacity" href="mailto:nm@nathist.dk">
                nm@nathist.dk
              </a>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div>
            <p className="font-['Inter:Bold',sans-serif] mb-3">Opening hours</p>
            <div className="font-['Inter:Medium',sans-serif] leading-relaxed">
              <p className="mb-0">Monday: Closed</p>
              <p className="mb-0">Tuesday: 09-16</p>
              <p className="mb-0">Wednesday: 09-21</p>
              <p className="mb-0">Thursday - Sunday: 09-16</p>
              <p className="mb-0">Closed: 1. jan. and 24., 25. and 31. dec.</p>
            </div>
          </div>
          
          {/* Molslaboratoriet */}
          <div>
            <p className="font-['Inter:Bold',sans-serif] mb-3">Molslaboratoriet</p>
            <div className="font-['Inter:Medium',sans-serif] leading-relaxed">
              <p className="mb-0">Strandkærvej 6, Femmøller</p>
              <p className="mb-0">8400 Ebeltoft</p>
              <p className="mb-0">Tlf.: 86 36 25 35 eller 86 12 97 77</p>
              <a className="underline cursor-pointer hover:opacity-80 transition-opacity" href="mailto:molslab@molslab.dk">
                molslab@molslab.dk
              </a>
            </div>
          </div>
        </div>
        
        {/* Social Icons */}
        <SocialIcons />
      </div>
    </footer>
  );
}

export default function NewInTheGlobalBackyard() {
  return (
    <div className="bg-white flex justify-center min-h-screen w-full overflow-x-hidden">
      <div className="relative w-[1920px] max-h-[1080px] overflow-y-auto">
        <Hero />
        <ExhibitionContent />
        <Footer />
      </div>
    </div>
  );
}