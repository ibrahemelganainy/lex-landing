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
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white pt-32 pb-20 lg:pt-48">
      
      {/* تأثيرات الإضاءة الثابتة - مستوحاة من موديول Lex AI */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-datalynx-primary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lex-gold/5 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>
      
      {/* شبكة خفيفة جداً لإعطاء مظهر تقني (اختياري) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* الجانب الأيمن: المحتوى النصي */}
        <div className="text-right order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold text-lex-gold bg-lex-gold/10 rounded-full border border-white/10 backdrop-blur-md tracking-widest uppercase">
            <FontAwesomeIcon icon={faMicrochip} className="text-lex-gold" />
            مستقبل الحلول البرمجية القانونية
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.15] mb-8">
            منظومة <span className="text-transparent bg-clip-text bg-gradient-to-l from-datalynx-primary to-blue-400">Data Lynx</span> <br />
            تُعيد تعريف الإدارة
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl ml-auto">
            نحن لا نقدم مجرد برامج، بل نبني بيئة عمل رقمية متكاملة تربط مكتبك المكتبي بهاتفك المحمول عبر تقنيات ربط محلي فائقة الأمان.
          </p>

          <div className="flex flex-wrap gap-5 justify-start">
              <a 
              href="https://github.com/ibrahemelganainy/lawyer-erp-updates-3/releases/download/v1.1.0/LexOfficeSetup.zip" 
              className="group px-10 py-5 cursor-pointer bg-datalynx-primary hover:bg-blue-600 text-white font-black text-lg rounded-2xl transition-all shadow-[0_20px_40px_rgba(59,130,246,0.25)] flex items-center gap-3"
            >
              ابدأ الآن مجاناً
              <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-2 transition-transform" />
            </a>
            <a  href="#SystemSlider" className="px-10 py-5 cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg rounded-2xl transition-all backdrop-blur-md">
              مشاهدة الديمو
            </a>
          </div>
        </div>

        {/* الجانب الأيسر: عرض الشعارات والبرمجيات */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center h-[420px] md:h-[480px] lg:h-[500px]">
          
          {/* توهج مركزي خلف الأيقونات */}
          <div className="absolute w-72 h-72 bg-datalynx-primary rounded-full blur-[100px] opacity-20"></div>

          {/* عمود/صف الأيقونات */}
          <div className="relative z-10 flex flex-row lg:flex-col gap-6 lg:gap-8 items-center lg:items-start">
            
            {/* 1. Data Lynx Icon */}
            <div className="group relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-slate-900 border border-white/10 rounded-[2.5rem] p-6 flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:border-datalynx-primary/50">
               <img src="/logo.png" alt="Data Lynx" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
               <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-datalynx-primary text-[10px] font-black px-2 py-1 rounded-md rotate-90 tracking-tighter uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                 Enterprise
               </div>
            </div>

            {/* 2. Lex Office Icon */}
            <div className="group relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-slate-900 border border-white/10 rounded-[2.5rem] p-6 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:border-blue-400">
               <img src="/lex_office_logo.png" alt="Lex Office" className="w-full h-full object-contain" />
               <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-blue-500 text-[10px] font-black px-2 py-1 rounded-md -rotate-90 tracking-tighter uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                 Desktop
               </div>
            </div>

            {/* 3. Lex Calendar Icon */}
            <div className="group relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-slate-900 border border-white/10 rounded-[2.5rem] p-6 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:border-lex-gold/50">
               <img src="/logo1.png" alt="Lex Calendar" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]" />
               <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-lex-gold text-datalynx-dark text-[10px] font-black px-2 py-1 rounded-md rotate-90 tracking-tighter uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                 Mobile
               </div>
            </div>

          </div>

          {/* بطاقة عائمة للأمان التقني */}
          <div className="absolute -bottom-5 sm:-bottom-10 sm:left-1/2 sm:-translate-x-1/2 md:right-96 md:left-auto md:translate-x-0 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-3xl flex items-center gap-3">
             <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-500">
                <FontAwesomeIcon icon={faShieldHalved} className="text-2xl" />
             </div>
             <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">End-to-End Encryption</p>
                <p className="text-sm font-black text-white">حماية محلية 100%</p>
             </div>
          </div>
          
          {/* عنصر الربط */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-gradient-to-b from-datalynx-primary/40 via-blue-400/40 to-lex-gold/40 -z-10"></div>
          <div className="block lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] w-[75%] bg-gradient-to-r from-datalynx-primary/40 via-blue-400/40 to-lex-gold/40 -z-10"></div>
        </div>

      </div>
    </section>
  )
}