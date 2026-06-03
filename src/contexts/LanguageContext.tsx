import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<string, Record<Language, string>> = {
  "nav.cta": { en: "Request Early Access", ar: "اطلب الوصول المبكر" },
  "nav.lang": { en: "عربي", ar: "EN" },
  "hero.title": { en: "All your banks. One dashboard.", ar: "كل بنوكك. لوحة واحدة." },
  "hero.subtitle": {
    en: "Maalik connects all your Kuwaiti bank accounts in one place and analyzes your expenses automatically using AI.",
    ar: "مالك يجمع حساباتك البنكية في مكان واحد ويحلل مصاريفك تلقائياً باستخدام الذكاء الاصطناعي.",
  },
  "hero.email_placeholder": { en: "Enter your email", ar: "أدخل بريدك الإلكتروني" },
  "hero.submit": { en: "Get Early Access", ar: "احصل على الوصول المبكر" },
  "hero.security": {
    en: "Your data is safe. We use bank-level encryption and never store your credentials.",
    ar: "بياناتك آمنة. نستخدم تشفيراً بمستوى البنوك ولن نحتفظ ببيانات دخولك أبداً.",
  },
  "pain.1": { en: "Tired of opening 3 bank apps just to check your balance?", ar: "تعبت من فتح ٣ تطبيقات بنكية عشان تشوف رصيدك؟" },
  "pain.2": { en: "Still using Excel to track your expenses?", ar: "لازلت تستخدم Excel لتتبع مصاريفك؟" },
  "pain.3": { en: "Never know where your money actually goes?", ar: "ما تعرف وين يروح راتبك؟" },
  "how.title": { en: "How it Works", ar: "كيف يعمل" },
  "how.step1.title": { en: "Connect your banks", ar: "اربط حساباتك" },
  "how.step1.desc": { en: "Link all your Kuwaiti bank accounts securely in seconds", ar: "اربط جميع حساباتك البنكية الكويتية بأمان في ثوانٍ" },
  "how.step2.title": { en: "Auto-categorize expenses", ar: "تصنيف تلقائي للمصاريف" },
  "how.step2.desc": { en: "AI automatically categorizes every transaction", ar: "الذكاء الاصطناعي يصنف كل معاملة تلقائياً" },
  "how.step3.title": { en: "Get AI weekly reports", ar: "تقارير أسبوعية بالذكاء الاصطناعي" },
  "how.step3.desc": { en: "Receive personalized insights and spending analysis every week", ar: "احصل على تحليلات مخصصة وتقارير إنفاق أسبوعية" },
  "features.title": { en: "Features", ar: "المميزات" },
  "features.1.title": { en: "Multi-bank Aggregation", ar: "تجميع حسابات متعددة" },
  "features.1.desc": { en: "Connect all your Kuwaiti bank accounts in one unified dashboard", ar: "اربط جميع حساباتك البنكية الكويتية في لوحة تحكم واحدة" },
  "features.2.title": { en: "AI Expense Categorization", ar: "تصنيف ذكي للمصاريف" },
  "features.2.desc": { en: "Automatically categorize transactions using advanced AI", ar: "تصنيف تلقائي للمعاملات باستخدام الذكاء الاصطناعي" },
  "features.3.title": { en: "Weekly AI Reports", ar: "تقارير أسبوعية ذكية" },
  "features.3.desc": { en: "Get personalized spending insights delivered to you weekly", ar: "احصل على تحليلات إنفاق مخصصة أسبوعياً" },
  "features.4.title": { en: "Visual Spending Charts", ar: "رسوم بيانية للإنفاق" },
  "features.4.desc": { en: "Beautiful charts that make understanding your finances easy", ar: "رسوم بيانية جميلة تسهل فهم وضعك المالي" },
  "features.5.title": { en: "Financial Goals Tracking", ar: "تتبع الأهداف المالية" },
  "features.5.desc": { en: "Set savings goals and track your progress automatically", ar: "حدد أهداف الادخار وتابع تقدمك تلقائياً" },
  "cta.title": { en: "Be the first to experience Maalik", ar: "كن أول من يجرب مالك" },
  "cta.note": { en: "Currently available in Kuwait", ar: "متوفر حالياً في الكويت" },
  "cta.success": { en: "You're on the list! We'll notify you when Maalik launches.", ar: "تم تسجيلك! سنبلغك عند إطلاق مالك." },
  "footer.tagline": { en: "Manage your finances with clarity", ar: "أدر مالك بوضوح" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [lang, dir]);

  const toggleLanguage = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  const t = (key: string): string => translations[key]?.[lang] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
