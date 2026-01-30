export default function ProjectManagement() {
  const steps = [
    {
      number: '1',
      title: 'Create a project',
      description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
    },
    {
      number: '2',
      title: 'Assign related people',
      description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
    },
    {
      number: '3',
      title: 'Make it done',
      description: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] leading-tight mb-6">
              Manage your projects fast
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right mockup */}
          <div className="relative">
            <div className="bg-[var(--color-primary)] rounded-2xl p-8 shadow-[var(--shadow-xl)]">
              <div className="bg-white/10 rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-4 bg-white/80 rounded w-32"></div>
                  <div className="h-8 w-8 bg-white/80 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-3 bg-white/60 rounded w-full"></div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white/10 rounded-lg p-4">
                    <div className="h-8 w-8 bg-white/80 rounded-full mb-3"></div>
                    <div className="h-3 bg-white/60 rounded w-3/4"></div>
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
