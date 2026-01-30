import Button from '../ui/Button';

export default function Content01() {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="heading-2 text-[#161C2D] mb-6">
              Getting started with Albino is easier than ever
            </h2>
            <p className="body-text text-[#161C2D]/70 mb-8">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.
            </p>
            <Button variant="primary">
              Get started for free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <img
              src="./assets/images/team-collage.png"
              alt="Team collaboration visualization"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
