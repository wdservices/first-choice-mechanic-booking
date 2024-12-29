import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center pt-16 flex items-center relative"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="container mx-auto text-white text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Premium Auto Care & Tyre Services
        </h1>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Expert mechanics, premium service, and competitive prices. Your vehicle deserves the best care.
        </p>
        <Button 
          onClick={() => navigate("/booking")}
          className="bg-mechanic-accent hover:bg-mechanic-light text-white px-8 py-6 text-lg"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;