import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export function About() {
  return (
    <section id="about" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading kicker="نبذة" title="من أنا" />
        </Reveal>
        <Reveal delay={80}>
          <div className="glass-card flex max-w-3xl flex-col gap-6 rounded-2xl p-5 sm:flex-row sm:items-start sm:p-6">
            <div className="mx-auto size-32 shrink-0 overflow-hidden rounded-xl border border-gold/35 sm:mx-0 sm:size-36">
              <img
                src="/captain-ahmed.png"
                alt="كابتن أحمد العلاوي"
                width={912}
                height={1136}
                className="size-full object-cover object-[center_12%] outline outline-1 -outline-offset-1 outline-gold/20"
              />
            </div>
            <div className="min-w-0 flex-1 text-start">
              <h3 className="font-display text-2xl font-semibold text-gold">
                كابتن أحمد العلاوي
              </h3>
              <ul className="mt-4 space-y-2 text-muted">
                <li>🎓 بكالوريوس علوم الرياضة</li>
                <li>🏅 مدرب معتمد من نقابة المهن الرياضية</li>
              </ul>
              <p className="mt-5 max-w-prose text-fg/90">
                جلسات مساج منزلية برايفت للرجال، مع اختيار أسلوب وضغط المساج المناسب
                حسب احتياجك وراحتك، بهدف الاسترخاء وتخفيف الشد والإجهاد.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
