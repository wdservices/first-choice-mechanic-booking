import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-mechanic-dark to-mechanic-secondary pt-16 flex items-center">
      <div className="container mx-auto text-white text-center">
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