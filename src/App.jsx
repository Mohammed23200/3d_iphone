import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { HighLights } from "./components/HighLights";

const App = () => {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <HighLights />
    </main>
  );
};

export default App;
