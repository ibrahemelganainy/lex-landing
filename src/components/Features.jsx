import React from 'react'

const features = [
  {title: 'إدارة القضايا', desc: 'جداول أول درجة، ثاني، نقض ومحاضر مع سجل كامل للإجراءات والقرارات.'},
  {title: 'الأجندة الذكية', desc: 'حساب المدد القانونية والتذكير الآلي للمحامين.'},
  {title: 'أرشفة المستندات', desc: 'تخزين وOCR والبحث داخل ملفات PDF.'},
  {title: 'التقارير', desc: 'تقارير جاهزة عن القضايا، المديونيات، والإجراءات غير المسددة.'},
]

export default function Features(){
  return (
    <section id="features" className="py-16">
      <div className="container">
        <h3 className="text-2xl font-bold mb-6">مميزات Lex Office</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">{f.title}</h4>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}