import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Package, Plane, Ship, Clock, Shield, Star, Users, Globe, Calculator, Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  const [weight, setWeight] = useState('');
  const [destination, setDestination] = useState('');
  const [serviceType, setServiceType] = useState('');

  const calculateCost = () => {
    if (!weight || !destination || !serviceType) return 0;
    const baseRate = serviceType === 'air' ? 25 : 15;
    const weightNum = parseFloat(weight);
    return (baseRate * weightNum * 1.2).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              From the US to your doorstep in <span className="text-orange-400">Tanzania</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Fast, reliable, and affordable shipping solutions. Get your packages delivered safely across Tanzania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4">
                Start Shipping <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-blue-700 border-white hover:bg-white text-lg px-8 py-4">
                Track Package
              </Button>
            </div>
          </div>
          <div className="mt-16 relative">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Shipping and logistics" 
              className="mx-auto rounded-2xl shadow-2xl max-w-2xl w-full opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Onestop Store?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive shipping solutions tailored for Tanzania
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Your packages are insured and tracked throughout the entire journey to Tanzania.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Express delivery options available with delivery times as fast as 3-5 business days.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Nationwide Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We deliver to all major cities and regions across Tanzania including Dar es Salaam, Arusha, and Mwanza.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section id="shipping" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shipping to Tanzania Services</h2>
            <p className="text-xl text-gray-600">Choose the shipping method that works best for you</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-100 text-blue-800">Fast</Badge>
              </div>
              <CardHeader className="pb-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Plane className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Air Freight</CardTitle>
                    <CardDescription>Express delivery to Tanzania</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Time:</span>
                    <span className="font-semibold">3-5 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price Range:</span>
                    <span className="font-semibold">$25-50 per kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best For:</span>
                    <span className="font-semibold">Urgent shipments</span>
                  </div>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    Choose Air Freight
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-100 text-green-800">Economic</Badge>
              </div>
              <CardHeader className="pb-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Ship className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Sea Freight</CardTitle>
                    <CardDescription>Cost-effective shipping to Tanzania</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Time:</span>
                    <span className="font-semibold">2-4 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price Range:</span>
                    <span className="font-semibold">$8-20 per kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Best For:</span>
                    <span className="font-semibold">Large shipments</span>
                  </div>
                  <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                    Choose Sea Freight
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section id="calculator" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Cost Calculator</h2>
              <p className="text-xl text-gray-600">Get an instant quote for shipping to Tanzania</p>
            </div>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="weight" className="text-lg font-semibold">Package Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      placeholder="Enter weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="destination" className="text-lg font-semibold">Destination in Tanzania</Label>
                    <Select value={destination} onValueChange={setDestination}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dar-es-salaam">Dar es Salaam</SelectItem>
                        <SelectItem value="arusha">Arusha</SelectItem>
                        <SelectItem value="mwanza">Mwanza</SelectItem>
                        <SelectItem value="dodoma">Dodoma</SelectItem>
                        <SelectItem value="mbeya">Mbeya</SelectItem>
                        <SelectItem value="tanga">Tanga</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="text-lg font-semibold">Service Type</Label>
                    <Select value={serviceType} onValueChange={setServiceType}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="air">Air Freight (3-5 days)</SelectItem>
                        <SelectItem value="sea">Sea Freight (2-4 weeks)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Estimated Cost</h3>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      ${calculateCost()}
                    </div>
                    <p className="text-gray-600 mb-6">Total shipping cost</p>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      <Calculator className="mr-2 h-4 w-4" />
                      Get Detailed Quote
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of customers across Tanzania</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;Onestop Store made shipping to Dar es Salaam so easy. My packages arrived in perfect condition and ahead of schedule!&quot;
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Sarah M.</div>
                    <div className="text-sm text-gray-500">Dar es Salaam</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;Excellent service! The tracking system kept me informed throughout, and the customer service team was very helpful.&quot;
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">John K.</div>
                    <div className="text-sm text-gray-500">Arusha</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;Best shipping rates I&apos;ve found for Tanzania. Professional service and my electronics arrived safely.&quot;
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Grace T.</div>
                    <div className="text-sm text-gray-500">Mwanza</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about shipping to Tanzania</p>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How long does it take to ship to Tanzania?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Air freight typically takes 3-5 business days, while sea freight takes 2-4 weeks depending on the destination city in Tanzania.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What items can I ship to Tanzania?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We can ship most personal items, electronics, clothing, books, and household goods. Prohibited items include weapons, hazardous materials, and perishable foods.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Do you provide insurance for shipments?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, all shipments include basic insurance coverage. Additional insurance options are available for high-value items.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How can I track my package to Tanzania?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You&apos;ll receive a tracking number once your package is shipped. You can track your package in real-time through our website or mobile app.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Ship to Tanzania?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get started today and experience fast, reliable shipping with Onestop Store
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">+1 (555) 123-4567</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">info@onestopstore.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-100">123 Shipping Ave, Miami, FL</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="text-blue-600 border-white hover:bg-white text-lg px-8 py-4">
                Schedule Pickup
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Package className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold text-white">Onestop Store</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for shipping to Tanzania. Fast, reliable, and affordable shipping solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Air Freight</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sea Freight</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Package Tracking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insurance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Destinations</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Dar es Salaam</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Arusha</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mwanza</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dodoma</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Onestop Store. All rights reserved. | Shipping to Tanzania made simple.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
