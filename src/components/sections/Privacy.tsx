import { Lock, Shield, Users } from "lucide-react";
import privacyShield from "../../assets/privacy-shield.png";

const privacyFeatures = [
  {
    icon: Lock,
    title: "On-Device Processing",
    description:
      "All data stays on your device. No cloud storage of personal information.",
  },
  {
    icon: Shield,
    title: "No AI Training",
    description:
      "We never use your child's data to train our AI models. Period.",
  },
  {
    icon: Users,
    title: "Parental Control",
    description:
      "Full transparency and control over what your child learns and experiences.",
  },
];

export default function Privacy() {
  return (
    <section id="privacy" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1 relative">
            <img
              src={privacyShield}
              alt="Data Privacy Illustration"
              className="w-full max-w-sm drop-shadow-xl hover:scale-105 transition-transform duration-500 rounded-3xl"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-display">
              Your Child's Data Stays Private
            </h2>
            <p className="text-lg text-gray-700">
              We understand that privacy is paramount when it comes to children.
              That's why we've built Spryte Pal with privacy at its core.
            </p>
            <div className="space-y-4">
              {privacyFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-3 items-start">
                  <feature.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
