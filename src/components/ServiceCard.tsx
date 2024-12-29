import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
  id?: string;
}

const ServiceCard = ({ title, description, icon, imageUrl, id }: ServiceCardProps) => {
  const navigate = useNavigate();
  const serviceId = id || title.toLowerCase().replace(/ /g, '-');

  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden" 
      onClick={() => navigate(`/service/${serviceId}`)}
    >
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="text-mechanic-accent mb-4 text-4xl">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ServiceCard;