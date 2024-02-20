import { ShoppingCart } from "lucide-react";
import Header from "./header";
import Hero from "./hero";
import Features from "./Features";
import Howitworks from "./HowItWorks";
import Stories from "./stories";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Trial from "./Trial";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <Features />
      <Howitworks />
      <Stories />
      <Pricing />
      <Testimonials />
      <Trial />
      <Footer />
    </div>
  );
}

export default App;
