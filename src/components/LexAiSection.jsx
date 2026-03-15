import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, 
  faWandMagicSparkles, 
  faFileContract, 
  faPenNib, 
  faBrain, 
  faLanguage,
  faBolt,
  faScaleBalanced
} from '@fortawesome/free-solid-svg-icons';

export default function LexAiSection() {
  
  const aiFeatures = [
    { 
      title: 'توليد العقود التلقائي', 
      desc: 'صياغة عقود قانونية دقيقة ومخصصة بناءً على معطياتك في ثوانٍ معدودة.', 
      icon: faFileContract, 
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    { 
      title: 'المذكرات والعرائض', 
      desc: 'كتابة مذكرات دفاعية وصحف دعاوى باحترافية مع تسلسل منطقي للأحداث.', 
      icon: faPenNib, 
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20'
    },
    { 
      title: 'لغة قانونية رصينة', 
      desc: 'دعم كامل وفهم عميق للمصطلحات القانونية لضمان قوة الصياغة ورصانتها.', 
      icon: faLanguage, 
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20'
    },
    { 
      title: 'تحليل ذكي للقضايا', 
      desc: 'استيعاب تفاصيل النزاع واقتراح الدفوع القانونية والمواد المناسبة للقضية.', 
      icon: faBrain, 
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    }
  ];

  return (
    <section id="lex-ai" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* خلفية جمالية تعبر عن الذكاء الاصطناعي */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-right" dir="rtl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="text-blue-400 text-sm" />
            <span className="text-blue-100 text-xs font-bold tracking-[0.2em] uppercase">Powered by DataLynx</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
            المساعد القانوني الذكي <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Lex AI Pro</span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-lg">
            ارتقِ بإنتاجية مكتبك إلى مستوى غير مسبوق. دع الذكاء الاصطناعي يتولى مهام الصياغة المعقدة لتتفرغ أنت للتخطيط الاستراتيجي لقضاياك.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* قسم بطاقة الـ AI (الجانب الأيمن/الرئيسي) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 overflow-hidden h-full flex flex-col justify-center">
              
              <FontAwesomeIcon icon={faRobot} className="absolute -bottom-10 -left-10 text-[15rem] text-white/5 -rotate-12 group-hover:text-blue-500/10 transition-colors duration-500" />
              
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.5)] p-0.5 mb-8 hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center p-2">
                    {/* ضع مسار اللوجو الصحيح هنا */}
                    <img 
                    src="/ai2.png" 
                    alt="Lex AI Pro Logo" 
                    className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
                    />
                </div>
                </div>
                
                <h4 className="text-3xl font-black text-white mb-4 tracking-tight">Lex AI Pro</h4>
                <p className="text-slate-300 leading-relaxed mb-8 italic">
                  "صياغة قانونية محكمة، بضغطة زر. مساعدك الذي لا ينام ولا يخطئ."
                </p>

                <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center gap-3 group/btn">
                  <FontAwesomeIcon icon={faBolt} className="group-hover/btn:animate-bounce" />
                  جرب المساعد الذكي الآن
                </button>
              </div>
            </div>
          </div>

          {/* قسم المميزات (الجانب الأيسر) */}
          <div className="lg:col-span-7 order-1 lg:order-2 grid sm:grid-cols-2 gap-6">
            {aiFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-2xl bg-slate-800/30 border ${feature.borderColor} hover:bg-slate-800/50 transition-colors backdrop-blur-sm flex flex-col`}
              >
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5 border ${feature.borderColor}`}>
                  <FontAwesomeIcon icon={feature.icon} className={`${feature.color} text-2xl`} />
                </div>
                <h5 className="text-xl font-bold text-white mb-3">{feature.title}</h5>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
        
        {/* شريط الموثوقية القانونية */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 p-6 bg-slate-800/40 border border-white/5 rounded-2xl">
          <FontAwesomeIcon icon={faScaleBalanced} className="text-slate-500 text-2xl" />
          <p className="text-slate-300 text-sm font-medium">
            تم تدريب النماذج على آلاف الوثائق والقوانين لضمان دقة الصياغة وتوافقها مع <span className="text-blue-400 font-bold">التشريعات المحلية</span>.
          </p>
        </div>

      </div>
    </section>
  );
}