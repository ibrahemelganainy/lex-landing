import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faDesktop, 
  faMobileScreenButton, 
  faShieldHalved, 
  faRotate,
  faScaleBalanced,
  faFolderOpen,
  faCalendarDay,
  faMoneyBillWave,
  faHourglassHalf,
  faSync,
  faBell,
  faFilter,
  faCalendarDays
} from '@fortawesome/free-solid-svg-icons'

export default function ProductsSection() {
  
  const officeFeatures = [
    { label: 'إدارة الجلسات', icon: faScaleBalanced, color: 'text-blue-500' },
    { label: 'أرشفة ذكية', icon: faFolderOpen, color: 'text-indigo-500' },
    { label: 'إدارة الموكلين', icon: faMoneyBillWave, color: 'text-emerald-500' },
    { label: 'حساب المدد', icon: faHourglassHalf, color: 'text-amber-500' }
  ];

  const calendarFeatures = [
    { label: 'مزامنة فورية', icon: faSync, color: 'text-amber-600' },
    { label: 'إشعارات ذكية', icon: faBell, color: 'text-rose-500' },
    { label: 'عرض يومي', icon: faCalendarDay, color: 'text-red-500' },
    { label: 'عرض شهري وأسبوعي', icon: faCalendarDays, color: 'text-blue-600' }
  ];

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-right" dir="rtl">
        <div className="text-center mb-20">
          <h2 className="text-datalynx-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">Product Ecosystem</h2>
          <h3 className="text-4xl md:text-5xl font-black text-datalynx-dark mb-6">حلولنا البرمجية المتكاملة</h3>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            منظومة متناغمة تجمع بين قوة المعالجة المكتبية وحرية الحركة عبر الموبايل.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* المنتج الأول: Lex Office */}
          <div className="group relative bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
            <FontAwesomeIcon icon={faDesktop} className="absolute -bottom-10 -left-10 text-[12rem] text-slate-200/40 -rotate-12 group-hover:text-datalynx-primary/10 transition-colors" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl bg-white shadow-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <img src={`${import.meta.env.BASE_URL}lex_office_logo.png`} alt="Lex Office Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-datalynx-dark mb-1 tracking-tight">Lex Office</h4>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-datalynx-primary/10 text-datalynx-primary text-[10px] font-bold rounded-full uppercase">Desktop System</span>
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed text-lg italic">"القلب النابض لمكتبك لإدارة القضايا والمدد القانونية."</p>

              <div className="grid grid-cols-2 gap-y-6 mb-10">
                {officeFeatures.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <div className={`w-8 h-8 rounded-lg ${item.color.replace('text', 'bg')}/10 flex items-center justify-center`}>
                      <FontAwesomeIcon icon={item.icon} className={`${item.color} text-xs`} />
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>

              <button className="w-full md:w-auto px-8 py-4 bg-datalynx-dark text-white rounded-2xl font-bold hover:bg-datalynx-primary transition-colors shadow-lg">
                اكتشف مميزات النظام
              </button>
            </div>
          </div>

          {/* المنتج الثاني: Lex Calendar */}
          <div className="group relative bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
            <FontAwesomeIcon icon={faMobileScreenButton} className="absolute -bottom-10 -left-10 text-[12rem] text-slate-200/40 -rotate-12 group-hover:text-lex-gold/10 transition-colors" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl bg-white shadow-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <img src={`${import.meta.env.BASE_URL}logo1.png`} alt="Lex Calendar Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-3xl font-black text-datalynx-dark mb-1 tracking-tight">Lex Calendar</h4>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-lex-gold/20 text-amber-700 text-[10px] font-bold rounded-full uppercase">Mobile Companion</span>
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed text-lg italic">"مساعدك الشخصي في المحكمة لمتابعة المواعيد المسندة."</p>

              <div className="grid grid-cols-2 gap-y-6 mb-10">
                {calendarFeatures.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <div className={`w-8 h-8 rounded-lg ${item.color.replace('text', 'bg')}/10 flex items-center justify-center`}>
                      <FontAwesomeIcon icon={item.icon} className={`${item.color} text-xs`} />
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>

              <a 
                href="https://github.com/ibrahemelganainy/lex-calendar/releases/download/v1/application-b816a232-7519-45bc-afc2-9d6bbd232eaa.apk" 
                className="w-full md:w-auto px-8 py-4 border-2 border-datalynx-dark text-datalynx-dark rounded-2xl font-bold hover:bg-datalynx-dark hover:text-white transition-all"
              >
               تحميل التطبيق
              </a>
            </div>
          </div>
        </div>

        {/* Local API Banner */}
        <div className="mt-16 p-8 bg-slate-900 rounded-[2rem] text-white flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/5 shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-datalynx-primary/20 flex items-center justify-center text-2xl text-datalynx-primary">
              <FontAwesomeIcon icon={faRotate} className="animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div>
              <h5 className="text-xl font-bold mb-1">اتصال محلي مؤمن (LAN Sync)</h5>
              <p className="text-slate-400 text-sm">مزامنة البيانات تتم مباشرة بين أجهزتك دون الحاجة للإنترنت.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
             <FontAwesomeIcon icon={faShieldHalved} className="text-lex-gold text-2xl" />
             <span className="text-sm font-bold tracking-wider">LOCAL API SECURED</span>
          </div>
        </div>
      </div>
    </section>
  )
}