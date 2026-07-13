import { PhoneCall, ClipboardCheck, Truck, PackageCheck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const STEPS = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'اطلب عرض سعر',
    desc: 'املأ نموذج الحجز أو اتصل بنا. أخبرنا من أين وإلى أين وماذا تنقل.',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'معاينة مجانية',
    desc: 'يزورك منسقنا (أو يتصل بالفيديو) لتقييم الحجم وإعطائك سعراً ثابتاً مكتوباً.',
  },
  {
    icon: Truck,
    step: '03',
    title: 'نغلف وننقل',
    desc: 'في يوم النقل، يغلف فريقنا ويحمل وينقل ويفرغ — في شاحنات مبطنة ومتابعة بالـ GPS.',
  },
  {
    icon: PackageCheck,
    step: '04',
    title: 'تركيب وتنظيف',
    desc: 'نعيد تركيب أثاثك، نضع كل كرتون في غرفته الصحيحة، ونأخذ مخلفات التغليف معنا.',
  },
];

export default function Process() {
  const { ref, visible } = useReveal();

  return (
    <section id="process" className="py-24 lg:py-32 bg-gold-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="container-lux relative z-10">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto text-center reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="section-eyebrow mb-5 justify-center">
            <span className="w-8 h-px bg-gold-600" />
            آلية العمل
            <span className="w-8 h-px bg-gold-600" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-950 leading-tight tracking-tight text-balance">
            أربع خطوات من باب إلى باب.
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            عملية واضحة ومحددة — لا مفاجآت في يوم النقل.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className={`relative reveal ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-[60%] w-full h-px bg-gradient-to-l from-gold-600/30 to-transparent" />
                )}

                <div className="relative bg-white rounded-2xl p-7 shadow-sm ring-1 ring-ink-100 hover:shadow-lg hover:shadow-[0_16px_32px_rgba(102,87,0,0.12)] hover:-translate-y-1 transition-all duration-400 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gold-500 flex items-center justify-center shadow-lg shadow-[0_12px_24px_rgba(102,87,0,0.16)]">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                    </div>
                    <span className="font-display text-4xl font-bold text-ink-100">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ink-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
