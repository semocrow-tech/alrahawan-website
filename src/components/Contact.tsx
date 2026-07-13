import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const WHATSAPP_NUMBER = '966570542252';
const WHATSAPP_MESSAGE = 'مرحباً، أرغب في الاستفسار عن خدمة نقل العفش.';

export default function Contact() {
  const { ref, visible } = useReveal();
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-gradient-to-br from-gold-950 via-ink-950 to-ink-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-arabesque opacity-[0.05]" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-80 h-80 rounded-full bg-gold-600/10 blur-3xl" />

      <div className="container-lux relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
            <div className="section-eyebrow mb-5 justify-center text-gold-700">
              <span className="w-8 h-px bg-gold-400" />
              تواصل معنا
              <span className="w-8 h-px bg-gold-400" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-600 leading-tight tracking-tight text-balance">
              جاهزون لنقل عفشك
              <br />
              في أي وقت.
            </h2>
            <p className="mt-5 text-lg text-gold-700 leading-relaxed">
              اتصل بنا أو راسلنا على واتساب — فريقنا في خدمتك على مدار الساعة.
            </p>
          </div>

          {/* Action buttons */}
          <div className={`mt-10 flex flex-wrap items-center justify-center gap-4 reveal ${visible ? 'is-visible' : ''}`}>
            <a href="tel:0570542252" className="btn-primary text-base">
              <Phone className="w-5 h-5" />
              اتصل الآن
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold-500 text-white font-semibold tracking-wide shadow-lg shadow-[0_15px_30px_rgba(102,87,0,0.2)] transition-all duration-300 hover:bg-gold-600 hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" fill="white" strokeWidth={0} />
              راسلنا على واتساب
            </a>
          </div>
        </div>

        {/* Contact info cards */}
        <div className={`mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal ${visible ? 'is-visible' : ''}`}>
          {[
            {
              icon: Phone,
              title: 'اتصل بنا',
              lines: ['0570542252', '0561297440'],
              hrefs: ['tel:0570542252', 'tel:0561297440'],
            },
            {
              icon: MessageCircle,
              title: 'واتساب',
              lines: ['966570542252'],
              hrefs: [whatsappHref],
            },
            {
              icon: MapPin,
              title: 'موقعنا',
              lines: ['الرياض، المملكة العربية السعودية'],
              hrefs: [],
            },
            {
              icon: Clock,
              title: 'ساعات العمل',
              lines: ['السبت – الخميس: 7ص – 11م', 'الجمعة: 1م – 11م'],
              hrefs: [],
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="bg-gold-950/40 backdrop-blur-sm rounded-2xl p-6 ring-1 ring-gold-600/20 hover:bg-gold-950/60 transition-colors duration-400"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold-400 flex items-center justify-center mb-4 ring-1 ring-gold-700">
                  <Icon className="w-6 h-6 text-gold-" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-base font-bold text-gold-800 mb-3">
                  {card.title}
                </h3>
                <div className="space-y-1.5">
                  {card.lines.map((line, j) => {
                    const href = card.hrefs[j];
                    return href ? (
                      <a
                        key={j}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block text-sm text-gold-700 hover:text-white transition-colors"
                        dir="ltr"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={j} className="text-sm text-gold-700 leading-relaxed">
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
