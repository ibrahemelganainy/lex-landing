import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// تم دمج جميع أيقونات البراندات هنا في الحزمة الصحيحة
import { 
  faFacebook, 
  faLinkedin, 
  faXTwitter, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons'

import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faArrowUp,
  faCaretLeft
} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020617] text-slate-400 pt-20 pb-10 relative overflow-hidden">
      {/* تأثير إضاءة خفي خلف الفوتر */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-datalynx-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* العمود الأول: هوية الشركة */}
          <div className="col-span-1 lg:col-span-1 text-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="group relative w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 bg-slate-900 border border-white/10 rounded-[2.5rem] p-3 flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:border-datalynx-primary/50">
               <img src="/logo.png" alt="Data Lynx" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tighter">
                Data<span className="text-datalynx-primary">Lynx</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed mb-8 opacity-80">
              نحن في داتا لينكس نبتكر حلولاً برمجية ذكية تتجاوز التوقعات. نركز على تمكين المكاتب القانونية بأدوات تكنولوجية تضمن الكفاءة، السرية، والنمو المستدام.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61562579024299" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-datalynx-primary hover:text-white hover:border-datalynx-primary transition-all duration-300">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-datalynx-primary hover:text-white hover:border-datalynx-primary transition-all duration-300">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-datalynx-primary hover:text-white hover:border-datalynx-primary transition-all duration-300">
                <FontAwesomeIcon icon={faXTwitter} />
              </a> */}
            </div>
          </div>

          {/* العمود الثاني: حلولنا البرمجية */}
          <div>
            <h4 className="text-white font-bold mb-8 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-datalynx-primary rounded-full"></span>
              منتجاتنا
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#products" className="group flex items-center gap-3 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faCaretLeft} className="text-datalynx-primary text-xs opacity-0 group-hover:opacity-100 transition-all" />
                  <div>
                    <span className="block font-bold">Lex Office</span>
                    <span className="text-[11px] opacity-60 italic">نظام إدارة المكاتب المكتبي</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#products" className="group flex items-center gap-3 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faCaretLeft} className="text-datalynx-primary text-xs opacity-0 group-hover:opacity-100 transition-all" />
                  <div>
                    <span className="block font-bold">Lex Calendar</span>
                    <span className="text-[11px] opacity-60 italic">تطبيق مزامنة المواعيد المحمول</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#features" className="group flex items-center gap-3 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faCaretLeft} className="text-datalynx-primary text-xs opacity-0 group-hover:opacity-100 transition-all" />
                  <span className="font-bold">خدمات الربط API</span>
                </a>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: الشركة والدعم */}
          <div>
            <h4 className="text-white font-bold mb-8 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-datalynx-primary rounded-full"></span>
              عن الشركة
            </h4>
            <ul className="space-y-4">
              <li><a href="#features" className="hover:text-white transition-colors">المميزات التقنية</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">خطط التراخيص</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">سياسة الخصوصية والأمان</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* العمود الرابع: بيانات التواصل */}
          <div>
            <h4 className="text-white font-bold mb-8 text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-datalynx-primary rounded-full"></span>
              تواصل مباشر
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-datalynx-primary shrink-0">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-1">اتصل بنا</span>
                  <span className="font-bold text-white tracking-widest" dir="ltr">+20 150 707 1671</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-datalynx-primary shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-1">راسلنا</span>
                  <span className="font-bold text-white">lexoffice.datalynx@proton.me</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-lex-gold group cursor-pointer">
                {/* أيقونة واتساب مع تأثيرات التمرير */}
                <div className="w-10 h-10 rounded-xl bg-lex-gold/10 flex items-center justify-center shrink-0 group-hover:bg-lex-gold group-hover:text-black transition-all">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                </div>

                <div className="flex flex-col">
                  <span className="block text-[10px] uppercase font-bold mb-1 opacity-80">متاح الآن</span>
                  
                  {/* جعل النص بالكامل قابلاً للنقر وتنسيقه بشكل أفضل */}
                  <a 
                    href="https://wa.me/201507071671" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block"
                  >
                    <span className="font-bold block group-hover:underline">تحدث عبر واتساب</span>
                    <span className="block text-sm text-slate-400 group-hover:text-lex-gold transition-colors mt-0.5">
                      
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* الجزء السفلي: حقوق الملكية */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm opacity-60">
            © {new Date().getFullYear()} جميع الحقوق محفوظة لشركة <span className="text-white font-bold">Data Lynx</span> لتقنية المعلومات.
          </div>
          
          {/* زر العودة للأعلى */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-sm font-bold text-white/50 hover:text-datalynx-primary transition-all"
          >
            العودة للأعلى 
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-datalynx-primary group-hover:bg-datalynx-primary group-hover:text-white transition-all">
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}