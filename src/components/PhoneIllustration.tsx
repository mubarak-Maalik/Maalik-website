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
    food: ar ? "مطاعم" : "Food",
    shopping: ar ? "تسوق" : "Shopping",
    transport: ar ? "مواصلات" : "Transport",
    warba: ar ? "وربة" : "Warba",
    lulu: ar ? "لولو" : "Lulu",
    knpc: ar ? "محطة نفط" : "KNPC",
    weeklySpend: ar ? "الإنفاق الأسبوعي" : "Weekly Spending",
    aiCat: ar ? "تصنيف ذكي" : "AI Categorization",
    latestTx: ar ? "آخر المعاملات" : "Latest Transactions",
  };

  return (
    <div style={{
      position: 'relative',
      width: '320px',
      fontFamily: font,
      flexShrink: 0,
    }}>

      {/* Floating card top right — AI Categorization */}
      <div style={{
        position: 'absolute',
        top: '40px',
        right: '-30px',
        background: 'white',
        borderRadius: '14px',
        padding: '10px 12px',
        boxShadow: '0 8px 28px rgba(43,57,144,0.13)',
        zIndex: 4,
        minWidth: '140px',
        transform: 'rotate(3deg)',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ fontSize: '9px', color: '#64748b', marginBottom: '6px', fontWeight: 600 }}>🧠 {tx.aiCat}</div>
        {[
          { color: '#2B3990', label: tx.food, val: '45 KD' },
          { color: '#22C55E', label: tx.shopping, val: '120 KD' },
          { color: '#EF4444', label: tx.transport, val: '30 KD' },
        ].map(item => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '2px', background: item.color, display: 'inline-block', flexShrink: 0 }} />
              <span style={{ fontSize: '9px', color: '#64748b' }}>{item.label}</span>
            </div>
            <span style={{ fontSize: '9px', fontWeight: 700, color: '#1a1a2e', fontFamily: 'monospace' }}>{item.val}</span>
          </div>
        ))}
      </div>

      {/* Floating card top left — Warba */}
      <div style={{
        position: 'absolute',
        top: '50px',
        left: '-25px',
        background: 'white',
        borderRadius: '14px',
        padding: '10px 12px',
        boxShadow: '0 8px 28px rgba(43,57,144,0.13)',
        zIndex: 4,
        minWidth: '120px',
        transform: 'rotate(-3deg)',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ fontSize: '9px', color: '#64748b', marginBottom: '2px' }}>{tx.warba}</div>
        <div style={{ fontSize: '16px', fontWeight: 800, color: '#1a1a2e', fontFamily: 'monospace', marginBottom: '4px' }}>620 KD</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
          <span style={{ fontSize: '9px', color: '#22C55E', fontWeight: 600 }}>Connected</span>
        </div>
      </div>

      {/* Floating card bottom left — Weekly */}
      <div style={{
        position: 'absolute',
        bottom: '120px',
        left: '-30px',
        background: 'white',
        borderRadius: '14px',
        padding: '10px 12px',
        boxShadow: '0 8px 28px rgba(43,57,144,0.13)',
        zIndex: 4,
        minWidth: '130px',
        transform: 'rotate(-2deg)',
      }}>
        <div style={{ fontSize: '9px', color: '#64748b', marginBottom: '6px', fontWeight: 600 }}>📈 {tx.weeklySpend}</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '28px' }}>
          {[10, 16, 8, 24, 14, 28, 12].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}px`, borderRadius: '2px', background: [3, 5].includes(i) ? '#2B3990' : '#eef0f8' }} />
          ))}
        </div>
      </div>

      {/* Floating card bottom right — Latest Tx */}
      <div style={{
        position: 'absolute',
        bottom: '100px',
        right: '-28px',
        background: 'white',
        borderRadius: '14px',
        padding: '10px 12px',
        boxShadow: '0 8px 28px rgba(43,57,144,0.13)',
        zIndex: 4,
        minWidth: '145px',
        transform: 'rotate(2deg)',
        direction: ar ? 'rtl' : 'ltr',
      }}>
        <div style={{ fontSize: '9px', color: '#64748b', marginBottom: '6px', fontWeight: 600 }}>🧾 {tx.latestTx}</div>
        {[
          { emoji: '🛒', name: tx.lulu, cat: tx.shopping, val: '-12 KD' },
          { emoji: '⛽', name: tx.knpc, cat: tx.transport, val: '-5 KD' },
        ].map(item => (
          <div key={item.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '22px', height: '22px', background: '#eef0f8', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', flexShrink: 0 }}>{item.emoji}</div>
              <div>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#1a1a2e' }}>{item.name}</div>
                <div style={{ fontSize: '8px', color: '#64748b' }}>{item.cat}</div>
              </div>
            </div>
            <div style={{ fontSize: '9px', fontWeight: 700, color: '#EF4444', fontFamily: 'monospace' }}>{item.val}</div>
          </div>
        ))}
      </div>

      {/* Phone */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        background: '#1a1a2e',
        borderRadius: '44px',
        padding: '20px 12px 16px',
        boxShadow: '0 40px 100px rgba(43,57,144,0.22)',
      }}>
        <div style={{ width: '80px', height: '12px', background: '#0f1118', borderRadius: '6px', margin: '0 auto 12px' }} />
        <div style={{ background: '#F5F5F0', borderRadius: '30px', padding: '14px 12px', overflow: 'hidden', direction: ar ? 'rtl' : 'ltr', fontFamily: font }}>

          <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a2e', marginBottom: '1px' }}>{tx.greeting}</div>
          <div style={{ fontSize: '10px', color: '#64748b', marginBottom: '12px' }}>{tx.snapshot}</div>

          {/* Balance */}
          <div style={{ background: '#2B3990', borderRadius: '16px', padding: '12px', marginBottom: '10px', color: 'white' }}>
            <div style={{ fontSize: '8px', opacity: 0.75, marginBottom: '3px' }}>{tx.totalBalance}</div>
            <div style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'monospace', marginBottom: '2px' }}>7,817.9 KD</div>
            <div style={{ fontSize: '8px', opacity: 0.6, marginBottom: '10px' }}>{tx.connected}</div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '7px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
              {[
                { label: tx.income, val: '+8,220', color: '#22C55E' },
                { label: tx.spent, val: '-402', color: '#EF4444' },
                { label: tx.net, val: '7,817', color: 'white' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontSize: '7px', opacity: 0.6 }}>{item.label}</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: item.color, fontFamily: 'monospace' }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bank cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '8px' }}>
            {[{ name: tx.boubyan, val: '3,403 KD' }, { name: tx.kfh, val: '2,140 KD' }].map(b => (
              <div key={b.name} style={{ background: 'white', borderRadius: '10px', padding: '8px', border: '1px solid #e2e2dc' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '3px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#1a1a2e' }}>{b.name}</span>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', flexShrink: 0 }} />
                </div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#1a1a2e', fontFamily: 'monospace' }}>{b.val}</div>
              </div>
            ))}
          </div>

          {/* AI badge */}
          <div style={{ background: '#2B3990', borderRadius: '10px', padding: '8px', textAlign: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '9px', color: 'white', fontWeight: 700 }}>{tx.aiReady}</span>
          </div>

          {/* Goals */}
          <div style={{ background: 'white', borderRadius: '10px', padding: '8px', border: '1px solid #e2e2dc' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#1a1a2e', marginBottom: '4px' }}>{tx.goal}</div>
            <div style={{ height: '6px', background: '#eef0f8', borderRadius: '3px', marginBottom: '3px' }}>
              <div style={{ width: '63%', height: '100%', background: '#2B3990', borderRadius: '3px' }} />
            </div>
            <div style={{ fontSize: '8px', color: '#64748b' }}>{tx.goalAmt}</div>
          </div>

          <div style={{ width: '50px', height: '4px', background: '#64748b', borderRadius: '2px', margin: '12px auto 0' }} />
        </div>
      </div>
    </div>
  );
}
