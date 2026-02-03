import { BookOpen, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Personalized Stories",
    description:
      "AI-powered storytelling adapts to each child's interests, learning pace, and developmental stage for maximum engagement.",
    color: "bg-accent",
    borderColor: "border-accent/20 hover:border-accent",
  },
  {
    icon: Heart,
    title: "Essential Life Skills",
    description:
      "Teaches safety awareness, healthy habits, emotional intelligence, and responsible digital citizenship through engaging narratives.",
    color: "bg-secondary",
    borderColor: "border-secondary/20 hover:border-secondary",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "All data stays on your device. We never train AI models with your child's information. Complete parental control.",
    color: "bg-primary",
    borderColor: "border-primary/20 hover:border-primary",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 lg:py-32 px-6 bg-white relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">
            Why Choose Spryte Pal?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-display tracking-tight">
            Learning Made Magical
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We blend the magic of storytelling with the science of learning to
            help your child grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group relative rounded-3xl bg-white p-8 lg:p-10 transition-all hover:-translate-y-2 duration-300 border-2 ${feature.borderColor} hover:shadow-xl h-full`}
            >
              {/* Card Decorative Blob */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${feature.color} opacity-10 rounded-bl-full rounded-tr-2xl transition-all group-hover:scale-110`}
              />

              <div
                className={`w-16 h-16 ${feature.color} rounded-2xl rotate-3 group-hover:rotate-6 transition-transform flex items-center justify-center mb-8 shadow-sm`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4 font-display relative z-10">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10 text-lg">
                {feature.description}
              </p>

              {/* Bottom aesthetic line */}
              <div
                className={`absolute bottom-8 right-8 w-12 h-1.5 ${feature.color} rounded-full opacity-50`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
