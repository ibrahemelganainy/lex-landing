import React from 'react'

export default function PrivacySection() {
  return (
    <section id='privacy' className="py-20 bg-datalynx-dark text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="inline-block px-4 py-1 bg-lex-success/10 text-lex-success border border-lex-success/20 rounded-full text-sm font-bold mb-6">
            أمان بمستوى بنكي 🛡️
          </div>
          <h2 className="text-4xl font-black mb-6 leading-tight">بياناتك ملكك، داخل مكتبك فقط</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            نحن نعلم قيمة السرية في مهنة المحاماة. لذا يعمل Lex Office عبر <span className="text-white font-bold">الشبكة المحلية (LAN)</span>. 
            قاعدة البيانات مشفرة، والاتصال بين الأجهزة الفرعية وتطبيق الموبايل يتم مباشرة دون الحاجة لرفع أسرار موكليك على الإنترنت.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="border-r-2 border-datalynx-primary pr-4">
              <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-2">تراخيص آمنة</h4>
              <p className="text-sm text-slate-400">إدارة تراخيص امنة لضمان حقوقك.</p>
            </div>
            <div className="border-r-2 border-lex-gold pr-4">
              <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-2">نسخ احتياطي</h4>
              <p className="text-sm text-slate-400">تلقائي على الجهاز أو Google Drive مشفر.</p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
           {/* هنا يمكن وضع صورة توضيحية لربط الموبايل بالكمبيوتر عبر الراوتر المحلي */}
           <div className="p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 text-center">
              <div className="text-6xl mb-4">💻 ↔️ 📱</div>
              <p className="font-mono text-datalynx-primary">Local API Sync: Active</p>
              <div className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-datalynx-primary"></div>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}