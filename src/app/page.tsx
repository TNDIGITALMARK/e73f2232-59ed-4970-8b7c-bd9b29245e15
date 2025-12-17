'use client';

import React, { useState } from 'react';
import { NavHeader } from '@/components/nav-header';
import { ServiceCard } from '@/components/service-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { services, generateTimeSlots, generateAvailableDates } from '@/lib/mock-data';
import { Calendar, Clock, Shield, Eye } from 'lucide-react';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const timeSlots = generateTimeSlots();
  const availableDates = generateAvailableDates();

  const handleBooking = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsBookingOpen(true);
  };

  const handleConfirmBooking = () => {
    // Simulated booking confirmation
    alert(`Booking confirmed!\nService: ${services.find(s => s.id === selectedService)?.name}\nDate: ${selectedDate}\nTime: ${selectedTime}`);
    setIsBookingOpen(false);
    setSelectedDate('');
    setSelectedTime('');
  };

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-white/10 backdrop-blur">
                <Shield className="w-8 h-8" />
              </div>
              <div className="p-3 rounded-lg bg-white/10 backdrop-blur">
                <Eye className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Security Solutions You Can Trust
            </h1>
            <p className="text-xl mb-8 text-white/90">
              From personnel guarding to advanced surveillance technology, we provide comprehensive security services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                Get Instant Quote
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                View All Services
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Security Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of security solutions with transparent pricing and instant booking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBook={() => handleBooking(service.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Calendar className="w-10 h-10 text-primary mb-2" />
                <CardTitle>24/7 Availability</CardTitle>
                <CardDescription>
                  Round-the-clock security services and emergency response teams ready when you need them
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Certified Professionals</CardTitle>
                <CardDescription>
                  All personnel trained and certified through our accredited security training academy
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Real-Time Monitoring</CardTitle>
                <CardDescription>
                  Advanced technology for live surveillance and instant alert notifications
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book Security Service</DialogTitle>
            <DialogDescription>
              {selectedService && `Schedule your ${services.find(s => s.id === selectedService)?.name}`}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="date">Select Date</Label>
              <Select value={selectedDate} onValueChange={setSelectedDate}>
                <SelectTrigger id="date">
                  <SelectValue placeholder="Choose a date" />
                </SelectTrigger>
                <SelectContent>
                  {availableDates.map((date) => (
                    <SelectItem key={date} value={date}>
                      {new Date(date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Select Time</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger id="time">
                  <SelectValue placeholder="Choose a time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              className="w-full"
              onClick={handleConfirmBooking}
              disabled={!selectedDate || !selectedTime}
            >
              Confirm Booking
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6" />
            <span className="font-bold text-xl">Lion Eye Protection Services</span>
          </div>
          <p className="text-white/80 mb-2">Professional Security Solutions</p>
          <p className="text-sm text-white/60">© 2024 Lion Eye Protection Services (PTY) Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
