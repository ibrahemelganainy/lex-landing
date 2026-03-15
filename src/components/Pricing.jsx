import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faDownload, 
  faCrown, 
  faUsers, 
  faGem 
} from '@fortawesome/free-solid-svg-icons';

const plans = [
  { 
    name: 'Basic', 
    users: '3 مستخدمين', 
    icon: faUsers,
    prices: [
      { duration: 'سنة واحدة', amount: '2,000', original: null },
      { duration: 'سنتين', amount: '3,200', original: '4,000' },
      { duration: 'أربع سنوات', amount: '5,200', original: '8,000' }
    ],
    features: ['كل المميزات المتقدمة', 'نسخ سحابي مجدول آلياً', 'تخصيص كامل للصلاحيات', 'دعم فني VIP وأولوية في التحديثات']
  },
  { 
    name: 'Pro', 
    users: '10 مستخدمين', 
    icon: faCrown,
    popular: true,
    prices: [
      { duration: 'سنة واحدة', amount: '4,000', original: null },
      { duration: 'سنتين', amount: '6,400', original: '8,000' },
      { duration: 'أربع سنوات', amount: '10,400', original: '16,000' }
    ],
    features: ['كل المميزات المتقدمة', 'نسخ سحابي مجدول آلياً', 'تخصيص كامل للصلاحيات', 'دعم فني VIP وأولوية في التحديثات']
  },
  { 
    name: 'Enterprise', 
    users: 'غير محدود', 
    icon: faGem,
    prices: [
      { duration: 'سنة واحدة', amount: '7,000', original: null },
      { duration: 'سنتين', amount: '11,200', original: '14,000' },
      { duration: 'أربع سنوات', amount: '18,200', original: '28,000' }
    ],
    features: ['كل المميزات المتقدمة', 'نسخ سحابي مجدول آلياً', 'تخصيص كامل للصلاحيات', 'دعم فني VIP وأولوية في التحديثات']
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white text-right" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-datalynx-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">Flexible Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">استثمر في كفاءة مكتبك</h3>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            خطط أسعار مرنة صممت لتبدأ معك من المحاماة الفردية وحتى كبرى المؤسسات القانونية.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((p, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-[2.5rem] transition-all duration-500 flex flex-col h-full ${
                p.popular 
                ? 'bg-slate-900 text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] scale-105 z-20 border border-blue-500/30' 
                : 'bg-slate-50 text-slate-800 border border-slate-200 hover:bg-white hover:shadow-xl'
              }`}
            >
              {p.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  الأكثر طلباً
                </div>
              )}

              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${p.popular ? 'bg-blue-500/20 text-blue-400' : 'bg-white shadow-sm text-datalynx-primary'}`}>
                  <FontAwesomeIcon icon={p.icon} />
                </div>
                <div>
                  <h4 className="text-2xl font-black tracking-tight">{p.name}</h4>
                  <p className={`text-sm font-bold ${p.popular ? 'text-blue-400' : 'text-slate-500'}`}>{p.users}</p>
                </div>
              </div>

              {/* Price List */}
              <div className="space-y-4 mb-10 pb-10 border-b border-slate-200/10">
                {p.prices.map((price, pIdx) => (
                  <div key={pIdx} className={`flex justify-between items-center p-3 rounded-2xl ${pIdx === 0 ? (p.popular ? 'bg-white/5' : 'bg-white') : ''}`}>
                    <span className={`text-sm font-bold ${p.popular ? 'text-slate-300' : 'text-slate-600'}`}>{price.duration}</span>
                    <div className="text-left">
                       <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black">{price.amount}</span>
                          <span className="text-[10px] font-bold opacity-60">ج.م</span>
                       </div>
                       {price.original && (
                         <p className="text-[10px] line-through text-red-500 font-bold -mt-1">بدل {price.original}</p>
                       )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-grow">
                {p.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm font-medium leading-tight">
                    <FontAwesomeIcon icon={faCheckCircle} className={p.popular ? 'text-blue-400 mt-0.5' : 'text-datalynx-primary mt-0.5'} />
                    <span className={p.popular ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Central Download Button Area */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm mb-6 font-medium italic">هل أنت مستعد لتجربة النظام؟ حمل نسختك الآن</p>
          <a 
            href="https://github.com/ibrahemelganainy/lawyer-erp-updates/releases/download/v1.1.0/LexOfficeSetup.zip" 
            className="inline-flex items-center gap-4 px-12 py-5 bg-datalynx-primary hover:bg-blue-600 text-white font-black text-xl rounded-2xl transition-all shadow-[0_20px_50px_rgba(59,130,246,0.3)] group"
          >
            تحميل نسخة Lex Office مجاناً
            <FontAwesomeIcon icon={faDownload} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <div className="mt-6 flex justify-center items-center gap-8 text-slate-400 text-xs font-bold uppercase tracking-tighter">
             <span>Windows 10/11 Compatible</span>
             <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
             <span>Local DB Secured</span>
             <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
             <span>Version 1.1.0</span>
          </div>
        </div>

      </div>
    </section>
  );
}