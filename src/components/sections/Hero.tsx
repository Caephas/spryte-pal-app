export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 min-h-[90vh] flex items-center overflow-hidden bg-cream">
      {/* Playful background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10 animate-float-delayed" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto items-center">
          <div className="space-y-8 text-center flex flex-col items-center">
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-accent/30 mb-2">
              <span className="text-primary font-bold text-sm tracking-wide uppercase">
                ✨ coming soon to ios & android
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary leading-[1.1] font-display tracking-tight">
              Stories That Teach <br />
              <span className="text-secondary relative whitespace-nowrap">
                Life Skills
                <svg
                  className="absolute w-full h-3 -bottom-2 left-0 text-accent"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto">
              Meet Spryte Pal. Your child's new AI friend who creates
              personalized stories to teach safety, health, kindness, and many
              more life lessons.
              <span className="block mt-2 text-primary font-semibold">
                Fun for them. Peace of mind for you.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="#signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-lg min-w-[200px]"
              >
                Join the Waitlist
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-gray-50 transition-all border-2 border-primary/10 hover:border-primary/30 text-lg min-w-[200px]"
              >
                See How It Works
              </a>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 lg:gap-8 text-sm font-bold text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Privacy First
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                No Ads
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                Age Appropriate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
