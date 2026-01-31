export default function Features() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="text-left">
            <img
              src="./assets/icons/icon-project-management.png"
              alt="Project management feature"
              className="w-auto h-auto max-w-full"
              loading="lazy"
            />
          </div>

          {/* Feature 2 */}
          <div className="text-left">
            <img
              src="./assets/icons/icon-time-tracking.png"
              alt="Time tracking feature"
              className="w-auto h-auto max-w-full"
              loading="lazy"
            />
          </div>

          {/* Feature 3 */}
          <div className="text-left">
            <img
              src="./assets/icons/icon-mobile-app.png"
              alt="Beautiful mobile app feature"
              className="w-auto h-auto max-w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
