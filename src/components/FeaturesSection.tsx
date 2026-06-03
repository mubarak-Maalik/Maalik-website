import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import PhoneIllustration from "./PhoneIllustration";

const features = [
  { titleKey: "features.1.title", descKey: "features.1.desc", icon: "🏦" },
  { titleKey: "features.2.title", descKey: "features.2.desc", icon: "🧠" },
  { titleKey: "features.3.title", descKey: "features.3.desc", icon: "📋" },
  { titleKey: "features.4.title", descKey: "features.4.desc", icon: "📈" },
  { titleKey: "features.5.title", descKey: "features.5.desc", icon: "🎯" },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div ref={ref} style={{
      display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px 0',
      borderBottom: '1px solid #f0f0ec',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
      transition: `all 0.5s cubic-bezier(0.23, 1, 0.32, 1) ${index * 80}ms`,
    }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#eef0f8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
        {feature.icon}
      </div>
      <div>
        <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a2e', margin: '0 0 4px' }}>{t(feature.titleKey)}</h3>
        <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{t(feature.descKey)}</p>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const { t, lang } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '60px', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#1a1a2e' }}>{t("features.title")}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div style={{ order: lang === 'ar' ? 2 : 1 }}>
            {features.map((f, i) => <FeatureCard key={f.titleKey} feature={f} index={i} />)}
          </div>
          <div className="phone-illustration" style={{ order: lang === 'ar' ? 1 : 2, justifyContent: 'center' }}>
            <PhoneIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
