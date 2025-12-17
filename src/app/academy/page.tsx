'use client';

import React, { useState } from 'react';
import { NavHeader } from '@/components/nav-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { personnel, trainingCourses } from '@/lib/mock-data';
import { GraduationCap, Award, Users, Calendar, Clock, Shield, Star } from 'lucide-react';

export default function AcademyPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  const handleEnroll = (courseId: string) => {
    setSelectedCourse(courseId);
    setIsEnrollOpen(true);
  };

  const handleConfirmEnrollment = () => {
    const course = trainingCourses.find(c => c.id === selectedCourse);
    alert(`Enrollment confirmed!\nCourse: ${course?.title}\nStart Date: ${course?.startDate}`);
    setIsEnrollOpen(false);
  };

  const levelColors = {
    Basic: 'bg-info/10 text-info border-info/20',
    Intermediate: 'bg-warning/10 text-warning border-warning/20',
    Advanced: 'bg-destructive/10 text-destructive border-destructive/20',
  };

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-10 h-10" />
              <Award className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lion Eye Security Training Academy
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Industry-leading security training programs that prepare professionals for excellence in the field
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                Browse Courses
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Become Certified
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="courses" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="courses">Training Courses</TabsTrigger>
            <TabsTrigger value="personnel">Our Personnel</TabsTrigger>
          </TabsList>

          {/* Training Courses Tab */}
          <TabsContent value="courses" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Available Training Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional certifications recognized throughout the security industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingCourses.map((course) => (
                <Card key={course.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge className={levelColors[course.level]}>
                        {course.level}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {course.availableSlots} slots
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">Duration:</span>
                        <span className="text-muted-foreground">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">Starts:</span>
                        <span className="text-muted-foreground">{course.startDate}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      onClick={() => handleEnroll(course.id)}
                      disabled={course.availableSlots === 0}
                    >
                      {course.availableSlots === 0 ? 'Fully Booked' : 'Enroll Now'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Academy Features */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Academy</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Award className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>Industry Certified</CardTitle>
                    <CardDescription>
                      All programs meet PSIRA standards and industry requirements
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <Users className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>Expert Instructors</CardTitle>
                    <CardDescription>
                      Learn from security professionals with decades of field experience
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <GraduationCap className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>Career Support</CardTitle>
                    <CardDescription>
                      Job placement assistance and ongoing professional development
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Personnel Tab */}
          <TabsContent value="personnel" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Certified security professionals trained to the highest standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {personnel.map((person) => (
                <Card key={person.id} className="text-center">
                  <CardHeader>
                    {/* Avatar placeholder */}
                    <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <CardTitle className="text-lg">{person.name}</CardTitle>
                    <CardDescription>{person.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <Shield className="w-4 h-4" />
                        <span>{person.experience}</span>
                      </div>
                      <Badge variant="outline" className="w-full justify-center">
                        {person.certification}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Personnel Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Personnel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-3xl font-bold">150+</span>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Avg Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-3xl font-bold">7 yrs</span>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-3xl font-bold">98%</span>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Client Rating
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold">4.9</span>
                    <Star className="w-5 h-5 fill-warning text-warning" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Enrollment Dialog */}
      <Dialog open={isEnrollOpen} onOpenChange={setIsEnrollOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enroll in Training Course</DialogTitle>
            <DialogDescription>
              {selectedCourse && trainingCourses.find(c => c.id === selectedCourse)?.title}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {selectedCourse && (
              <div className="space-y-3">
                <div className="p-4 bg-muted rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Duration:</span>
                    <span>{trainingCourses.find(c => c.id === selectedCourse)?.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Start Date:</span>
                    <span>{trainingCourses.find(c => c.id === selectedCourse)?.startDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Available Slots:</span>
                    <span>{trainingCourses.find(c => c.id === selectedCourse)?.availableSlots}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  You will receive confirmation and course materials via email after enrollment.
                </p>
              </div>
            )}
            <Button className="w-full" onClick={handleConfirmEnrollment}>
              Confirm Enrollment
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-16">
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
