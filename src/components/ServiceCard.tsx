import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  id?: string;
}

const ServiceCard = ({ title, description, icon, id }: ServiceCardProps) => {
  const navigate = useNavigate();
  const serviceId = id || title.toLowerCase().replace(/ /g, '-');

  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer" 
      onClick={() => navigate(`/service/${serviceId}`)}
    >
      <CardHeader>
        <div className="text-mechanic-accent mb-4 text-4xl">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ServiceCard;