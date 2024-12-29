import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Car, Wrench, Timer, Settings } from "lucide-react";

const Index = () => {
  return (
    <div>
      <Hero />
      <div className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Tyre Services"
              description="Premium tyre fitting, balancing, and repairs"
              icon={<Car />}
            />
            <ServiceCard
              title="Mechanical Repairs"
              description="Expert diagnostic and repair services"
              icon={<Wrench />}
            />
            <ServiceCard
              title="Quick Service"
              description="Fast and efficient maintenance"
              icon={<Timer />}
            />
            <ServiceCard
              title="Full Service"
              description="Comprehensive vehicle maintenance"
              icon={<Settings />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;