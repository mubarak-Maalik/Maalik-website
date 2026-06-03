import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import MockDashboard from "./MockDashboard";

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ paddingTop: '100px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div style={{ order: lang === 'ar' ? 2 : 1 }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1a1a2e', lineHeight: 1.1, marginBottom: '24px' }}>
              {t("hero.title")}
            </h1>
            <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7, marginBottom: '32px', maxWidth: '480px' }}>
              {t("hero.subtitle")}
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', maxWidth: '460px', marginBottom: '16px' }}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("hero.email_placeholder")} required disabled={loading}
                style={{ flex: '1', minWidth: '200px', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e2dc', fontSize: '14px', outline: 'none', color: '#1a1a2e', background: 'white' }}
              />
              <button type="submit" disabled={loading}
                style={{ padding: '12px 20px', borderRadius: '10px', background: '#2B3990', color: 'white', fontWeight: 700, fontSize: '14px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap', opacity: loading ? 0.7 : 1 }}>
                {loading ? '...' : t("hero.submit")}
              </button>
            </form>
            {submitted && <p style={{ color: '#22C55E', fontSize: '13px', fontWeight: 600, marginBottom: '12px' }}>✓ {t("cta.success")}</p>}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span style={{ fontSize: '12px' }}>{t("hero.security")}</span>
            </div>
          </div>
          <div style={{ order: lang === 'ar' ? 1 : 2, display: 'flex', justifyContent: 'center' }}>
            <MockDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
