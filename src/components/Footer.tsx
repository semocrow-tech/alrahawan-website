import {
  Truck,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  ArrowUp,
  MessageCircle,
} from 'lucide-react';

const SERVICE_AREAS = [
  'الرياض',
  'جدة',
  'الدمام',
  'مكة المكرمة',
  'المدينة المنورة',
  'الخبر',
  'تبوك',
  'أبها',
  'خميس مشيط',
  'حائل',
  'جازان',
  'عسير',
  'الجوف',
  'عرعر ',
  'وأخرى ',
];

const QUICK_LINKS = [
  { label: 'خدماتنا', href: '#services' },
  { label: 'لماذا نحن', href: '#why-us' },
  { label: 'آلية العمل', href: '#process' },
  { label: 'تواصل معنا', href: '#contact' },
];

export default function Footer() {
  return (
    <footer id="areas" className="bg-ink-950 text-ink-300 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-arabesque opacity-[0.03]" />

      <div className="container-lux relative z-10">
        {/* Service areas strip */}
        <div className="pb-14 border-b border-ink-800">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-5 h-5 text-gold-400" />
            <h3 className="font-display text-lg font-bold text-white">مناطق التغطية</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-ink-900 border border-ink-800 text-sm text-ink-300 hover:border-gold-700 hover:text-gold-400 transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gold-900 flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" strokeWidth={2.2} />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white">الرهوان الذهبي</div>
                <div className="text-xs text-gold-400 font-semibold">نقل العفش والأثاث</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-ink-400 max-w-xs">
              نقل عفش وأثاث احترافي في جميع أنحاء المملكة العربية السعودية .
              أيادٍ أمينة، شاحنات مبطنة، ووعد: ولا خدش واحد.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-ink-900 border border-ink-800 flex items-center justify-center text-ink-400 hover:bg-gold-900 hover:text-white hover:border-gold-800 transition-all duration-300"
                  aria-label="رابط تواصل"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-bold text-white mb-5">روابط سريعة</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-white mb-5">تواصل معنا</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0570542252"
                  className="flex items-start gap-3 text-sm text-ink-400 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span dir="ltr">0570542252</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:0561297440"
                  className="flex items-start gap-3 text-sm text-ink-400 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span dir="ltr">0561297440</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/966570542252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-ink-400 hover:text-gold-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span dir="ltr">واتساب: 966570542252</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:care@saqour-saudiya.com"
                  className="flex items-start gap-3 text-sm text-ink-400 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span dir="ltr">care@saqour-saudiya.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-400">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span> الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-400">
                <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>السبت – الخميس: 7ص – 11م · الجمعة: 1م – 11م</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display text-sm font-bold text-white mb-5">جاهز للنقل؟</h4>
            <p className="text-sm text-ink-400 leading-relaxed mb-5">
              احصل على عرض سعر وثابت خلال ساعتين. دون التزام.
            </p>
            <a href="#contact" className="btn-primary text-sm w-full">
              احجز نقلتك الآن
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500 text-center sm:text-right">
            © {new Date().getFullYear()} الرهوان الذهبي. جميع الحقوق محفوظة.
          </p>
          <a
            href="#top"
            className="flex items-center gap-2 text-xs text-ink-400 hover:text-gold-400 transition-colors"
          >
            العودة للأعلى
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
