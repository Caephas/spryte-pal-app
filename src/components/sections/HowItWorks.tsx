const steps = [
  {
    number: 1,
    title: "Choose a Topic",
    description:
      "Select from safety, health, emotions, or digital citizenship—or let Spryte suggest based on your child's needs.",
    color: "bg-primary",
  },
  {
    number: 2,
    title: "Experience the Story",
    description:
      "AI creates a personalized, age-appropriate story featuring the Spryte character and relatable scenarios.",
    color: "bg-secondary",
  },
  {
    number: 3,
    title: "Learn & Grow",
    description:
      "Interactive elements reinforce learning, while progress tracking helps parents see skill development.",
    color: "bg-accent",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 px-6 bg-cream relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-0 w-full h-full bg-white/40 -skew-y-3 -z-10 origin-left scale-110" />

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 lg:mb-24">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">
            Simple & Effective
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-display tracking-tight">
            How Spryte Pal Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A simple process designed for busy parents and curious kids.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-12 relative pl-4">
            {/* Connector Line */}
            <div className="absolute left-[35px] top-6 bottom-6 w-1 bg-gray-200 -z-10 hidden md:block" />

            {steps.map((step) => (
              <div key={step.number} className="flex gap-8 relative group">
                <div
                  className={`shrink-0 w-12 h-12 ${step.color} text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg relative z-10 group-hover:scale-110 transition-transform ring-4 ring-white`}
                >
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative order-first md:order-last">
            <div className="relative z-10 bg-white p-3 md:p-6 rounded-[2.5rem] shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white">
              <img
                src="https://mgx-backend-cdn.metadl.com/generate/images/904523/2026-01-15/ae10cc01-bc7c-4c24-849a-f41cc34e6de1.png"
                alt="Children learning process"
                className="rounded-2xl w-full"
              />
            </div>
            {/* Blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 rounded-full -z-10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
