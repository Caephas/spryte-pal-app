export default function Stories() {
  return (
    <section
      id="stories"
      className="py-24 lg:py-32 px-6 bg-white relative overflow-hidden"
    >
      {/* Background Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">
            Real Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-display tracking-tight">
            Loved by Families
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See how Spryte Pal is helping children learn and grow every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {/* Testimonial 1 */}
          <div className="bg-cream p-8 lg:p-10 rounded-4xl border-2 border-transparent hover:border-secondary/20 transition-all relative group h-full">
            <div className="text-secondary text-6xl font-display absolute top-4 left-6 opacity-20 group-hover:opacity-40 transition-opacity">
              "
            </div>
            <p className="text-gray-700 italic mb-8 relative z-10 font-medium text-lg leading-relaxed">
              "My daughter used to be scared of the dark. After a week of Spryte
              Pal stories about bravery, she sleeps through the night!"
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-md rotate-3 group-hover:rotate-6 transition-transform">
                S
              </div>
              <div>
                <h4 className="font-bold text-primary text-lg">Sarah J.</h4>
                <p className="text-sm text-gray-500 font-medium">
                  Mom of 6-year-old
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-cream p-8 lg:p-10 rounded-4xl border-2 border-transparent hover:border-accent/30 transition-all relative group h-full">
            <div className="text-accent text-6xl font-display absolute top-4 left-6 opacity-30 group-hover:opacity-50 transition-opacity">
              "
            </div>
            <p className="text-gray-700 italic mb-8 relative z-10 font-medium text-lg leading-relaxed">
              "I love how it teaches digital safety without being scary. It's
              the perfect way to introduce these concepts."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-md -rotate-2 group-hover:-rotate-6 transition-transform">
                M
              </div>
              <div>
                <h4 className="font-bold text-primary text-lg">Michael T.</h4>
                <p className="text-sm text-gray-500 font-medium">
                  Dad of 9-year-old
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-cream p-8 lg:p-10 rounded-4xl border-2 border-transparent hover:border-primary/20 transition-all relative group h-full">
            <div className="text-primary text-6xl font-display absolute top-4 left-6 opacity-20 group-hover:opacity-40 transition-opacity">
              "
            </div>
            <p className="text-gray-700 italic mb-8 relative z-10 font-medium text-lg leading-relaxed">
              "The stories are so engaging! My son asks for 'one more Spryte
              story' every night instead of TV."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-md rotate-1 group-hover:rotate-0 transition-transform">
                E
              </div>
              <div>
                <h4 className="font-bold text-primary text-lg">Emily R.</h4>
                <p className="text-sm text-gray-500 font-medium">
                  Mom of 5-year-old
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
