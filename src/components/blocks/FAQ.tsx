export default function FAQ() {
  const faqs = [
    {
      question: 'Can I use Albino for my clients?',
      answer: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly and efficiently.',
      iconColor: 'text-[var(--color-success)]',
      iconBg: 'bg-[var(--color-success)]/10'
    },
    {
      question: "Don't work with WordPress?",
      answer: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly and efficiently.',
      iconColor: 'text-[var(--color-primary)]',
      iconBg: 'bg-[var(--color-primary)]/10'
    },
    {
      question: 'Do I get free updates?',
      answer: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly and efficiently.',
      iconColor: 'text-[var(--color-success)]',
      iconBg: 'bg-[var(--color-success)]/10'
    },
    {
      question: 'Will you provide support?',
      answer: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly and efficiently.',
      iconColor: 'text-[var(--color-warning)]',
      iconBg: 'bg-[var(--color-warning)]/10'
    }
  ];

  return (
    <section className="bg-[var(--color-dark-navy)] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[var(--color-dark-navy-light)] rounded-2xl p-6">
              <div className="flex gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${faq.iconBg} ${faq.iconColor} flex items-center justify-center`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
