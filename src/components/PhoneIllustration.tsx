import { useLanguage } from "@/contexts/LanguageContext";

interface Bubble {
  icon: string;
  labelEn: string;
  labelAr: string;
  subEn: string;
  subAr: string;
  side: "left" | "right";
  top: number;
  targetY: number;
}

const bubbles: Bubble[] = [
  { icon: "🏦", labelEn: "Multi-bank", labelAr: "تعدد البنوك", subEn: "All accounts, one place", subAr: "كل حساباتك بمكان واحد", side: "left", top: 148, targetY: 173 },
  { icon: "🧠", labelEn: "AI Insights", labelAr: "رؤى ذكية", subEn: "Smart categorization", subAr: "تصنيف تلقائي للمعاملات", side: "right", top: 205, targetY: 228 },
  { icon: "📋", labelEn: "Weekly Reports", labelAr: "تقارير أسبوعية", subEn: "Personalized insights", subAr: "رؤى مخصصة أسبوعياً", side: "left", top: 308, targetY: 320 },
  { icon: "📈", labelEn: "Visual Charts", labelAr: "رسوم بيانية", subEn: "Spending at a glance", subAr: "مصاريفك بلمحة", side: "right", top: 262, targetY: 282 },
  { icon: "🎯", labelEn: "Goal Tracking", labelAr: "تتبع الأهداف", subEn: "Save smarter", subAr: "ادخر بذكاء", side: "left", top: 358, targetY: 372 },
];

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
    warba: ar ? "وربة" : "Warba",
    aiCat: ar ? "تصنيف ذكي" : "AI Categorization",
    food: ar ? "مطاعم" : "Food & Dining",
    shopping: ar ? "تسوق" : "Shopping",
    transport: ar ? "مواصلات" : "Transport",
    spending: ar ? "المصاريف هذا الشهر" : "Spending This Month",
    aiReady: ar ? "✨ تقرير الذكاء الاصطناعي جاهز" : "✨ AI Weekly Report Ready",
    goal: ar ? "هدف الادخار" : "Savings Goal",
    goalAmt: ar ? "١٬١٠٠ / ١٬٧٦٠ — ٦٣٪" : "KD 1,100 / 1,760 — 63%",
  };

  const leftBubbleWidth = ar ? 155 : 160;
  const rightBubbleWidth = ar ? 145 : 155;
  const phoneWidth = 170;
  const gap = 16;
  const phoneLeft = leftBubbleWidth + gap;
  const phoneRight = phoneLeft + phoneWidth;
  const containerWidth = phoneRight + gap + rightBubbleWidth;
  const containerHeight = 480;

  return (
    <div style={{ position: 'relative', width: `${containerWidth}px`, height: `${containerHeight}px`, fontFamily: font, flexShrink: 0 }}>

      {bubbles.map((b) => {
        const label = ar ? b.labelAr : b.labelEn;
        const sub = ar ? b.subAr : b.subEn;
        const isLeft = b.side === 'left';
        const bWidth = isLeft ? leftBubbleWidth : rightBubbleWidth;
        const bLeft = isLeft ? 0 : phoneRight + gap;
        const arrowStartX = isLeft ? bWidth : phoneRight + gap;
        const arrowEndX = isLeft ? phoneLeft - 2 : phoneRight + 2;
        const arrowY = b.top + 22;

        return (
          <div key={b.labelEn}>
            <svg style={{ position: 'absolute', top: `${arrowY - 6}px`, left: 0, width: `${containerWidth}px`, height: '12px', overflow: 'visible', pointerEvents: 'none' }}>
              <defs>
                <marker id={`arr-${b.labelEn.replace(/\s/g,'-')}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </marker>
              </defs>
              <line x1={arrowStartX} y1="6" x2={arrowEndX} y2="6" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2" markerEnd={`url(#arr-${b.labelEn.replace(/\s/g,'-')})`}/>
            </svg>

            <div style={{
              position: 'absolute',
              top: `${b.top}px`,
              left: `${bLeft}px`,
              width: `${bWidth}px`,
              background: 'white',
              border: '1px solid #e2e2dc',
              borderRadius: '12px',
              padding: '8px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              direction: ar ? 'rtl' : 'ltr',
              boxSizing: 'border-box' as const,
            }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: '#eef0f8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>
                {b.icon}
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a2e', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</div>
                <div style={{ fontSize: '9px', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub}</div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Phone */}
      <div style={{
        position: 'absolute',
        left: `${phoneLeft}px`,
        top: 0,
        width: `${phoneWidth}px`,
        height: `${containerHeight}px`,
        background: '#1a1a2e',
        borderRadius: '24px',
        padding: '14px 7px 10px',
        boxSizing: 'border-box' as const,
        boxShadow: '0 20px 60px rgba(43,57,144,0.15)',
      }}>
        <div style={{ width: '55px', height: '9px', background: '#0f1118', borderRadius: '5px', margin: '0 auto 7px' }} />
        <div style={{ background: '#F5F5F0', borderRadius: '14px', height: 'calc(100% - 16px)', padding: '9px 7px', overflowY: 'hidden' as const, direction: ar ? 'rtl' : 'ltr', fontFamily: font }}>

          <div style={{ fontSize: '10px', fontWeight: 700, color: '#1a1a2e', marginBottom: '1px' }}>{tx.greeting}</div>
          <div style={{ fontSize: '8px', color: '#64748b', marginBottom: '6px' }}>{tx.snapshot}</div>

          <div style={{ background: '#2B3990', borderRadius: '9px', padding: '8px', marginBottom: '6px', color: 'white' }}>
            <div style={{ fontSize: '7px', opacity: 0.75, marginBottom: '2px' }}>{tx.totalBalance}</div>
            <div style={{ fontSize: '12px', fontWeight: 800, fontFamily: 'monospace', marginBottom: '2px' }}>7,817.9 KD</div>
            <div style={{ fontSize: '7px', opacity: 0.6, marginBottom: '6px' }}>{tx.connected}</div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '5px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
              {[
                { label: tx.income, val: '+8,220', color: '#22C55E' },
                { label: tx.spent, val: '-402', color: '#EF4444' },
                { label: tx.net, val: '7,817', color: 'white' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontSize: '6px', opacity: 0.6 }}>{item.label}</div>
                  <div style={{ fontSize: '8px', fontWeight: 700, fontFamily: 'monospace', color: item.color }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginBottom: '5px' }}>
            {[{ name: tx.boubyan, val: '3,403 KD' }, { name: tx.warba, val: '620 KD' }].map(b => (
              <div key={b.name} style={{ background: 'white', borderRadius: '6px', padding: '5px', border: '1px solid #e2e2dc' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '2px' }}>
                  <span style={{ fontSize: '8px', fontWeight: 700, color: '#1a1a2e' }}>{b.name}</span>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22C55E', flexShrink: 0 }} />
                </div>
                <div style={{ fontSize: '9px', fontWeight: 800, color: '#1a1a2e', fontFamily: 'monospace' }}>{b.val}</div>
              </div>
            ))}
          </div>

          <div style={{ background: 'white', borderRadius: '6px', padding: '5px', border: '1px solid #e2e2dc', marginBottom: '5px' }}>
            <div style={{ fontSize: '8px', fontWeight: 700, color: '#1a1a2e', marginBottom: '3px' }}>{tx.aiCat}</div>
            {[
              { color: '#2B3990', label: tx.food, val: '45 KD' },
              { color: '#22C55E', label: tx.shopping, val: '120 KD' },
              { color: '#EF4444', label: tx.transport, val: '30 KD' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '1px', background: item.color, flexShrink: 0 }} />
                  <span style={{ fontSize: '7px', color: '#64748b' }}>{item.label}</span>
                </div>
                <span style={{ fontSize: '7px', color: '#64748b' }}>{item.val}</span>
              </div>
            ))}
          </div>

          <div style={{ background: 'white', borderRadius: '6px', padding: '5px', border: '1px solid #e2e2dc', marginBottom: '5px' }}>
            <div style={{ fontSize: '8px', fontWeight: 700, color: '#1a1a2e', marginBottom: '3px' }}>{tx.spending}</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '16px' }}>
              {[10, 14, 8, 16, 11].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}px`, borderRadius: '2px', background: i === 4 ? '#22C55E' : '#2B3990' }} />
              ))}
            </div>
          </div>

          <div style={{ background: '#2B3990', borderRadius: '6px', padding: '5px', textAlign: 'center', marginBottom: '5px' }}>
            <span style={{ fontSize: '7px', color: 'white', fontWeight: 700 }}>{tx.aiReady}</span>
          </div>

          <div style={{ background: 'white', borderRadius: '6px', padding: '5px', border: '1px solid #e2e2dc' }}>
            <div style={{ fontSize: '8px', fontWeight: 700, color: '#1a1a2e', marginBottom: '3px' }}>{tx.goal}</div>
            <div style={{ height: '5px', background: '#eef0f8', borderRadius: '3px', marginBottom: '3px' }}>
              <div style={{ width: '63%', height: '100%', background: '#2B3990', borderRadius: '3px' }} />
            </div>
            <div style={{ fontSize: '7px', color: '#64748b' }}>{tx.goalAmt}</div>
          </div>

          <div style={{ width: '40px', height: '3px', background: '#64748b', borderRadius: '2px', margin: '6px auto 0' }} />
        </div>
      </div>
    </div>
  );
}
