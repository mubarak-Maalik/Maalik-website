import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { titleKey: "how.step1.title", descKey: "how.step1.desc", number: "01", icon: "🔗" },
  { titleKey: "how.step2.title", descKey: "how.step2.desc", number: "02", icon: "🏷️" },
  { titleKey: "how.step3.title", descKey: "how.step3.desc", number: "03", icon: "📊" },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div ref={ref} style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${index * 150}ms`,
    }}>
      <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'linear-gradient(135deg, #2B3990, #1e2a6e)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontSize: '24px', boxShadow: '0 8px 24px rgba(43,57,144,0.2)' }}>
        {step.icon}
      </div>
      <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a2e', marginBottom: '8px' }}>{t(step.titleKey)}</h3>
      <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6, maxWidth: '220px' }}>{t(step.descKey)}</p>
    </div>
  );
}

export default function HowItWorksSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section style={{ padding: '80px 0', background: 'white' }}>
      <div className="container">
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '60px', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#1a1a2e' }}>{t("how.title")}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px' }}>
          {steps.map((step, i) => <StepCard key={step.number} step={step} index={i} />)}
        </div>
      </div>
    </section>
  );
}
