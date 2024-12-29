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
              imageUrl="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard
              title="Mechanical Repairs"
              description="Expert diagnostic and repair services"
              icon={<Wrench />}
              imageUrl="https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard
              title="Quick Service"
              description="Fast and efficient maintenance"
              icon={<Timer />}
              imageUrl="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <ServiceCard
              title="Full Service"
              description="Comprehensive vehicle maintenance"
              icon={<Settings />}
              imageUrl="https://images.unsplash.com/photo-1493134799591-2c9eed26201a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
        
        {/* Trust Indicators Section */}
        <div className="container mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Certified Mechanics"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Certified Mechanics</h3>
              <p className="text-gray-600">Our team consists of highly trained and certified professionals</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Modern Equipment"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Modern Equipment</h3>
              <p className="text-gray-600">State-of-the-art diagnostic and repair equipment</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Quality Service"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Quality Service</h3>
              <p className="text-gray-600">Committed to providing the highest quality service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;