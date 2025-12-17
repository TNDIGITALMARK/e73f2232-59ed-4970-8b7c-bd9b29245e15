import React from 'react';
import { Shield, Camera, Fence } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Service } from '@/lib/mock-data';

interface ServiceCardProps {
  service: Service;
  onBook?: () => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Camera,
  Fence,
  Drone: Shield, // Using Shield as fallback for Drone
};

export function ServiceCard({ service, onBook }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Shield;

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-lg bg-primary/10">
            <IconComponent className="w-6 h-6 text-primary" />
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">
              {service.pricing.currency}
              {service.pricing.rate}
            </p>
            <p className="text-sm text-muted-foreground">{service.pricing.unit}</p>
          </div>
        </div>
        <CardTitle className="mt-4">{service.name}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <span className="mr-2 text-success">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onBook}>
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
