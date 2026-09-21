import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-20 md:pt-16"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 md:min-h-[100svh] md:grid-cols-2 md:gap-4 md:px-8">
        <div className="relative z-10 flex flex-col items-start py-6 md:py-24">
          <p className="mb-4 text-xs font-medium tracking-[0.22em] text-gold">
            كابتن أحمد العلاوي
          </p>
          <h1
            id="hero-title"
            className="font-display text-5xl font-semibold leading-[1.15] text-gold md:text-6xl lg:text-7xl"
          >
            راحتك في بيتك
          </h1>
          <p className="mt-4 max-w-md text-lg text-muted md:text-xl">
            جلسات مساج منزلية برايفت للرجال
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>للرجال فقط</Badge>
            <Badge>زيارات منزلية فقط</Badge>
          </div>
          <Button asChild size="lg" className="mt-8 min-w-44">
            <a href="#booking">احجز جلستك</a>
          </Button>
        </div>

        <div className="relative md:min-h-[32rem]">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-portrait-wrap relative z-10 mx-auto max-w-md md:max-w-none">
            <img
              src="/captain-ahmed.png"
              alt="كابتن أحمد العلاوي"
              width={912}
              height={1136}
              className="max-h-[28rem] w-full object-cover md:max-h-[36rem] lg:max-h-[40rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
