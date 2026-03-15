import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faStar, 
  faQuoteRight, 
  faQuoteLeft,
  faUserTie,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons'

const testimonials = [
  {
    name: 'أ. أحمد محمود',
    role: 'محامٍ بالنقض',
    text: 'نظام Lex Office غيّر طريقة عملنا بالكامل. الدقة في حساب المدد القانونية وفرت علينا الكثير من الوقت والجهد، والأرشفة جعلت الوصول لأي مستند مسألة ثوانٍ.',
    rating: 5,
    initials: 'أ.م'
  },
  {
    name: 'أ. سارة عبد الرحمن',
    role: 'مديرة مكتب قانوني',
    text: 'أفضل استثمار قمنا به للمكتب. الواجهة مريحة جداً ومريحة للعين في الاستخدام اليومي، والدعم الفني ممتاز. أنصح به أي مكتب يسعى للتحول الرقمي.',
    rating: 5,
    initials: 'س.ع'
  },
  {
    name: 'أ. كريم حسن',
    role: 'مستشار قانوني',
    text: 'ميزة العمل على الشبكة المحلية أعطتنا طمأنينة تامة لسرية ملفات عملائنا. مزامنة المواعيد مع تطبيق الموبايل أنقذتنا من تفويت جلسات هامة.',
    rating: 5,
    initials: 'ك.ح'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* عناصر خلفية تجميلية */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-right" dir="rtl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-datalynx-primary font-bold mb-3 flex items-center gap-2">
              <FontAwesomeIcon icon={faCircleCheck} className="text-sm" />
              شركاء النجاح
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-datalynx-dark leading-tight">
              نحن لا نبيع برمجيات فحسب، <br /> 
              <span className="text-slate-400 font-bold">بل نبني قصص نجاح</span>
            </h3>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
            <div className="flex text-amber-400">
               {[...Array(5)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="text-xs" />)}
            </div>
            <span className="text-sm font-bold text-datalynx-dark">4.9/5 تقييم العملاء</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative"
            >
              {/* أيقونة اقتباس علوية */}
              <div className="absolute -top-5 right-10 w-10 h-10 bg-datalynx-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-datalynx-primary/30 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>

              {/* النجوم */}
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-sm" />
                ))}
              </div>

              {/* نص التقييم */}
              <p className="text-slate-600 mb-10 leading-[1.8] text-lg font-medium italic relative">
                "{t.text}"
              </p>

              {/* معلومات الشخص */}
              <div className="flex items-center gap-4 border-t border-slate-50 pt-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-datalynx-dark font-black text-lg shadow-inner group-hover:from-datalynx-primary group-hover:to-blue-600 group-hover:text-white transition-all duration-500">
                  <FontAwesomeIcon icon={faUserTie} className="opacity-40 group-hover:opacity-100" />
                </div>
                <div>
                  <h5 className="font-black text-datalynx-dark text-lg group-hover:text-datalynx-primary transition-colors">
                    {t.name}
                  </h5>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* إحصائية سريعة أسفل السكشن */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 border-t border-slate-200 pt-12 opacity-60">
           <div className="text-center">
              <div className="text-3xl font-black text-datalynx-dark">+150</div>
              <div className="text-xs font-bold text-slate-500 uppercase">مكتب محاماة</div>
           </div>
           <div className="text-center border-x px-12 border-slate-200">
              <div className="text-3xl font-black text-datalynx-dark">99%</div>
              <div className="text-xs font-bold text-slate-500 uppercase">رضا العملاء</div>
           </div>
           <div className="text-center">
              <div className="text-3xl font-black text-datalynx-dark">24/7</div>
              <div className="text-xs font-bold text-slate-500 uppercase">دعم فني متميز</div>
           </div>
        </div>
      </div>
    </section>
  )
}