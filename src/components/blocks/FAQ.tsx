const faqs = [
  {
    question: 'Can I use Albino for my clients?',
    answer: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer at Dictum massa. Sed feugiat vitae dolor a contin. Aliquam sagittis interdum Malesuada.',
    linkText: 'Click to learn more'
  },
  {
    question: 'Does it work with WordPress?',
    answer: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer at Dictum massa. Sed feugiat vitae dolor a contin. Aliquam sagittis interdum Malesuada.'
  },
  {
    question: 'Do I get free updates?',
    answer: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer at Dictum massa. Sed feugiat vitae dolor a contin. Aliquam sagittis interdum Malesuada.'
  },
  {
    question: 'Will you provide support?',
    answer: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer at Dictum massa. Sed feugiat vitae dolor a contin. Aliquam sagittis interdum Malesuada.'
  }
];

export default function FAQ() {
  return (
    <section className="bg-[#161C2D] py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {faqs.map((faq, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5454D4] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="1.5"/>
                  <path d="M5 7H9M7 5V9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="small-text text-white/70">
                  {faq.answer}
                </p>
                {faq.linkText && (
                  <a href="#" className="inline-block mt-2 text-[#68D585] text-sm font-medium hover:underline">
                    {faq.linkText} &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support Link */}
        <div className="text-center mt-12">
          <p className="text-white/70">
            Haven't got your answer?{' '}
            <a href="#" className="text-[#68D585] hover:underline">
              Contact our support now
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
