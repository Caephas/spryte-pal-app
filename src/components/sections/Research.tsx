const researchCards = [
    {
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/904523/2026-01-15/fb4fd38f-8629-4d51-8a20-d440ad8ab8a9.png',
        title: 'Story-Based Learning',
        description: "Children learn best through stories. Our AI creates narratives that make abstract concepts concrete and memorable, helping kids internalize important life lessons naturally.",
    },
    {
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/904523/2026-01-15/cbf909d6-4fa0-4995-84d5-721225c446f3.png',
        title: 'Age-Appropriate Content',
        description: "Every story is tailored to your child's developmental stage, ensuring content is challenging enough to promote growth while remaining accessible and engaging.",
    },
];

export default function Research() {
    return (
        <section className="py-20 px-4 bg-cream">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-primary mb-4 font-display"
                    >
                        Research-Backed Learning
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our approach combines storytelling psychology, child development research, and AI technology.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {researchCards.map((card) => (
                        <div
                            key={card.title}
                            className="rounded-lg bg-white border-none shadow-lg p-8"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-48 object-cover rounded-lg mb-6"
                            />
                            <h3 className="text-2xl font-bold text-primary mb-4">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
