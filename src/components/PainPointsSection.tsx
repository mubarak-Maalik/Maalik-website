import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const painData = [
  { textKey: "pain.1", illustration: "/mobile-apps.svg", imgRight: true },
  { textKey: "pain.2", illustration: "/data-at-work.svg", imgRight: false },
  { textKey: "pain.3", illustration: "/wallet.svg", imgRight: true },
];

function PainPoint({ textKey, illustration, imgRight, index }: { textKey: string; illustration: string; imgRight: boolean; index: number }) {
  const { t, lang } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const textEl = (
    <h2 style={{
      fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
      fontWeight: 800,
      color: '#1a1a2e',
      lineHeight: 1.2,
      margin: 0,
      textAlign: 'center',
    }}>
      {t(textKey)}
    </h2>
  );

  const imgEl = (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={illustration} alt="" style={{ width: '100%', maxWidth: '260px', height: 'auto' }} />
    </div>
  );

  // On mobile: always image on top, text below
  // On desktop: alternate imgRight/imgLeft
  const desktopLeft = imgRight ? textEl : imgEl;
  const desktopRight = imgRight ? imgEl : textEl;

  return (
    <div ref={ref} style={{
      padding: '60px 0',
      borderBottom: index < 2 ? '1px solid #f0f0ec' : 'none',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
    }}>
      {/* Mobile layout */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }} className="pain-mobile">
        {imgEl}
        {textEl}
      </div>

      {/* Desktop layout */}
      <div style={{ display: 'none', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', direction: lang === 'ar' ? 'rtl' : 'ltr' }} className="pain-desktop">
        {desktopLeft}
        {desktopRight}
      </div>
    </div>
  );
}

export default function PainPointsSection() {
  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .pain-desktop { display: grid !important; }
          .pain-mobile { display: none !important; }
        }
      `}</style>
      <section style={{ padding: '20px 0' }}>
        <div className="container">
          {painData.map((item, i) => (
            <PainPoint key={item.textKey} textKey={item.textKey} illustration={item.illustration} imgRight={item.imgRight} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
