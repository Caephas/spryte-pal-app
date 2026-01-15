const steps = [
    {
        number: 1,
        title: 'Choose a Topic',
        description: "Select from safety, health, emotions, or digital citizenship—or let Spryte suggest based on your child's needs.",
        color: 'bg-primary',
    },
    {
        number: 2,
        title: 'Experience the Story',
        description: 'AI creates a personalized, age-appropriate story featuring the Spryte character and relatable scenarios.',
        color: 'bg-secondary',
    },
    {
        number: 3,
        title: 'Learn & Grow',
        description: 'Interactive elements reinforce learning, while progress tracking helps parents see skill development.',
        color: 'bg-accent',
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 px-4 bg-cream">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-primary mb-4 font-display"
                    >
                        How Spryte Pal Works
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        {steps.map((step) => (
                            <div key={step.number} className="flex gap-4">
                                <div className={`flex-shrink-0 w-10 h-10 ${step.color} text-white rounded-full flex items-center justify-center font-bold`}>
                                    {step.number}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://mgx-backend-cdn.metadl.com/generate/images/904523/2026-01-15/ae10cc01-bc7c-4c24-849a-f41cc34e6de1.png"
                            alt="Children learning with Spryte Pal"
                            className="rounded-2xl shadow-2xl w-full max-w-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
