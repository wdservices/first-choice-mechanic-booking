import ServiceCard from "@/components/ServiceCard";
import { Car, Wrench, Timer, Settings, Tool, Battery, Oil, Gauge } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>
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
          <ServiceCard
            title="Brake Service"
            description="Professional brake repair and maintenance"
            icon={<Tool />}
          />
          <ServiceCard
            title="Battery Service"
            description="Battery testing and replacement"
            icon={<Battery />}
          />
          <ServiceCard
            title="Oil Change"
            description="Professional oil change service"
            icon={<Oil />}
          />
          <ServiceCard
            title="Diagnostics"
            description="Advanced vehicle diagnostics"
            icon={<Gauge />}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;