import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

interface ServiceFeature {
  id: string;
  name: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  baseRate: number;
  rateUnit: string;
  features: ServiceFeature[];
  popular?: boolean;
  imageUrl?: string;
  onSelect?: () => void;
}

const ServiceCard = ({
  title = "Executive Service",
  description = "Premium chauffeur service for business professionals",
  baseRate = 75,
  rateUnit = "per hour",
  features = [
    { id: "1", name: "Professional chauffeur" },
    { id: "2", name: "Luxury vehicle" },
    { id: "3", name: "Complimentary water" },
    { id: "4", name: "Wi-Fi available" },
  ],
  popular = false,
  imageUrl = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
  onSelect = () => console.log("Service selected"),
}: ServiceCardProps) => {
  return (
    <Card className="w-full max-w-[350px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {popular && (
          <Badge className="absolute right-2 top-2 bg-yellow-500 text-white">
            Popular
          </Badge>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <span className="text-2xl font-bold">₹{baseRate}</span>
          <span className="text-sm text-gray-500"> {rateUnit}</span>
        </div>

        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature.id} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-sm">{feature.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          onClick={onSelect}
          className="w-full bg-primary hover:bg-primary/90"
        >
          Select Service
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
