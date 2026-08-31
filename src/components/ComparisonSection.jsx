import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFolderOpen, 
  faCalendarXmark, 
  faScaleUnbalanced,
  faFolderTree,
  faCalendarCheck,
  faArrowRightArrowLeft,
  faXmarkCircle,
  faCheckCircle,
  faTriangleExclamation,
  faWandMagicSparkles,
  faBolt,
  faUsersSlash,
  faSliders
} from '@fortawesome/free-solid-svg-icons';

export default function ComparisonSection() {
  return (
    <section id="lex-before-after" className="py-24 bg-slate-950 text-white relative overflow-hidden" dir="rtl">
      
      {/* إضاءات خلفية ناعمة (Glow Effects) */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-right">
        
        {/* العلوية / Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full mb-6 backdrop-blur-md shadow-inner">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="text-blue-400 text-sm" />
            <span className="text-slate-300 text-xs font-bold tracking-widest uppercase">مقارنة التحول الرقمي</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            مكتبك القانوني: <span className="text-rose-500">قبل</span> أم <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">بعد</span> Lex Office؟
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-lg">
            انتقل بمهنتك من قيود العمل الورقي التقليدي والأخطاء المكلفة إلى منظومة رقمية متكاملة تدار بذكاء وسرعة فائقة.
          </p>
        </div>

        {/* شبكة المقارنة */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch relative">
          
          {/* أيقونة الفصل بين العمودين */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-slate-900 border border-slate-700/80 rounded-2xl items-center justify-center shadow-2xl z-20 backdrop-blur-xl">
            <FontAwesomeIcon icon={faArrowRightArrowLeft} className="text-blue-400 text-lg" />
          </div>

          {/* بطاقة: قبل (المعاناة) */}
          <div className="bg-slate-900/60 border border-rose-500/20 rounded-3xl p-8 md:p-10 backdrop-blur-xl relative overflow-hidden group hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-all"></div>
            
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center justify-center shrink-0">
                    <FontAwesomeIcon icon={faXmarkCircle} className="text-rose-400 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">قبل Lex Office</h3>
                    <p className="text-rose-400 font-medium text-xs mt-0.5">الأسلوب التقليدي (المعاناة اليومية)</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs rounded-lg font-bold">بطيء ومكلف</span>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-rose-500/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faFolderOpen} className="text-rose-400 text-base" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-200 mb-1">فوضى الورق والملفات الضائعة</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      أكوام متراكمة من المستندات، ضياع أوراق القضية المهمة، واستهلاك ساعات للبحث عن ملف موكل.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-rose-500/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faCalendarXmark} className="text-rose-400 text-base" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-200 mb-1">تفويت الجلسات والطعون</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      الاعتماد على الملاحق الورقية والذاكرة يتسبب في نسيان مواعيد المرافعة الحرجِة والطعون القانونية.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-rose-500/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faUsersSlash} className="text-rose-400 text-base" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-200 mb-1">تشتت المهام ومتابعة الموكلين</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      صعوبة معرفة آخر التحديثات الخاصة بطلبات الموكلين، وتداخل المهام اليومية بين أفراد فريق العمل.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 text-center">
              <p className="text-xs text-rose-400/80 font-semibold flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faTriangleExclamation} />
                تضيع ما يصل إلى 35% من وقت المحامي يومياً في أشكال الفوضى الإدارية.
              </p>
            </div>
          </div>

          {/* بطاقة: بعد (الحل الرقمي) */}
          <div className="bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-blue-950/40 border border-blue-500/30 rounded-3xl p-8 md:p-10 backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/60 shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all"></div>

            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-cyan-400 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">بعد Lex Office</h3>
                    <p className="text-cyan-400 font-medium text-xs mt-0.5">التحول الرقمي المتقدم</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-cyan-300 text-xs rounded-lg font-bold flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faBolt} className="text-amber-400 text-xs" />
                  أوتوماتيكي 100%
                </span>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-blue-500/20 hover:border-cyan-400/40 transition-all shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faFolderTree} className="text-cyan-400 text-base" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">أرشفة رقمية فورية وآمنة</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      ملف إلكتروني شامل موحد لكل قضية. وصول فوري لأي وثيقة أو عقد بضغطة زر من أي جهاز وفي أي وقت.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-blue-500/20 hover:border-cyan-400/40 transition-all shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faCalendarCheck} className="text-cyan-400 text-base" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">حساب تلقائي وتنبيهات ذكية</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      إشعارات مسبقة بالجلسات ومواعيد الطعون القانونية، مع جدولة تلقائية تضمن عدم تفويت أي موعد.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-blue-500/20 hover:border-cyan-400/40 transition-all shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faSliders} className="text-cyan-400 text-base" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">لوحة تحكم وتتبع شامل للمكتب</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      شاشة واحدة تجمع لك جميع الموكلين، حالة كل قضية، والمهام اليومية المسندة لفريق عملك بكل سهولة.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 text-center">
              <p className="text-xs text-cyan-300 font-semibold">
                ارتقِ بمستواك المهني ووفر عشرات الساعات أسبوعياً لصالح موكلك.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}