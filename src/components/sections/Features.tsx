import { BookOpen, Heart, Shield } from 'lucide-react';

const features = [
    {
        icon: BookOpen,
        title: 'Personalized Stories',
        description: "AI-powered storytelling adapts to each child's interests, learning pace, and developmental stage for maximum engagement.",
        color: 'bg-accent',
        borderColor: 'border-accent/20 hover:border-accent',
    },
    {
        icon: Heart,
        title: 'Essential Life Skills',
        description: 'Teaches safety awareness, healthy habits, emotional intelligence, and responsible digital citizenship through engaging narratives.',
        color: 'bg-secondary',
        borderColor: 'border-secondary/20 hover:border-secondary',
    },
    {
        icon: Shield,
        title: 'Privacy First',
        description: "All data stays on your device. We never train AI models with your child's information. Complete parental control.",
        color: 'bg-primary',
        borderColor: 'border-primary/20 hover:border-primary',
    },
];

export default function Features() {
    return (
        <section id="features" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-primary mb-4 font-display"
                    >
                        Why Parents & Educators Love Spryte Pal
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A magical companion that makes learning essential life skills fun, engaging, and safe for children.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className={`rounded-lg bg-white shadow-sm border-2 ${feature.borderColor} transition-all hover:shadow-lg p-6 space-y-4`}
                        >
                            <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center`}>
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
