import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function EarlyAccessSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="early-access" style={{ padding: '80px 0', background: 'linear-gradient(135deg, #2B3990, #1e2a6e)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div ref={ref} style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1)' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '32px', lineHeight: 1.2 }}>
            {t("cta.title")}
          </h2>

          {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>✓</div>
              <p style={{ color: 'white', fontSize: '16px', fontWeight: 600 }}>{t("cta.success")}</p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '16px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("hero.email_placeholder")}
                  required
                  disabled={loading}
                  style={{ flex: '1', minWidth: '220px', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: '14px', outline: 'none' }}
                />
                <button type="submit" disabled={loading} style={{ padding: '14px 24px', borderRadius: '10px', background: 'white', color: '#2B3990', fontWeight: 700, fontSize: '14px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
                  {loading ? '...' : t("hero.submit")}
                </button>
              </form>
              {error && <p style={{ color: '#EF4444', fontSize: '13px', marginBottom: '12px' }}>{error}</p>}
            </>
          )}

          {!submitted && (
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px' }}>📍 {t("cta.note")}</p>
          )}
        </div>
      </div>
    </section>
  );
}
