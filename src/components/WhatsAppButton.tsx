import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '966570542252';
const WHATSAPP_MESSAGE = 'مرحباً، أرغب في الاستفسار عن خدمة نقل العفش.';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setTooltipOpen(true), 1500);
    return () => clearTimeout(timer);
  }, [visible]);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 flex items-center gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {/* Tooltip */}
      <div
        className={`hidden sm:flex items-center bg-white rounded-2xl shadow-xl shadow-ink-900/10 ring-1 ring-ink-100 pl-4 pr-3 py-2.5 transition-all duration-300 ${
          tooltipOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setTooltipOpen(false)}
          className="w-6 h-6 rounded-full flex items-center justify-center text-ink-400 hover:text-ink-700 hover:bg-ink-100 transition-colors flex-shrink-0"
          aria-label="إغلاق"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="mr-2">
          <div className="text-sm font-bold text-ink-900">تواصل عبر واتساب</div>
          <div className="text-xs text-ink-500">رد سريع خلال دقائق</div>
        </div>
      </div>

      {/* Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-gold-500 flex items-center justify-center shadow-lg shadow-[0_12px_24px_rgba(102,87,0,0.18)] hover:scale-110 transition-transform duration-300 animate-whatsapp-pulse"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" strokeWidth={0} />
        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-red-500 border-2 border-white" />
      </a>
    </div>
  );
}
