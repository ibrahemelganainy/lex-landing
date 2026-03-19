import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCalendarCheck, 
  faCalendarDays,
  faCalendarPlus,
  faGavel, 
  faChartLine,
  faBrain,
  faUsers,
  faListCheck,
  faFileContract, 
  faBoxArchive, 
  faChartPie, 
  faMagnifyingGlass, 
  faClipboardList, 
  faShieldHalved,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'

const allFeatures = [
  {
    title: 'المساعد القانوني الذكي',
    desc: 'مساعد قانوني ذكي Lex Ai pro 2.5 لديه القدرة علي توليد النماذج والصيغ القانونية بدقة عالية وسرعة البرق مع دعم كامل للغة القانونية.',
    icon: faBrain,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  },
  {
    title: 'الأجندة والمدد القانونية',
    desc: 'حساب تلقائي دقيق لمواعيد الاستئناف، وتسجيل مواعيد مخصصة لكل محام، واعلانات البيع مع تنبيهات ذكية قبل الموعد.',
    icon: faCalendarCheck,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'حساب مدد التجديد من الشطب',
    desc: 'حساب المدد القانونية للدعاوي المشطوبة وإدراجها في الاجندة بشكل تلقائي.',
    icon: faCalendarDays,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    title: 'حساب مدد التعجيل من الوقف',
    desc: 'حساب المدد القانونية للدعاوي الموقوفة تعليقبا او جزائيا وإدراجها في الاجندة بشكل تلقائي.',
    icon: faCalendarPlus,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    title: 'مجموعة واسعة من التقارير المتقدمة',
    desc: 'تقارير متنوعة عن الأداء الكلي وتقارير مخصصة لكل محام حسب صلاحياته مع امكانية الطباعة والتصدير.',
    icon: faChartLine,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    title: 'إدارة الجداول القضائية',
    desc: 'موديولات للجداول (أول درجة، استئناف، نقض) مع سجل كامل للإجراءات والقرارات اليومية ورول الجلسات وسجلات كاملة للاحكام القضائية مرتبة حسب الدرجة والاجراءات.',
    icon: faGavel,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  },
  {
    title: 'إدارة الصلاحيات والأدوار',
    desc: 'مجموعة واسعة من الصلاحيات المتقدمة مع حرية كاملة في إنشاء ادوار وربطها بالصلاحيات واسناد دور لكل محام مع القدر علي تخصيص الصلاحيات بحرية تامة.',
    icon: faUsers,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50'
  },
  {
    title: 'إدارة ذكية لمتابعة تنفيذ الأحكام',
    desc: 'إدارة التنفيذ النقدي والعيني، تسجيل محاضر الحجز، ومتابعة مواعيد البيع وتنبيهات الأقساط ومتابعة ذكية للاحكام الجناية.',
    icon: faFileContract,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50'
  },
  {
    title: 'أرشفة المستندات الإلكترونية',
    desc: 'نظام أرشفة لكل قضية ومحضر مع إمكانية طباعة وتصدير المستندات وتصنيفها المتقدم.',
    icon: faBoxArchive,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    title: 'لوحات التحكم (Dashboards)',
    desc: 'داشبورد للأدمن للرقابة الكاملة، وواجهة للمحامي تعرض قضاياه ومواعيده المسندة إليه فقط.',
    icon: faChartPie,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    title: 'البحث المتقدم والفلترة',
    desc: 'محرك بحث ذكي يسمح بالبحث باسم الموكل أو الخصم مع فلاتر لتخصيص النتائج وتصديرها.',
    icon: faMagnifyingGlass,
    color: 'text-sky-600',
    bgColor: 'bg-sky-50'
  },
  {
    title: 'سجل العمليات (Audit Log)',
    desc: 'مراقبة كاملة لكل تعديل أو إضافة في النظام مع تقارير شاملة عن الإجراءات غير المسددة.',
    icon: faClipboardList,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50'
  },
  {
    title: 'الأمان والنسخ الاحتياطي',
    desc: 'تشفير كامل لقاعدة البيانات مع خيارات النسخ التلقائي المجدول على الجهاز أو Google Drive.',
    icon: faShieldHalved,
    color: 'text-slate-700',
    bgColor: 'bg-slate-100'
  },
  {
    title: 'توزيع القضايا والمهام',
    desc: 'دعم اسناد القضايا لمحام او اكثر وتوزيع المهام مع نظام ذكي لمتابعة الأداء.',
    icon: faListCheck,
    color: 'text-red-700',
    bgColor: 'bg-red-100'
  }
]

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-white relative">
      {/* خلفية تجميلية خفيفة */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-right mb-20">
          <h2 className="text-datalynx-primary font-bold text-lg mb-4 flex items-center gap-3">
            <span className="w-12 h-[2px] bg-datalynx-primary"></span>
            القدرات التقنية للنظام
          </h2>
          <h3 className="text-4xl lg:text-5xl font-black text-datalynx-dark leading-tight">
            حلول برمجية متكاملة <br /> <span className="text-slate-400">لإدارة أعقد المكاتب القانونية</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {allFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-start transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`mb-6 w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-[10deg] shadow-sm`}>
                <FontAwesomeIcon 
                  icon={feature.icon} 
                  className={`text-2xl ${feature.color}`} 
                />
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-datalynx-dark mb-3 group-hover:text-datalynx-primary transition-colors">
                {feature.title}
              </h4>
              <p className="text-slate-500 leading-relaxed text-sm text-right">
                {feature.desc}
              </p>
              
              {/* Decorator Line */}
              <div className="mt-6 w-8 h-1 bg-slate-100 group-hover:w-full group-hover:bg-datalynx-primary transition-all duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* الميزات الفرعية السريعة */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'تصدير Excel & PDF بضغطة زر',
            'دعم كامل للـ Dark Mode',
            'طباعة وتصدير التقارير المتقدمة',
            'تنبيهات فورية عبر الموبايل'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <FontAwesomeIcon icon={faCheckCircle} className="text-datalynx-primary" />
              <span className="font-bold text-datalynx-dark text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}