import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { label: 'خدماتنا', href: '#services' },
  { label: 'لماذا نحن', href: '#why-us' },
  { label: 'آلية العمل', href: '#process' },
  { label: 'تواصل معنا', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-ink-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-lux flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
         <img
  src={logo}
  alt="الرهوان الذهبي "
  className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-300"
/>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-ink-900 tracking-tight">
              الرهوان الذهبي
            </span>
            <span className="text-xs text-gold-600 mt-0.5 font-semibold">نقل العفش والأثاث</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="btn-ghost text-sm">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:0570542252" className="btn-ghost text-sm gap-1.5">
            <Phone className="w-4 h-4" />
            <span dir="ltr">0570542252</span>
          </a>
          <a href="#contact" className="btn-primary text-sm py-2.5 px-6">
            احجز الآن
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-11 h-11 rounded-xl flex items-center justify-center text-ink-900 hover:bg-ink-100/60 transition-colors"
          aria-label="القائمة"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-[28rem]' : 'max-h-0'
        }`}
      >
        <div className="container-lux pb-6 pt-2 flex flex-col gap-1 bg-white/95 backdrop-blur-xl border-b border-ink-100">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-ink-700 font-medium hover:bg-gold-50 hover:text-gold-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 px-4 py-2 mt-2">
            <a href="tel:0570542252" className="btn-secondary text-sm flex-1">
              <Phone className="w-4 h-4" />
              <span dir="ltr">0570542252</span>
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary text-sm flex-1">
              احجز الآن
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
