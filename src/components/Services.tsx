import { Truck, Wrench, Package, ShieldCheck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const SERVICES = [
  {
    icon: Truck,
    title: 'نقل العفش',
    desc: 'نقل العفش والأثاث بجميع أنواعه بأمان تام من الباب إلى الباب.',
  },
  {
    icon: Wrench,
    title: 'فك وتركيب',
    desc: 'فك وتركيب جميع أنواع الأثاث بواسطة فنيين متخصصين بعناية فائقة.',
  },
  {
    icon: Package,
    title: 'تغليف احترافي',
    desc: 'تغليف احترافي لكل قطعة بأجود المواد لضمان وصولها سليمة تماماً.',
  },
  {
    icon: ShieldCheck,
    title: 'ضمان 6 أشهر',
    desc: 'ضمان لمدة 6 أشهر على خدمة الفك والتركيب، راحة بال تامة لك.',
  },
];

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="py-24 lg:py-32 relative bg-white">
      <div className="container-lux">
        {/* Header */}
        <div ref={ref} className={`max-w-2xl reveal ${visible ? 'is-visible' : ''}`}>
          <div className="section-eyebrow mb-5">
            <span className="w-8 h-px bg-gold-600" />
            خدماتنا
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-950 leading-tight tracking-tight text-balance">
            خدمات متكاملة لنقل عفشك
            <br />
            باحترافية تامة.
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            من نقل العفش إلى التغليف والفك والتركيب — نقدم لك كل ما تحتاجه في مكان واحد.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`card-lux p-6 group hover:shadow-xl hover:shadow-[0_16px_32px_rgba(102,87,0,0.12)] hover:-translate-y-1 reveal ${
                  visible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-50 to-gold-100 flex items-center justify-center ring-1 ring-gold-600/10 group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-500 mb-5">
                  <Icon
                    className="w-7 h-7 text-gold-500 group-hover:text-white transition-colors duration-500"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="font-display text-lg font-bold text-ink-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-ink-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
