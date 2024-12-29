import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Car, Wrench, Timer, Settings, Shield, Battery, Droplet, Gauge } from "lucide-react";

const serviceDetails = {
  "tyre-services": {
    title: "Tyre Services",
    description: "Premium tyre fitting, balancing, and repairs",
    icon: Car,
    fullDescription: "Our comprehensive tyre services include professional fitting, precise wheel balancing, puncture repairs, and tyre pressure monitoring. We work with all major tyre brands and ensure your vehicle's safety on the road.",
    features: [
      "Professional tyre fitting",
      "Wheel balancing",
      "Puncture repairs",
      "Tyre pressure monitoring",
      "All major brands available"
    ]
  },
  "mechanical-repairs": {
    title: "Mechanical Repairs",
    description: "Expert diagnostic and repair services",
    icon: Wrench,
    fullDescription: "Our skilled mechanics provide comprehensive repair services for all vehicle makes and models. We use state-of-the-art diagnostic equipment to identify and fix mechanical issues efficiently.",
    features: [
      "Engine repairs",
      "Transmission service",
      "Suspension work",
      "Brake system repairs",
      "Exhaust system maintenance"
    ]
  },
  "quick-service": {
    title: "Quick Service",
    description: "Fast and efficient maintenance",
    icon: Timer,
    fullDescription: "When you need rapid maintenance without compromising on quality, our quick service option provides efficient solutions for common automotive needs.",
    features: [
      "Oil changes",
      "Filter replacements",
      "Fluid top-ups",
      "Basic inspections",
      "Minor repairs"
    ]
  },
  "full-service": {
    title: "Full Service",
    description: "Comprehensive vehicle maintenance",
    icon: Settings,
    fullDescription: "Our full service package provides complete vehicle maintenance, ensuring every aspect of your vehicle is thoroughly checked and serviced.",
    features: [
      "Complete vehicle inspection",
      "Oil and filter change",
      "Brake system check",
      "Fluid level optimization",
      "Safety systems verification"
    ]
  },
  "brake-service": {
    title: "Brake Service",
    description: "Professional brake repair and maintenance",
    icon: Shield,
    fullDescription: "Ensure your safety with our professional brake service. We provide comprehensive brake system inspection, repair, and maintenance.",
    features: [
      "Brake pad replacement",
      "Rotor inspection and resurfacing",
      "Brake fluid service",
      "Caliper maintenance",
      "ABS system check"
    ]
  },
  "battery-service": {
    title: "Battery Service",
    description: "Battery testing and replacement",
    icon: Battery,
    fullDescription: "Keep your vehicle starting reliably with our battery services. We test, maintain, and replace batteries for all vehicle types.",
    features: [
      "Battery testing",
      "Charging system diagnosis",
      "Battery replacement",
      "Terminal cleaning",
      "Alternator check"
    ]
  },
  "oil-change": {
    title: "Oil Change",
    description: "Professional oil change service",
    icon: Droplet,
    fullDescription: "Maintain your engine's health with our professional oil change service. We use high-quality oils and filters suitable for your vehicle.",
    features: [
      "Oil filter replacement",
      "Synthetic oil options",
      "Multi-point inspection",
      "Fluid level check",
      "Disposal of old oil"
    ]
  },
  "diagnostics": {
    title: "Diagnostics",
    description: "Advanced vehicle diagnostics",
    icon: Gauge,
    fullDescription: "Using state-of-the-art diagnostic equipment, we can identify and troubleshoot any issues with your vehicle's systems.",
    features: [
      "Computer diagnostics",
      "Engine performance analysis",
      "Electrical system check",
      "Emissions testing",
      "Sensor verification"
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="container mx-auto py-10 text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button onClick={() => navigate('/services')}>Back to Services</Button>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto py-10">
        <Button 
          variant="outline" 
          onClick={() => navigate('/services')}
          className="mb-6"
        >
          Back to Services
        </Button>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <IconComponent className="w-12 h-12 text-mechanic-accent mr-4" />
            <h1 className="text-3xl font-bold">{service.title}</h1>
          </div>
          
          <p className="text-lg mb-8">{service.fullDescription}</p>
          
          <h2 className="text-xl font-semibold mb-4">Service Features:</h2>
          <ul className="list-disc pl-6 space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="text-gray-700">{feature}</li>
            ))}
          </ul>
          
          <div className="mt-8">
            <Button onClick={() => navigate('/booking')} className="bg-mechanic-accent hover:bg-mechanic-secondary">
              Book This Service
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;