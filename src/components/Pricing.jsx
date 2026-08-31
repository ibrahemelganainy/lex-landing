import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faDownload,
  faUserTie,
  faUserFriends,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const originalPrice = 2000;
const discountedPrice = 1000;
const discountPercent = 50;

const scenarios = [
  {
    count: 1,
    label: 'محامٍ يعمل منفرداً',
    desc: 'يدير قضاياه وعملاءه بنفسه، دون أي مساعدين',
    icon: faUserTie,
  },
  {
    count: 2,
    label: 'مكتب به مساعد أو سكرتيرة',
    desc: 'دخول منفصل لك وللمساعد، كل منكما بصلاحياته الخاصة',
    icon: faUserFriends,
    common: true,
  },
  {
    count: 4,
    label: 'فريق قانوني صغير',
    desc: 'عدة محامين ومساعدين يعملون على نفس الملفات معاً',
    icon: faUsers,
  },
];

const includedFeatures = [
  ['كل المميزات المتقدمة لإدارة القضايا والعملاء', 'تخصيص كامل لصلاحيات كل مستخدم'],
  ['نسخ احتياطي سحابي مجدول تلقائياً', 'دعم فني وتحديثات مجانية مدى الحياة'],
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white text-right" dir="rtl">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 max-w-xl">
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 leading-[1.15]">
            تدفع مرة واحدة، تمتلك النظام للأبد
          </h3>
          <p className="text-slate-500 leading-relaxed">
            بدون اشتراك شهري، وبدون فاتورة تتجدد كل سنة. سعر نهائي واحد لكل
            مستخدم، تدفعه مرة واحدة فقط.
          </p>
        </div>

        {/* Price certificate panel */}
        <div className="relative mb-6">
          <div className="relative rounded-[1.75rem] bg-[#0F1B2D] px-8 py-12 md:px-16 md:py-14 overflow-hidden border border-[#B08D57]/40">

            {/* corner marks — document authenticity motif */}
            <span aria-hidden="true" className="hidden md:block absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-[#B08D57]/70" />
            <span aria-hidden="true" className="hidden md:block absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-[#B08D57]/70" />
            <span aria-hidden="true" className="hidden md:block absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-[#B08D57]/70" />
            <span aria-hidden="true" className="hidden md:block absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-[#B08D57]/70" />

            {/* discount seal */}
            <div
              aria-hidden="true"
              className="absolute -top-5 -left-5 md:top-8 md:left-8 w-24 h-24 rounded-full border-2 border-dashed border-[#B08D57] flex flex-col items-center justify-center text-[#B08D57] bg-[#0F1B2D] rotate-[-10deg]"
            >
              <span className="text-[10px] font-bold tracking-wide">خصم لفترة محدودة</span>
              <span className="text-xl font-black leading-none mt-1">{discountPercent}%</span>
            </div>

            <div className="max-w-md mx-auto text-center">
              <p className="text-[#93A0B4] font-bold text-sm mb-6">سعر المستخدم الواحد</p>

              <div className="flex items-baseline justify-center gap-3 mb-1">
                <span
                  className="text-2xl font-bold text-[#5B6B82] line-through"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {originalPrice.toLocaleString('ar-EG')}
                </span>
                <span
                  className="font-serif text-7xl md:text-8xl font-black text-[#EDE7D9]"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {discountedPrice.toLocaleString('ar-EG')}
                </span>
                <span className="text-base font-bold text-[#B08D57]">ج.م</span>
              </div>

              <p className="text-[#93A0B4] text-sm font-medium mb-10">
                للمستخدم الواحد — دفعة واحدة نهائياً
              </p>

              <div className="border-t border-[#B08D57]/25 pt-6 flex items-center justify-center gap-6 text-[#93A0B4] text-xs font-bold">
                <span>بدون اشتراك</span>
                <span className="w-1 h-1 rounded-full bg-[#B08D57]/50" />
                <span>ملكية دائمة</span>
                <span className="w-1 h-1 rounded-full bg-[#B08D57]/50" />
                <span>تحديثات مجانية</span>
              </div>
            </div>
          </div>
        </div>

        {/* How many users — ledger table */}
        <div className="mb-20">
          <h4 className="text-xl font-black text-slate-900 mt-14 mb-1">محتاج كام يوزر؟</h4>
          <p className="text-slate-500 text-sm mb-6">
            السعر يُحسب على عدد المستخدمين فقط. إليك أمثلة شائعة:
          </p>

          <div className="border-t border-slate-200">
            {scenarios.map((s, idx) => {
              const total = s.count * discountedPrice;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-5 py-5 border-b border-slate-200 ${
                    s.common ? 'bg-slate-50/80 -mx-4 px-4 rounded-xl border-b-0 my-1' : ''
                  }`}
                >
                  <div className="w-11 h-11 shrink-0 rounded-full bg-slate-100 flex items-center justify-center text-datalynx-primary">
                    <FontAwesomeIcon icon={s.icon} />
                  </div>

                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-slate-800">{s.label}</p>
                      {s.common && (
                        <span className="text-[10px] font-black text-[#B08D57] bg-[#B08D57]/10 px-2 py-0.5 rounded-full">
                          الأكثر شيوعاً
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-sm mt-0.5">{s.desc}</p>
                  </div>

                  <div className="text-left shrink-0">
                    <p className="text-slate-400 text-xs font-bold mb-0.5">
                      {s.count} × {discountedPrice.toLocaleString('ar-EG')}
                    </p>
                    <p
                      className="text-lg font-black text-slate-900"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      {total.toLocaleString('ar-EG')} ج.م
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-slate-400 text-xs font-medium mt-4">
            العدد مرن تماماً — اطلب أي عدد من المستخدمين يناسب حجم مكتبك.
          </p>
        </div>

        {/* What's included */}
        <div className="mb-20 max-w-2xl">
          <h4 className="text-xl font-black text-slate-900 mb-6">كل يوزر بيشمل إيه؟</h4>
          <div className="grid sm:grid-cols-2 gap-x-10">
            {includedFeatures.map((column, colIdx) => (
              <ul key={colIdx} className="divide-y divide-slate-200">
                {column.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 py-3 text-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-datalynx-primary mt-0.5 shrink-0" />
                    <span className="text-slate-600 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="border-t border-slate-200 pt-12 text-center">
          <p className="text-slate-500 text-sm mb-6 font-medium">هل أنت مستعد لتجربة النظام؟ حمّل نسختك الآن</p>
          <a
            href="https://github.com/ibrahemelganainy/lawyer-erp-updates/releases/download/v1.1.0/LexOfficeSetup.zip"
            className="inline-flex items-center gap-4 px-12 py-5 bg-datalynx-primary hover:bg-blue-600 text-white font-black text-xl rounded-2xl transition-all shadow-[0_20px_50px_rgba(59,130,246,0.3)] group"
          >
            تحميل نسخة Lex Office مجاناً
            <FontAwesomeIcon icon={faDownload} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <div className="mt-6 flex justify-center items-center gap-8 text-slate-400 text-xs font-bold">
            <span>Windows 10/11 Compatible</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full" />
            <span>Local DB Secured</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full" />
            <span>Version 1.1.0</span>
          </div>
        </div>

      </div>
    </section>
  );
}
