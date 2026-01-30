export default function Stats() {
  const stats = [
    {
      value: '1M+',
      description: 'Companies use Albino more than 100 times in daily life.'
    },
    {
      value: '93%',
      description: 'Companies see less stress when using with Albino.'
    },
    {
      value: '4.9',
      description: 'Average customer ratings we have got all over the world.'
    }
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-4">
                {stat.value}
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
