import svgPaths from "./svg-viq9zh93we";
import imgRectangle1 from "figma:asset/a239b2037acbc9301b2fd951317d6271cff22ebc.png";
import imgNaturhistoriskMuseumLogo from "figma:asset/8aa0d717f8eefaf52caca3406bd13c7aeeee3466.png";
import imgRectangle2 from "figma:asset/e5a22f390b749fc63aae121ca333521ded027cf7.png";
import imgRectangle3 from "figma:asset/f03c10e472007a36948fdf507f0c39637697c8b7.png";
import { useState } from 'react';

function Navigation() {
  return (
    <nav className="absolute top-[40px] right-[120px] flex gap-[28px] items-start text-[24px] text-black z-10">
      <p className="cursor-pointer">Visit</p>
      <p className="cursor-pointer">{`Exhibitions `}</p>
      <p className="cursor-pointer">Mols laboratory</p>
      <p className="cursor-pointer">About</p>
    </nav>
  );
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [imgRectangle1, imgRectangle2, imgRectangle3];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <section className="relative w-full h-[680px]">
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
      
      {/* Carousel */}
      <div className="relative left-0 top-[160px] w-full h-[500px] flex items-center justify-center">
        <div className="relative w-[1800px] h-[500px]">
          <img alt="Hero image" className="w-full h-full object-cover transition-opacity duration-500" src={slides[currentSlide]} />
          
          {/* Left Arrow */}
          <div 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-[100px] h-[110px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity z-20"
          >
            <svg className="w-[60px] h-[100px] rotate-180" fill="none" viewBox="0 0 78 130">
              <path d={svgPaths.pe7b5000} fill="white" stroke="#003D73" strokeWidth="4" />
            </svg>
          </div>
          
          {/* Right Arrow */}
          <div 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-[100px] h-[110px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity z-20"
          >
            <svg className="w-[60px] h-[100px]" fill="none" viewBox="0 0 78 130">
              <path d={svgPaths.pe7b5000} fill="white" stroke="#003D73" strokeWidth="4" />
            </svg>
          </div>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white w-7' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FutureHumanSection() {
  return (
    <section className="relative w-full py-8 px-12">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left side - Image */}
          <div className="w-full h-[400px]">
            <img alt="Future Human Exhibition" className="w-full h-full object-cover" src={imgRectangle2} />
          </div>
          
          {/* Right side - Text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[48px] font-['Inter:Bold',sans-serif] leading-tight">Future Human</h2>
            <div className="text-[22px] font-['Inter:Bold',sans-serif] leading-relaxed">
              <p>Future Human is a special exhibition at the Natural History Museum Aarhus about how technology could change human bodies, brains, and lives in the future. It lets visitors explore scenarios like cloning, implants, genetic tweaks, and deepfakes through interactive stations, while raising ethical questions about identity, inequality, and who should decide what "improved" humans are.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TicketPricesSection() {
  return (
    <section className="relative w-full py-8 px-12">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left side - Text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[48px] font-['Inter:Bold',sans-serif] leading-tight">Ticket Prices</h2>
            <div className="text-[20px] font-['Inter:Bold',sans-serif] leading-relaxed">
              <p className="mb-2">Adults - 150 DKK</p>
              <p className="mb-2">Children and young people under 18: free admission.</p>
              <p className="mb-2">Students: about 90 DKK, and some guides note free entry for certain student categories (for example, some university students).</p>
              <p className="mb-2">Discounts and groups:</p>
              <ul className="list-disc pl-6">
                <li className="mb-1">
                  <span>Biology and geology students: free admission according to the VisitAarhus listing.​</span>
                </li>
                <li className="mb-1">
                  <span>Alumni discounts: Aarhus University Alumni Network members get about 40% off entrance for themselves and a companion.​</span>
                </li>
                <li>
                  <span>Groups (10+ people): reduced rate around 130 DKK per adult is mentioned in the VisitAarhus overview.</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="w-full h-[400px]">
            <img alt="Museum interior" className="w-full h-full object-cover" src={imgRectangle3} />
          </div>
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
          <path d={svgPaths.p2203580} fill="url(#paint0_radial_5_114)" />
          <path d={svgPaths.p2203580} fill="url(#paint1_radial_5_114)" />
          <path d={svgPaths.p2203580} fill="url(#paint2_radial_5_114)" />
          <path d={svgPaths.p2dce1080} fill="white" />
          <path clipRule="evenodd" d={svgPaths.pa3d7c80} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pfb0ce80} fill="white" fillRule="evenodd" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(31.25 65.625) rotate(-55.3758) scale(79.7488)" gradientUnits="userSpaceOnUse" id="paint0_radial_5_114" r="1">
              <stop stopColor="#B13589" />
              <stop offset="0.79309" stopColor="#C62F94" />
              <stop offset="1" stopColor="#8A3AC8" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(28.125 90.625) rotate(-65.1363) scale(70.6069)" gradientUnits="userSpaceOnUse" id="paint1_radial_5_114" r="1">
              <stop stopColor="#E0E8B7" />
              <stop offset="0.444662" stopColor="#FB8A2E" />
              <stop offset="0.71474" stopColor="#E2425C" />
              <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(-4.6875 3.125) rotate(-8.1301) scale(121.534 25.9949)" gradientUnits="userSpaceOnUse" id="paint2_radial_5_114" r="1">
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

export default function Home() {
  return (
    <div className="bg-white flex justify-center min-h-screen w-full overflow-x-hidden">
      <div className="relative w-[1920px] max-h-[1080px] overflow-y-auto">
        <Hero />
        <FutureHumanSection />
        <TicketPricesSection />
        <Footer />
      </div>
    </div>
  );
}