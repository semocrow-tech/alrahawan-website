import { ShieldCheck, Clock, HardHat, MapPin, Award, Headset } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'مؤمن ومرخص',
    desc: ' كل عملية نقل مؤمنة بالكامل.',
  },
  {
    icon: Clock,
    title: 'ضمان المواعيد',
    desc: 'نصل في الموعد المتفق عليه أو ساعة النقل مجاناً. دون استثناء.',
  },
  {
    icon: HardHat,
    title: 'عمالة مدربة',
    desc: 'فرق تتحدث العربية، مدربة على التعامل الدقيق واحترام العميل.',
  },
  {
    icon: Award,
    title: 'مواد تغليف فاخرة',
    desc: 'كراتين مقواة، أغطية أثاث، وتغليف بلاستيكي مشمول في كل نقل.',
  },
  {
    icon: MapPin,
    title: 'تغطية واسعة',
    desc: 'من الشرق الى الجنوب الى الغرب الى الشمال, وما بينها.',
  },
  {
    icon: Headset,
    title: 'منسق مخصص',
    desc: 'شخص واحد يتابع نقلتك من الحجز حتى التركيب. تعرف دائماً من تتصل.',
  },
];

const STATS = [
  { value: '+1800', label: 'نقلة مكتملة' },
  { value: '10', label: 'سنة خبرة' },
  { value: '98%', label: 'وصول في الوقت' },
  { value: 'رضا العملاء', label: 'إيجابي' },
];

export default function WhyUs() {
  const { ref, visible } = useReveal();

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-ink-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 bg-arabesque opacity-[0.04]" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold-600/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gold-600/10 blur-3xl" />

      <div className="container-lux relative z-10">
        {/* Header */}
        <div ref={ref} className={`max-w-2xl reveal ${visible ? 'is-visible' : ''}`}>
          <div className="section-eyebrow mb-5 text-gold-400">
            <span className="w-8 h-px bg-gold-400" />
            لماذا تختار الرهوان الذهبي
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-balance">
            الفرق في التفاصيل
            <br />
            التي لا نهملها أبداً.
          </h2>
          <p className="mt-5 text-lg text-gold-100/70 leading-relaxed">
            أمضينا عشرة أعوام في صقل ما تعنيه نقلة دقيقة. هذا ما يعنيه الأمر لك.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold-900 rounded-2xl overflow-hidden ring-1 ring-gold-900">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`bg-ink-950 p-8 hover:bg-gold-950 transition-colors duration-400 reveal ${
                  visible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold-600/20 flex items-center justify-center mb-5 ring-1 ring-gold-400/20">
                  <Icon className="w-6 h-6 text-gold-400" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gold-100/60 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-display text-4xl lg:text-5xl font-bold text-gold-400">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gold-100/50 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
