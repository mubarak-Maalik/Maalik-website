import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(245,245,240,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(226,226,220,0.5)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#2B3990', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
            </svg>
          </div>
          <span style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a2e' }}>
            {lang === "ar" ? "مالك" : "Maalik"}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={toggleLanguage}
            style={{ padding: '6px 14px', fontSize: '13px', fontWeight: 600, borderRadius: '8px', border: '1px solid #e2e2dc', background: 'transparent', cursor: 'pointer', color: '#1a1a2e', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = '#2B3990'; (e.target as HTMLElement).style.color = '#2B3990'; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = '#e2e2dc'; (e.target as HTMLElement).style.color = '#1a1a2e'; }}
          >
            {t("nav.lang")}
          </button>
          <a
            href="#early-access"
            style={{ padding: '8px 16px', fontSize: '13px', fontWeight: 700, borderRadius: '8px', background: '#2B3990', color: 'white', textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.target as HTMLElement).style.background = '#1e2a6e'; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.background = '#2B3990'; }}
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </nav>
  );
}
