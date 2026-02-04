import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";
import Stories from "./components/sections/Stories";
import Privacy from "./components/sections/Privacy";
import Investors from "./components/sections/Investors";
import Signup from "./components/sections/Signup";
import FallingElements from "./components/layout/FallingElements";

function App() {
  return (
    <div className="min-h-screen bg-cream font-body antialiased text-gray-900 overflow-x-hidden">
      <FallingElements />
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Stories />
        <Privacy />
        <Investors />
        <Signup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
