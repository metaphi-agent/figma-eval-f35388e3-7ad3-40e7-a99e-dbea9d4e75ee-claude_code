import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] leading-tight mb-6">
            Build better landing page fast
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-[600px] mx-auto mb-8">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="ghost" size="lg">
              Learn more
            </Button>
            <Button variant="primary" size="lg">
              Get it now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
