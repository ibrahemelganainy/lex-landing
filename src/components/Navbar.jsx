import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // تغيير شكل النافبار عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'المنتجات', href: '#products' },
    { name: 'المميزات', href: '#features' },
    { name: 'الخصوصية', href: '#privacy' },
    { name: 'الباقات', href: '#pricing' },
  ]

  return (
    <nav className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer">
          {/* 1. Data Lynx Icon */}
            <div className="group relative w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 bg-slate-900 border border-white/10 rounded-[2.5rem] p-3 flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:border-datalynx-primary/50">
               <img src="/logo.png" alt="Data Lynx" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            </div>
          <div className="flex flex-col">
            <span className={`text-xl font-black tracking-tight leading-none ${isScrolled ? 'text-datalynx-dark' : 'text-datalynx-dark md:text-white'}`}>
              Data<span className="text-datalynx-primary">Lynx</span>
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Software Solutions</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-colors hover:text-datalynx-primary ${
                isScrolled ? 'text-slate-600' : 'text-slate-600 md:text-slate-200 md:hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://github.com/ibrahemelganainy/lawyer-erp-updates-3/releases/download/v1.1.0/LexOfficeSetup.zip" 
            className="px-6 py-2.5 bg-datalynx-primary hover:bg-blue-600 text-white text-sm font-bold rounded-full transition-all shadow-md hover:shadow-blue-500/20 transform hover:-translate-y-0.5"
          >
            طلب نسخة تجريبية
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-datalynx-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-4 h-0.5 bg-current"></div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 w-full bg-white shadow-xl border-t transition-all duration-300 origin-top ${
        isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
      }`}>
        <div className="p-6 flex flex-col gap-4 text-right">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-datalynx-dark hover:text-datalynx-primary"
            >
              {link.name}
            </a>
          ))}
          <hr className="border-slate-100" />
          <a 
            href="https://github.com/ibrahemelganainy/lex-calendar/releases/download/v1/application-b816a232-7519-45bc-afc2-9d6bbd232eaa.apk" 
            className="w-full py-4 bg-datalynx-dark text-white text-center rounded-2xl font-bold"
          >
           download lex calendar
          </a>
        </div>
      </div>
    </nav>
  )
}