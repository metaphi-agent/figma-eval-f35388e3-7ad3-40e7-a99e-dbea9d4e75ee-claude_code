const stats = [
  {
    number: '1M+',
    description: 'Customers visit Albino every months'
  },
  {
    number: '93%',
    description: 'Satisfaction rate from our customers.'
  },
  {
    number: '4.9',
    description: 'Average customer ratings out of 5.00!'
  }
];

export default function Stats() {
  return (
    <section className="py-16 border-b border-[#E7E9ED]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="stat-number text-[#161C2D]">
                {stat.number}
              </span>
              <p className="small-text text-[#161C2D]/70 max-w-[150px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
