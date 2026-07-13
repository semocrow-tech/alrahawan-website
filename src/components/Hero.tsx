import { ArrowLeft, Truck, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gold-50" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-arabesque opacity-[0.06]" />

      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-gold-100/20 blur-3xl" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 rounded-full bg-gold-100/15 blur-3xl" />

      <div className="container-lux relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Right (in RTL = first): copy */}
        <div className="animate-fade-up">
          <div className="section-eyebrow mb-6">
            <span className="w-8 h-px bg-gold-600" />
            خدمة موثوقة في جميع أنحاء المملكة
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-ink-950 leading-[1.1] tracking-tight text-balance">
            نقل عفشك بعناية
            <br />
            <span className="text-gold-400"> وأنت مرتاح.</span>
          </h1>

          <p className="mt-6 text-lg text-ink-600 max-w-xl leading-relaxed">
            في جميع نواحي المملكة — فرقنا المدربة تغلف وتنقل أثاثك
            بأعلى معايير الاحتراف. شاحنات مبطنة، أيادٍ أمينة، ووعد: ولا خدش واحد.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary text-base">
              احجز نقلتك الآن
              <ArrowLeft className="w-5 h-5" />
            </a>
            <a href="tel:0570542252" className="btn-secondary text-base">
              <Phone className="w-5 h-5" />
              <span dir="ltr">0570542252</span>
            </a>
          </div>
        </div> {/* <--- هذا هو التاج الذي كان مفقوداً لإغلاق قسم النصوص */}

        {/* Left (in RTL = second): visual */}
        <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
            {/* Main image card — moving truck */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-[0_22px_50px_rgba(102,87,0,0.18)] ring-1 ring-gold-900/5">
              <img
                src="https://images.pexels.com/photos/7464682/pexels-photo-7464682.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="فريق نقل العفش يحمل الأثاث المغلف بعناية من اي مكان"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl shadow-[0_18px_35px_rgba(102,87,0,0.14)] p-5 w-52 ring-1 ring-ink-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-ink-900">+10</div>
                  <div className="text-xs text-ink-500 font-medium">سنة من الخبرة</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-4 -left-2 sm:-left-6 bg-gold-600 text-white rounded-2xl shadow-xl px-5 py-4 animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="font-display text-3xl font-bold leading-none">24/7</div>
              <div className="text-xs mt-1 text-gold-100 font-medium tracking-wide">
                خدمة على مدار الساعة
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-l from-transparent via-ink-200 to-transparent" />
    </section>
  );
}