import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const painData = [
  { textKey: "pain.1", illustration: "/mobile-apps.svg", imgRight: true },
  { textKey: "pain.2", illustration: "/data-at-work.svg", imgRight: false },
  { textKey: "pain.3", illustration: "/wallet.svg", imgRight: true },
];

function PainPoint({ textKey, illustration, imgRight, index }: { textKey: string; illustration: string; imgRight: boolean; index: number }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div ref={ref} style={{
      padding: '60px 0',
      borderBottom: index < 2 ? '1px solid #f0f0ec' : 'none',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
    }}>
      {/* Desktop: side by side */}
      <div style={{
        display: 'none',
      }} className="pain-desktop">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }}>
          {imgRight ? (
            <>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#1a1a2e', lineHeight: 1.2, margin: 0 }}>
                {t(textKey)}
              </h2>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={illustration} alt="" style={{ width: '100%', maxWidth: '280px', height: 'auto' }} />
              </div>
            </>
          ) : (
            <>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={illustration} alt="" style={{ width: '100%', maxWidth: '280px', height: 'auto' }} />
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#1a1a2e', lineHeight: 1.2, margin: 0 }}>
                {t(textKey)}
              </h2>
            </>
          )}
        </div>
      </div>

      {/* Mobile: text only centered */}
      <div className="pain-mobile" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '35vh', padding: '0 16px' }}>
        <h2 style={{
          fontSize: 'clamp(1.4rem, 6vw, 2rem)',
          fontWeight: 800,
          color: '#1a1a2e',
          textAlign: 'center',
          maxWidth: '600px',
          lineHeight: 1.2,
          margin: 0,
        }}>
          {t(textKey)}
        </h2>
      </div>
    </div>
  );
}

export default function PainPointsSection() {
  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .pain-desktop { display: block !important; }
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
