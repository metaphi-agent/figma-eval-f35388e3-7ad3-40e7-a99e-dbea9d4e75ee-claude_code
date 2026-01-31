import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Hero Content */}
          <div className="max-w-[800px]">
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] leading-tight">
              Get things done by awesome remote team
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly and efficiently.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button variant="primary" size="lg">
                Get started for free
              </Button>
              <Button variant="ghost" size="lg">
                Learn more
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[var(--color-warning)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-[var(--color-text-secondary)]">
                5.0 - Google Reviews
              </span>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="mt-16 w-full max-w-[900px]">
            <img
              src="./assets/images/hero-dashboard.png"
              alt="Albino dashboard interface showing sessions, analytics and team collaboration features"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
