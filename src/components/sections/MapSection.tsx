import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, MapPin, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ServiceAreaMapProps {
  serviceAreas?: string[];
  showAnimation?: boolean;
}

const ServiceAreaMap = ({
  serviceAreas = [
    "Banjara Hills",
    "Hitech City",
    "Gachibowli",
    "Charminar",
    "Jubilee Hills",
    "Kukatpally",
    "Madhapur",
  ],
  showAnimation = true,
}: ServiceAreaMapProps) => {
  const [animationPosition, setAnimationPosition] = useState(0);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  // Simulate car animation along a path
  useEffect(() => {
    if (!showAnimation) return;

    const interval = setInterval(() => {
      setAnimationPosition((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);

    return () => clearInterval(interval);
  }, [showAnimation]);

  // Calculate animation path points
  const getAnimationPath = () => {
    const pathPoints = [
      { x: 20, y: 40 }, // Banjara Hills
      { x: 40, y: 60 }, // Hitech City
      { x: 60, y: 50 }, // Gachibowli
      { x: 80, y: 30 }, // Charminar
      { x: 50, y: 20 }, // Jubilee Hills
    ];

    const segmentLength = 100 / (pathPoints.length - 1);
    const segmentIndex = Math.floor(animationPosition / segmentLength);
    const segmentProgress = (animationPosition % segmentLength) / segmentLength;

    if (segmentIndex >= pathPoints.length - 1)
      return pathPoints[pathPoints.length - 1];

    const start = pathPoints[segmentIndex];
    const end = pathPoints[segmentIndex + 1];

    return {
      x: start.x + (end.x - start.x) * segmentProgress,
      y: start.y + (end.y - start.y) * segmentProgress,
    };
  };

  const carPosition = getAnimationPath();

  return (
    <Card className="w-full max-w-[600px] h-[400px] bg-white shadow-lg overflow-hidden">
      <CardContent className="p-0 relative h-full">
        {/* Embedded Google Map */}
        <div className="absolute inset-0">
          <iframe
            title="Google Map Location"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90509463116!2d78.24323065773862!3d17.412608643384807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1742054924390!5m2!1sen!2sin"
          />
        </div>

        {/* Animated Car */}
        {showAnimation && (
          <div
            className="absolute w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-linear shadow-md"
            style={{ left: `${carPosition.x}%`, top: `${carPosition.y}%` }}
          >
            <Car size={16} />
          </div>
        )}

        {/* Map Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg shadow-md">
          <div className="flex items-center gap-2">
            <Info size={16} className="text-muted-foreground" />
            <p className="text-sm font-medium">
            We provide our services all across Hyderabad.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceAreaMap;
