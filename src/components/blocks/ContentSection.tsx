import Button from '../ui/Button';

export default function ContentSection() {
  return (
    <section className="bg-[var(--color-light-gray)] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] leading-tight mb-6">
              Getting started with Albino is easier than ever
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly and save time.
            </p>
            <Button variant="primary" size="lg">
              Get started for free
            </Button>
          </div>

          {/* Right mockup */}
          <div className="relative">
            <img
              src="./assets/images/content-user-card.png"
              alt="User profile card showing analytics and activity metrics"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
