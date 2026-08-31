import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, 
  faShieldHalved, 
  faGift, 
  faCoins, 
  faArrowLeft, 
  faCheck 
} from '@fortawesome/free-solid-svg-icons';

export default function RoadmapSection() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800" dir="rtl">
      
      {/* تأثير إضاءة خلفية */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* رأس القسم */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <FontAwesomeIcon icon={faRocket} className="text-blue-400 text-sm" />
            <span className="text-blue-300 text-xs font-bold tracking-wider uppercase">استثمار مستدام لنمو مكتبك</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
            اشترك اليوم، واحصل على <span className="text-cyan-400">التحديثات القادمة مجاناً</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            نحن لا نبيع لك برنامجاً جامداً، بل نبني معك شراكة مستمرة. كل تطوير مستقبلي يصل إلى نظامك تلقائياً وبدون أي رسوم إضافية.
          </p>
        </div>

        {/* محتوى القسم: كارت العرض الذكي */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* الميزة 1: النسخة الحالية */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div className="w-12 h-12 bg-slate-800/80 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 text-xl font-black">
                01
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">المنظومة الحالية المتكاملة</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                احصل فوراً على أدوات إدارة الجلسات، الأرشفة الإلكترونية، أوراق المحضرين، وتنفيذ الأحكام لحل مشاكلك اليومية حالاً.
              </p>
            </div>
            <ul className="space-y-3 border-t border-slate-800/80 pt-6 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-cyan-400 text-xs" />
                <span>جاهز للعمل والاستخدام الفوري</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-cyan-400 text-xs" />
                <span>دعم فني وتدريب شامل</span>
              </li>
            </ul>
          </div>

          {/* الميزة 2: التحديث القادم (المميز) */}
          <div className="bg-gradient-to-b from-blue-900/40 via-slate-950 to-slate-950 border-2 border-blue-500/40 rounded-3xl p-8 flex flex-col justify-between relative shadow-xl shadow-blue-950/50">
            <div className="absolute -top-3 right-8 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              قريباً في التحديث القادم
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 text-xl">
                <FontAwesomeIcon icon={faCoins} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">موديول الإدارة المالية</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                نعمل حالياً على تطوير موديول متقدم لإدارة أتعاب الموكلين، المصروفات، والتقارير المالية بدقة واحترافية عالية.
              </p>
            </div>
            <ul className="space-y-3 border-t border-slate-800 pt-6 text-sm text-slate-200">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-cyan-400 text-xs" />
                <span>تتبع أتعاب وأقساط الموكلين</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-cyan-400 text-xs" />
                <span>تقارير مالية تفاعلية شاملة</span>
              </li>
            </ul>
          </div>

          {/* الميزة 3: الهدية / الضمان */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div className="w-12 h-12 bg-slate-800/80 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 text-xl">
                <FontAwesomeIcon icon={faGift} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">ترقية مجانية مدى الحياة</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                مشتركوك في النسخة الحالية يضمنون الحصول على الإدارة المالية وكل التحديثات القادمة فور إطلاقها دون دفع أي مليم إضافي.
              </p>
            </div>
            <ul className="space-y-3 border-t border-slate-800/80 pt-6 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-emerald-400 text-xs" />
                <span>تحديثات تلقائية بدون رسوم</span>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-emerald-400 text-xs" />
                <span>ضمان السعر الحالي الثابت</span>
              </li>
            </ul>
          </div>

        </div>

        {/* زر اتخاذ القرار */}
        <div className="mt-14 text-center">
          <a 
            href="#pricing" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/25 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>احجز نسختك الآن وضمن تحديثات المستقبل</span>
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
          </a>
          <p className="text-xs text-slate-500 mt-4 flex items-center justify-center gap-1.5">
            <FontAwesomeIcon icon={faShieldHalved} className="text-emerald-400" />
            انضم لأكثر من مكتب محاماة طوّر أعماله معنا اليوم.
          </p>
        </div>

      </div>
    </section>
  );
}