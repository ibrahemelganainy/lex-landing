import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// استيراد ستايلات Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const screenshots = [
  {
    title: "لوحة التحكم الرئيسية",
    desc: "نظرة شاملة على القضايا، المواعيد، وإحصائيات المكتب في شاشة واحدة.",
    img: "/screen1.png" // استبدلها بمسار صورك
  },
  {
    title: "لوحة التحكم الرئيسية",
    desc: "نظرة شاملة على القضايا، المواعيد، وإحصائيات المكتب في شاشة واحدة.",
    img: "/screen12.png" // استبدلها بمسار صورك
  },
  {
    title: "لوحة التحكم الرئيسية",
    desc: "نظرة شاملة على القضايا، المواعيد، وإحصائيات المكتب في شاشة واحدة.",
    img: "/screen2.png" // استبدلها بمسار صورك
  },
  {
    title: "لوحة التحكم الرئيسية",
    desc: "نظرة شاملة على القضايا، المواعيد، وإحصائيات المكتب في شاشة واحدة.",
    img: "/screen13.png" // استبدلها بمسار صورك
  },
  {
    title: "لوحة التحكم الرئيسية",
    desc: "نظرة شاملة على القضايا، المواعيد، وإحصائيات المكتب في شاشة واحدة.",
    img: "/screen1.png" // استبدلها بمسار صورك
  },
  {
    title: "المساعد الذكي Lex AI",
    desc: "واجهة محادثة ذكية لتوليد المذكرات القانونية وصياغة العقود.",
    img: "/screen8.png"
  },
  {
    title: "المساعد الذكي Lex AI",
    desc: "واجهة محادثة ذكية لتوليد المذكرات القانونية وصياغة العقود.",
    img: "/screen26.png"
  },
  {
    title: "المساعد الذكي Lex AI",
    desc: "واجهة محادثة ذكية لتوليد المذكرات القانونية وصياغة العقود.",
    img: "/screen9.png"
  },
  {
    title: "الاجندة والمواعيد",
    desc: "نظرة شاملة على القضايا، المواعيد، وإحصائيات المكتب في شاشة واحدة.",
    img: "/screen3.png" // استبدلها بمسار صورك
  },
  {
    title: "الاجندة والمواعيد",
    desc: "تنظيم احترافي لكافة تفاصيل القضية، الجلسات، والمستندات المرتبطة.",
    img: "/screen4.png"
  },
  {
    title: "الاجندة والمواعيد",
    desc: "واجهة محادثة ذكية لتوليد المذكرات القانونية وصياغة العقود.",
    img: "/screen14.png"
  },
  {
    title: "الاجندة والمواعيد",
    desc: "نظام أرشفة متطور يتيح لك الوصول لأي مستند خلال ثوانٍ معدودة.",
    img: "/screen15.png"
  },
  {
    title: "الاجندة والمواعيد",
    desc: "نظرة شاملة على القضايا، المواعيد، وإحصائيات المكتب في شاشة واحدة.",
    img: "/screen7.png" // استبدلها بمسار صورك
  },
  {
    title: "الاجندة والمواعيد",
    desc: "تنظيم احترافي لكافة تفاصيل القضية، الجلسات، والمستندات المرتبطة.",
    img: "/screen6.png"
  },
  {
    title: "الاجندة والمواعيد",
    desc: "واجهة محادثة ذكية لتوليد المذكرات القانونية وصياغة العقود.",
    img: "/screen5.png"
  },
  {
    title: "الاجندة والمواعيد",
    desc: "نظام أرشفة متطور يتيح لك الوصول لأي مستند خلال ثوانٍ معدودة.",
    img: "/screen16.png"
  },
  {
    title: "لوحة التحكم الرئيسية",
    desc: "نظرة شاملة على القضايا، المواعيد، وإحصائيات المكتب في شاشة واحدة.",
    img: "/screen17.png" // استبدلها بمسار صورك
  },
  {
    title: "إدارة ملف القضايا",
    desc: "تنظيم احترافي لكافة تفاصيل القضية، الجلسات، والمستندات المرتبطة.",
    img: "/screen18.png"
  },
  {
    title: "المساعد الذكي Lex AI",
    desc: "واجهة محادثة ذكية لتوليد المذكرات القانونية وصياغة العقود.",
    img: "/screen19.png"
  },
  {
    title: "الأرشفة الرقمية",
    desc: "نظام أرشفة متطور يتيح لك الوصول لأي مستند خلال ثوانٍ معدودة.",
    img: "/screen20.png"
  },
  {
    title: "لوحة التحكم الرئيسية",
    desc: "نظرة شاملة على القضايا، المواعيد، وإحصائيات المكتب في شاشة واحدة.",
    img: "/screen21.png" // استبدلها بمسار صورك
  },
  {
    title: "إدارة ملف القضايا",
    desc: "تنظيم احترافي لكافة تفاصيل القضية، الجلسات، والمستندات المرتبطة.",
    img: "/screen22.png"
  },
  {
    title: "المساعد الذكي Lex AI",
    desc: "واجهة محادثة ذكية لتوليد المذكرات القانونية وصياغة العقود.",
    img: "/screen23.png"
  },
  {
    title: "الأرشفة الرقمية",
    desc: "نظام أرشفة متطور يتيح لك الوصول لأي مستند خلال ثوانٍ معدودة.",
    img: "/screen24.png"
  },
  {
    title: "لوحة التحكم الرئيسية",
    desc: "نظرة شاملة على القضايا، المواعيد، وإحصائيات المكتب في شاشة واحدة.",
    img: "/screen25.png" // استبدلها بمسار صورك
  },
  {
    title: "إدارة ملف القضايا",
    desc: "تنظيم احترافي لكافة تفاصيل القضية، الجلسات، والمستندات المرتبطة.",
    img: "/screen11.png"
  }
];

export default function SystemSlider() {
  return (
    <section id="SystemSlider" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* خلفية جمالية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-right" dir="rtl">
        
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm">Product Tour</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">واجهات صُممت بعناية</h3>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            استمتع بتجربة مستخدم سلسة وواجهات عصرية تدمج بين القوة والبساطة في آن واحد.
          </p>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true, el: '.custom-pag' }}
            navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5"
          >
            {screenshots.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-slate-900 p-4 md:p-8 flex flex-col items-center">
                  
                  {/* Browser Mockup Header */}
                  <div className="w-full bg-slate-800 rounded-t-xl p-3 flex items-center justify-between border-x border-t border-white/10">
                    <div className="flex gap-2">
                      <FontAwesomeIcon icon={faCircle} className="text-[10px] text-red-500/50" />
                      <FontAwesomeIcon icon={faCircle} className="text-[10px] text-amber-500/50" />
                      <FontAwesomeIcon icon={faCircle} className="text-[10px] text-green-500/50" />
                    </div>
                    <div className="bg-slate-950/50 px-10 py-1 rounded-md text-[10px] text-slate-500 font-mono">
                      {item.title} - Lex Office
                    </div>
                    <div className="w-10"></div>
                  </div>

                  {/* Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-x border-b border-white/10 rounded-b-xl shadow-inner">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  </div>

                  {/* Caption Area */}
                  <div className="mt-8 text-center max-w-2xl">
                    <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="prev-btn absolute top-1/2 -right-8 lg:-right-16 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all z-20">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button className="next-btn absolute top-1/2 -left-8 lg:-left-16 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all z-20">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>

        {/* Custom Pagination Container */}
        <div className="custom-pag flex justify-center mt-10 gap-2"></div>

      </div>

      {/* CSS لإضافة لمسات جمالية للـ Pagination */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-pag .swiper-pagination-bullet {
          background: #475569 !important;
          width: 12px;
          height: 12px;
          opacity: 1;
          transition: all 0.3s;
        }
        .custom-pag .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          width: 30px;
          border-radius: 6px;
        }
      `}} />
    </section>
  );
}