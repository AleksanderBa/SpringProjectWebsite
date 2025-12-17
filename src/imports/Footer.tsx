function Info() {
  return (
    <div className="absolute bg-[#003d73] content-stretch flex gap-[240px] items-center justify-center leading-[0] left-1/2 not-italic text-[24px] text-nowrap text-white top-[calc(50%-406px)] translate-x-[-50%] translate-y-[-50%] w-[1920px]" data-name="Info">
      <div className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0">
        <p className="leading-[normal] mb-0">Naturhistorisk Museum</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic">
          <span>
            {`Wilhelm Meyers Allé 10  `}
            <br aria-hidden="true" />
            {`Universitetsparken  `}
            <br aria-hidden="true" />
            {`8000 Aarhus C  `}
            <br aria-hidden="true" />
            {`Tlf 86 12 97 77  `}
            <br aria-hidden="true" />
          </span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="mailto:nm@nathist.dk">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic" href="mailto:nm@nathist.dk">
              nm@nathist.dk
            </span>
          </a>
        </p>
      </div>
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0">
        <p className="font-['Inter:Bold',sans-serif] font-bold mb-0 not-italic">Opening hours</p>
        <p className="mb-0">Monday: Closed</p>
        <p className="mb-0">Tuesday: 09-16</p>
        <p className="mb-0">Wednesday: 09-21</p>
        <p className="mb-0">Thursday - Sunday: 09-16</p>
        <p>Closed: 1. jan. and 24., 25. and 31. dec.</p>
      </div>
      <div className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] mb-0 not-italic">Molslaboratoriet</p>
        <p className="leading-[normal]">
          <span>
            Strandkærvej 6, Femmøller
            <br aria-hidden="true" />
            8400 Ebeltoft
            <br aria-hidden="true" />
            Tlf.: 86 36 25 35 eller 86 12 97 77
            <br aria-hidden="true" />
          </span>
          <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline" href="mailto:molslab@molslab.dk">
            <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[normal]" href="mailto:molslab@molslab.dk">
              molslab@molslab.dk
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="relative size-full" data-name="Footer">
      <div className="absolute bg-[#003d73] h-[1082px] left-0 rounded-[41px] top-0 w-[1920px]" data-name="Footer" />
      <Info />
    </div>
  );
}