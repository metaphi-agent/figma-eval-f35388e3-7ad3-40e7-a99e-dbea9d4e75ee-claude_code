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
            <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-xl)]">
              {/* Analytics card mockup */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] opacity-20"></div>
                  <div>
                    <div className="h-4 bg-[var(--color-text-primary)] rounded w-32 mb-2"></div>
                    <div className="h-3 bg-[var(--color-text-secondary)] rounded w-24"></div>
                  </div>
                </div>
              </div>

              {/* Chart mockup */}
              <div className="bg-[var(--color-light-gray)] rounded-xl p-6 mb-4">
                <div className="flex items-end justify-between h-32 gap-2">
                  {[40, 70, 35, 80, 45, 65, 50].map((height, i) => (
                    <div key={i} className="flex-1 bg-[var(--color-primary)] rounded-t opacity-60" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {['1.2M', '4.8', '93%'].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-[var(--color-primary)]">{stat}</div>
                    <div className="text-xs text-[var(--color-text-secondary)] mt-1">Metric</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
