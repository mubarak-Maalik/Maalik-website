import { useLanguage } from "@/contexts/LanguageContext";

export default function PhoneIllustration() {
  const { lang } = useLanguage();
  const ar = lang === "ar";
  const font = ar ? "'IBM Plex Sans Arabic', sans-serif" : "'Plus Jakarta Sans', sans-serif";

  const tx = {
    greeting: ar ? "مساء الخير،" : "Good evening,",
    snapshot: ar ? "ملخصك المالي لهذا اليوم" : "Your financial snapshot",
    totalBalance: ar ? "الرصيد الإجمالي" : "Total Balance",
    connected: ar ? "٧ حسابات مربوطة" : "7 connected accounts",
    income: ar ? "الدخل" : "Income",
    spent: ar ? "المصروف" : "Spent",
    net: ar ? "الصافي" : "Net",
    boubyan: ar ? "بوبيان" : "Boubyan",
    kfh: ar ? "بيت التمويل" : "KFH",
    aiReady: ar ? "✨ تقرير الذكاء الاصطناعي جاهز" : "✨ AI Weekly Report Ready",
    goal: ar ? "هدف الادخار" : "Savings Goal",
    goalAmt: ar ? "١٬١٠٠ / ١٬٧٦٠ — ٦٣٪" : "KD 1,100 / 1,760 — 63%",
    aiCat: ar ? "🧠 تصنيف ذكي" : "🧠 AI Categorization",
    food: ar ? "مطاعم" : "Food",
    shopping: ar ? "تسوق" : "Shopping",
    transport: ar ? "مواصلات" : "Transport",
    warba: ar ? "بنك وربة" : "Warba Bank",
    weeklySpend: ar ? "📈 الإنفاق الأسبوعي" : "📈 Weekly Spending",
    latestTx: ar ? "🧾 آخر المعاملات" : "🧾 Latest Transactions",
    lulu: ar ? "لولو" : "Lulu",
    knpc: ar ? "محطة نفط" : "KNPC",
    connected2: ar ? "متصل" : "Connected",
  };

  const cardStyle: React.CSSProperties = {
    position: 'absolute',
    background: 'white',
    borderRadius: '14px',
    padding: '11px 13px',
    boxShadow: '0 8px 24px rgba(43,57,144,0.12)',
    fontFamily: font,
  };

  return (
    <div style={{
      position: 'relative',
      width: '520px',
      height: '620px',
      background: 'linear-gradient(135deg, #eef2ff 0%, #f5f5f0 50%, #e8f4ff 100%)',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontFamily: font,
    }}>

      {/* Top right: AI Categorization */}
      <div style={{ ...cardStyle, top: '35px', right: '25px', transform: 'rotate(4deg)', zIndex: 3, minWidth: '148px' }}>
        <div style={{ fontSize: '9px', color: '#64748b', marginBottom: '7px', fontWeight: 600 }}>{tx.aiCat}</div>
        {[
          { color: '#2B3990', label: tx.food, val: '45 KD' },
          { color: '#22C55E', label: tx.shopping, val: '120 KD' },
          { color: '#EF4444', label: tx.transport, val: '30 KD' },
        ].map(item => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', direction: ar ? 'rtl' : 'ltr' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '2px', background: item.color, display: 'inline-block', flexShrink: 0 }} />
              <span style={{ fontSize: '9px', color: '#64748b' }}>{item.label}</span>
            </div>
            <span style={{ fontSize: '9px', fontWeight: 700, color: '#1a1a2e', fontFamily: 'monospace' }}>{item.val}</span>
          </div>
        ))}
      </div>

      {/* Top left: Warba Bank */}
      <div style={{ ...cardStyle, top: '45px', left: '20px', transform: 'rotate(-4deg)', zIndex: 3, minWidth: '130px', direction: ar ? 'rtl' : 'ltr' }}>
        <div style={{ fontSize: '9px', color: '#64748b', marginBottom: '3px' }}>{tx.warba}</div>
        <div style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a2e', fontFamily: 'monospace', marginBottom: '5px' }}>620 KD</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
          <span style={{ fontSize: '9px', color: '#22C55E', fontWeight: 600 }}>{tx.connected2}</span>
        </div>
      </div>

      {/* Bottom left: Weekly Chart */}
      <div style={{ ...cardStyle, bottom: '75px', left: '18px', transform: 'rotate(-3deg)', zIndex: 3, minWidth: '140px' }}>
        <div style={{ fontSize: '9px', color: '#64748b', marginBottom: '7px', fontWeight: 600 }}>{tx.weeklySpend}</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '30px' }}>
          {[10, 16, 8, 24, 14, 28, 12].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}px`, borderRadius: '2px', background: [3, 5].includes(i) ? '#2B3990' : '#eef0f8' }} />
          ))}
        </div>
      </div>

      {/* Bottom right: Latest Transactions */}
      <div style={{ ...cardStyle, bottom: '65px', right: '20px', transform: 'rotate(3deg)', zIndex: 3, minWidth: '150px', direction: ar ? 'rtl' : 'ltr' }}>
        <div style={{ fontSize: '9px', color: '#64748b', marginBottom: '7px', fontWeight: 600 }}>{tx.latestTx}</div>
        {[
          { emoji: '🛒', name: tx.lulu, cat: tx.shopping, val: '-12 KD' },
          { emoji: '⛽', name: tx.knpc, cat: tx.transport, val: '-5 KD' },
        ].map(item => (
          <div key={item.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '26px', height: '26px', background: '#eef0f8', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', flexShrink: 0 }}>{item.emoji}</div>
              <div>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#1a1a2e' }}>{item.name}</div>
                <div style={{ fontSize: '8px', color: '#64748b' }}>{item.cat}</div>
              </div>
            </div>
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#EF4444', fontFamily: 'monospace' }}>{item.val}</div>
          </div>
        ))}
      </div>

      {/* Phone */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '210px',
        background: '#1a1a2e',
        borderRadius: '36px',
        padding: '18px 11px 14px',
        boxShadow: '0 30px 80px rgba(43,57,144,0.22)',
      }}>
        <div style={{ width: '70px', height: '11px', background: '#0f1118', borderRadius: '6px', margin: '0 auto 11px' }} />
        <div style={{ background: '#F5F5F0', borderRadius: '24px', padding: '13px 11px', overflow: 'hidden', direction: ar ? 'rtl' : 'ltr', fontFamily: font }}>

          <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a2e', marginBottom: '1px' }}>{tx.greeting}</div>
          <div style={{ fontSize: '9px', color: '#64748b', marginBottom: '10px' }}>{tx.snapshot}</div>

          {/* Balance */}
          <div style={{ background: '#2B3990', borderRadius: '13px', padding: '11px', marginBottom: '8px', color: 'white' }}>
            <div style={{ fontSize: '7px', opacity: 0.75, marginBottom: '3px' }}>{tx.totalBalance}</div>
            <div style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'monospace', marginBottom: '2px' }}>7,817.9 KD</div>
            <div style={{ fontSize: '7px', opacity: 0.6, marginBottom: '8px' }}>{tx.connected}</div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '6px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
              {[
                { label: tx.income, val: '+8,220', color: '#22C55E' },
                { label: tx.spent, val: '-402', color: '#EF4444' },
                { label: tx.net, val: '7,817', color: 'white' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontSize: '6px', opacity: 0.6 }}>{item.label}</div>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: item.color, fontFamily: 'monospace' }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bank cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', marginBottom: '6px' }}>
            {[{ name: tx.boubyan, val: '3,403 KD' }, { name: tx.kfh, val: '2,140 KD' }].map(b => (
              <div key={b.name} style={{ background: 'white', borderRadius: '8px', padding: '6px', border: '1px solid #e2e2dc' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '2px' }}>
                  <span style={{ fontSize: '9px', fontWeight: 700, color: '#1a1a2e' }}>{b.name}</span>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22C55E', flexShrink: 0 }} />
                </div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#1a1a2e', fontFamily: 'monospace' }}>{b.val}</div>
              </div>
            ))}
          </div>

          {/* AI badge */}
          <div style={{ background: '#2B3990', borderRadius: '8px', padding: '6px', textAlign: 'center', marginBottom: '6px' }}>
            <span style={{ fontSize: '8px', color: 'white', fontWeight: 700 }}>{tx.aiReady}</span>
          </div>

          {/* Goals */}
          <div style={{ background: 'white', borderRadius: '8px', padding: '6px', border: '1px solid #e2e2dc' }}>
            <div style={{ fontSize: '9px', fontWeight: 700, color: '#1a1a2e', marginBottom: '3px' }}>{tx.goal}</div>
            <div style={{ height: '5px', background: '#eef0f8', borderRadius: '3px', marginBottom: '3px' }}>
              <div style={{ width: '63%', height: '100%', background: '#2B3990', borderRadius: '3px' }} />
            </div>
            <div style={{ fontSize: '7px', color: '#64748b' }}>{tx.goalAmt}</div>
          </div>

          <div style={{ width: '44px', height: '3px', background: '#64748b', borderRadius: '2px', margin: '9px auto 0' }} />
        </div>
      </div>
    </div>
  );
}
