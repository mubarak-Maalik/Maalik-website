import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer style={{ padding: '40px 0', borderTop: '1px solid #e2e2dc' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#2B3990', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
            </div>
            <span style={{ fontSize: '16px', fontWeight: 800, color: '#1a1a2e' }}>{lang === "ar" ? "مالك" : "Maalik"}</span>
          </div>
          <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>{t("footer.tagline")}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
          <a href="https://getmaalik.com" style={{ fontSize: '13px', color: '#2B3990', fontWeight: 600, textDecoration: 'none' }}>getmaalik.com</a>
          <a href="mailto:info@getmaalik.com" style={{ fontSize: '13px', color: '#64748b', textDecoration: 'none' }}>info@getmaalik.com</a>
          <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>© 2026 Maalik</p>
        </div>
      </div>
    </footer>
  );
}
