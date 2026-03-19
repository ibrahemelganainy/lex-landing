import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faShieldHalved,
  faMicrochip,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
  return (
    // خلفية احادية ثابتة (بدون أي تأثيرات إضاءة)
    <section className="relative min-h-screen overflow-hidden bg-slate-900 text-white pt-32 pb-20 lg:pt-48">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* الجانب الأيمن: المحتوى النصي
            ترتيب: على الشاشات الصغيرة يظهر النص أولاً (order-1)
            وعلى الشاشات الكبيرة يبقى أول (order-1) ليكون على اليسار */}
        <div className="text-right order-1 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold text-lex-gold bg-lex-gold/10 rounded-full border border-white/10 tracking-widest uppercase">
            <FontAwesomeIcon icon={faMicrochip} className="text-lex-gold" />
            مستقبل الحلول البرمجية القانونية
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.15] mb-8">
            منظومة <span className="text-transparent bg-clip-text bg-gradient-to-l from-datalynx-primary to-blue-400">Data Lynx</span> <br />
            تُعيد تعريف الإدارة
          </h1>
          
          <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-xl ml-auto">
            نحن لا نقدم مجرد برامج، بل نبني بيئة عمل رقمية متكاملة تربط مكتبك  بهاتفك المحمول عبر تقنيات ربط محلي فائقة الأمان.
          </p>

          {/* أزرار بسيطة -- أزلت الظلال والتحركات والتوهجات */}
          <div className="flex flex-wrap gap-5 justify-start mb-6">
            <a 
              href="https://github.com/ibrahemelganainy/lawyer-erp-updates-3/releases/download/v1.1.0/LexOfficeSetup.zip" 
              className="px-10 py-5 bg-datalynx-primary text-white font-black text-lg rounded-2xl transition-colors"
              // ملاحظة: أزلت shadow و hover transform و أي إضاءة
            >
             حمل النسخة التجريبية للويندوز
              <FontAwesomeIcon icon={faArrowLeft} className="ml-3" />
            </a>
            <a href="#SystemSlider" className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg rounded-2xl transition-colors">
              مشاهدة الديمو
            </a>
          </div>

          {/* بطاقة الحماية — الآن دائماً تظهر أسفل "مستقبل الحلول البرمجية" وعلى كل الشاشات بنفس المقاسات */}
          <div className="inline-flex items-center gap-3 bg-slate-800/80 border border-white/10 p-3 rounded-2xl">
            <div className="w-12 h-12 bg-green-700/20 rounded-xl flex items-center justify-center text-green-400">
               <FontAwesomeIcon icon={faShieldHalved} className="text-2xl" />
            </div>
            <div>
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">End-to-End Encryption</p>
               <p className="text-sm font-black text-white">حماية محلية 100%</p>
            </div>
          </div>
        </div>

        {/* الجانب الأيسر: عرض الشعارات والبرمجيات
            ترتيب: على الشاشات الصغيرة يظهر بعد النص (order-2) */}
        <div className="relative order-2 lg:order-2 flex justify-center items-center h-[420px] md:h-[480px] lg:h-[500px]">
          
          {/* أزلت أي توهجات/blur/خلفيات لاحتفاظ بلون موحّد ونظيف */}
          
          {/* عمود/صف الأيقونات
              لا تظهر على الشاشات الصغيرة: مخفية تحت breakpoint md (أي تظهر من md فما فوق)
              => hidden on small, visible from md upwards */}
          <div className="relative z-10 hidden md:flex flex-row lg:flex-col gap-6 lg:gap-8 items-center lg:items-start">
            
            {/* 1. Data Lynx Icon - بدون توهج أو ظل */}
            <div className="group relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-slate-800 border border-white/8 rounded-[2.5rem] p-6 flex items-center justify-center transition-transform">
               <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Data Lynx" className="w-full h-full object-contain" />
               <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-datalynx-primary text-[10px] font-black px-2 py-1 rounded-md rotate-90 tracking-tighter uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                 Enterprise
               </div>
            </div>

            {/* 2. Lex Office Icon */}
            <div className="group relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-slate-800 border border-white/8 rounded-[2.5rem] p-6 flex items-center justify-center transition-transform">
               <img src={`${import.meta.env.BASE_URL}lex_office_logo.png`} alt="Lex Office" className="w-full h-full object-contain" />
               <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-blue-500 text-[10px] font-black px-2 py-1 rounded-md -rotate-90 tracking-tighter uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                 Desktop
               </div>
            </div>

            {/* 3. Lex Calendar Icon */}
            <div className="group relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-slate-800 border border-white/8 rounded-[2.5rem] p-6 flex items-center justify-center transition-transform">
               <img src={`${import.meta.env.BASE_URL}logo1.png`} alt="Lex Calendar" className="w-full h-full object-contain" />
               <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-lex-gold text-datalynx-dark text-[10px] font-black px-2 py-1 rounded-md rotate-90 tracking-tighter uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                 Mobile
               </div>
            </div>

          </div>

          {/* عنصر الربط البسيط: استخدمت خط بسيط بدون تدرجات ليتماشى مع الخلفية المسطحة */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-datalynx-primary/30 -z-10"></div>
          <div className="block lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] w-[75%] bg-datalynx-primary/30 -z-10"></div>
        </div>

      </div>
    </section>
  )
}