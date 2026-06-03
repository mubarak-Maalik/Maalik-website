import { useLanguage } from "@/contexts/LanguageContext";

export default function MockDashboard() {
  const { lang } = useLanguage();

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '360px', margin: '0 auto', animation: 'float 5s ease-in-out infinite' }}>
      <div style={{ background: 'white', borderRadius: '28px', boxShadow: '0 4px 6px rgba(0,0,0,0.04), 0 20px 60px rgba(43,57,144,0.12)', padding: '20px', border: '1px solid #e8e8e4' }}>
        {/* Greeting */}
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a2e', margin: 0 }}>
            {lang === "ar" ? "مساء الخير،" : "Good evening,"}
          </h3>
          <p style={{ fontSize: '12px', color: '#64748b', margin: '4px 0 8px' }}>
            {lang === "ar" ? "ملخصك المالي لهذا اليوم" : "Here's your financial snapshot for today"}
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 10px', background: '#F5F5F0', borderRadius: '8px', border: '1px solid #e2e2dc' }}>
            <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>
              {lang === "ar" ? "الثلاثاء ٢ يونيو ٢٠٢٦" : "Tue 2 June, 2026"}
            </span>
          </div>
        </div>

        {/* Balance Card */}
        <div style={{ background: 'linear-gradient(135deg, #2B3990, #1e2a6e)', borderRadius: '16px', padding: '18px', color: 'white', marginBottom: '16px' }}>
          <p style={{ fontSize: '10px', opacity: 0.75, marginBottom: '8px', fontWeight: 500 }}>
            {lang === "ar" ? "الرصيد الإجمالي لجميع الحسابات" : "Total Balance Across All Accounts"}
          </p>
          <p style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'monospace', margin: '0 0 4px' }}>
            7,817.9 <span style={{ fontSize: '14px', fontWeight: 600 }}>KD</span>
          </p>
          <p style={{ fontSize: '11px', opacity: 0.65, margin: '0 0 14px' }}>
            {lang === "ar" ? "٧ حسابات مربوطة" : "7 connected accounts"}
          </p>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
            <div>
              <p style={{ fontSize: '9px', opacity: 0.6, margin: '0 0 2px' }}>{lang === "ar" ? "الدخل" : "Income"}</p>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#22C55E', fontFamily: 'monospace', margin: 0 }}>+8,220</p>
            </div>
            <div>
              <p style={{ fontSize: '9px', opacity: 0.6, margin: '0 0 2px' }}>{lang === "ar" ? "المصروف" : "Spent"}</p>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#EF4444', fontFamily: 'monospace', margin: 0 }}>-402.25</p>
            </div>
            <div>
              <p style={{ fontSize: '9px', opacity: 0.6, margin: '0 0 2px' }}>{lang === "ar" ? "الصافي" : "Net"}</p>
              <p style={{ fontSize: '12px', fontWeight: 700, fontFamily: 'monospace', margin: 0 }}>7,817.9</p>
            </div>
          </div>
        </div>

        {/* Connected Accounts */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a2e' }}>{lang === "ar" ? "الحسابات المربوطة" : "Connected Accounts"}</span>
          <span style={{ fontSize: '11px', color: '#2B3990', fontWeight: 600 }}>{lang === "ar" ? "عرض أقل ↑" : "See less ↑"}</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {[
            { name: lang === "ar" ? "بنك بوبيان" : "Boubyan Bank", balance: "3,403" },
            { name: lang === "ar" ? "بنك وربة" : "Warba Bank", balance: "620.15" },
          ].map((bank) => (
            <div key={bank.name} style={{ border: '1px solid #e2e2dc', borderRadius: '12px', padding: '12px' }}>
              <div style={{ width: '32px', height: '32px', background: '#eef0f8', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2B3990" strokeWidth="1.5">
                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4"/>
                </svg>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a2e' }}>{bank.name}</span>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }}></span>
              </div>
              <p style={{ fontSize: '9px', color: '#64748b', margin: '0 0 6px' }}>{lang === "ar" ? "حساب جاري" : "Current Account"}</p>
              <p style={{ fontSize: '9px', color: '#64748b', margin: '0 0 2px' }}>{lang === "ar" ? "الرصيد المتاح" : "Available Balance"}</p>
              <p style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a2e', fontFamily: 'monospace', margin: 0 }}>{bank.balance} <span style={{ fontSize: '10px' }}>KD</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
