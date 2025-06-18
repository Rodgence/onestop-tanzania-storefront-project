import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Package, Plane, Ship, Clock, Shield, Star, Users, Globe, Calculator, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  const [weight, setWeight] = useState('');
  const [destination, setDestination] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [currentRegionIndex, setCurrentRegionIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Calculator states
  const [activeTab, setActiveTab] = useState('quick');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [actualWeight, setActualWeight] = useState('');
  const [addHomeDelivery, setAddHomeDelivery] = useState(false);
  const [addShipmentProtection, setAddShipmentProtection] = useState(false);

  const tanzaniaRegions = [
    'Dar es Salaam',
    'Dodoma',
    'Arusha',
    'Kilimanjaro',
    'Mwanza',
    'Mbeya',
    'Morogoro'
  ];

  useEffect(() => {
    const currentRegion = tanzaniaRegions[currentRegionIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      // Deleting characters
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50); // Speed of deletion
      } else {
        // Finished deleting, move to next region
        setIsDeleting(false);
        setCurrentRegionIndex((prevIndex) => 
          (prevIndex + 1) % tanzaniaRegions.length
        );
      }
    } else {
      // Typing characters
      if (displayText.length < currentRegion.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRegion.slice(0, displayText.length + 1));
        }, 100); // Speed of typing
      } else {
        // Finished typing, wait then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause before deleting
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRegionIndex, tanzaniaRegions]);

  const calculateCost = () => {
    if (!weight || !destination || !serviceType) return 0;
    const baseRate = serviceType === 'air' ? 25 : 15;
    const weightNum = parseFloat(weight);
    return (baseRate * weightNum * 1.2).toFixed(2);
  };

  // Calculate volumetric weight (L x W x H in inches / 166 for air freight)
  const calculateVolumetricWeight = () => {
    if (!length || !width || !height) return 0;
    const volumetricWeight = (parseFloat(length) * parseFloat(width) * parseFloat(height)) / 166;
    return volumetricWeight * 0.453592; // Convert pounds to kg
  };

  // Get chargeable weight (higher of actual or volumetric)
  const getChargeableWeight = () => {
    const actualWt = parseFloat(actualWeight) || 0;
    const volumetricWt = calculateVolumetricWeight();
    return Math.max(actualWt, volumetricWt);
  };

  // Calculate total cost for exact pricing
  const calculateExactCost = () => {
    const chargeableWeight = getChargeableWeight();
    if (chargeableWeight === 0) return 0;
    
    // $20/pound = $44.09/kg (approximately)
    const ratePerKg = 44.09;
    let totalCost = chargeableWeight * ratePerKg;
    
    // Add optional services
    if (addHomeDelivery) {
      totalCost += 25; // $25 for home delivery
    }
    if (addShipmentProtection) {
      totalCost += totalCost * 0.02; // 2% of shipping cost for protection
    }
    
    return totalCost;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white py-20 overflow-hidden pt-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  From the US to your Doorstep in{' '}
                  <span className="text-orange-400 inline-block min-w-[280px] relative">
                    {displayText}
                    <span className="animate-pulse text-orange-400 ml-1">|</span>
                  </span>
                </h1>
                <p className="text-xl mb-4 text-blue-100">
                  in as little as 7 days.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4 rounded-full">
                  Get our US Address
                </Button>
                
                <div className="flex items-center space-x-2 text-blue-100">
                  <span>Ocean shipping service</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Right Side - Pricing Calculator */}
            <div className="space-y-6">
              {/* Tabs */}
              <div className="flex bg-white/10 rounded-lg p-1">
                <button 
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                    activeTab === 'quick' 
                      ? 'bg-white text-blue-600' 
                      : 'text-white hover:bg-white/20'
                  }`}
                  onClick={() => setActiveTab('quick')}
                >
                  Quick Price Estimates
                </button>
                <button 
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                    activeTab === 'exact' 
                      ? 'bg-white text-blue-600' 
                      : 'text-white hover:bg-white/20'
                  }`}
                  onClick={() => setActiveTab('exact')}
                >
                  Exact per KG pricing
                </button>
              </div>

              {/* Calculator Card */}
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6 space-y-4">
                  {activeTab === 'quick' ? (
                    <>
                      <div>
                        <Select value={destination} onValueChange={setDestination}>
                          <SelectTrigger>
                            <SelectValue placeholder="Cellphone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cellphone">Cellphone</SelectItem>
                            <SelectItem value="laptop">Laptop</SelectItem>
                            <SelectItem value="clothing">Clothing</SelectItem>
                            <SelectItem value="electronics">Electronics</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="text-center py-6">
                        <p className="text-gray-600 mb-2">Landed shipping cost starts from</p>
                        <div className="text-4xl font-bold text-blue-600">$15</div>
                      </div>
                      
                      {/* Product Image with Navigation */}
                      <div className="relative flex items-center justify-center py-8">
                        <button className="absolute left-0 p-2 text-gray-400 hover:text-gray-600">
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        
                        <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="w-20 h-24 bg-gray-800 rounded-lg"></div>
                        </div>
                        
                        <button className="absolute right-0 p-2 text-gray-400 hover:text-gray-600">
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-4">
                      {/* Dimensions Input */}
                      <div className="grid grid-cols-5 gap-2 items-center bg-gray-50 p-3 rounded-lg">
                        <Input
                          type="number"
                          placeholder="0"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          className="text-center h-10 border-gray-300"
                        />
                        <span className="flex items-center justify-center text-gray-400 text-lg">×</span>
                        <Input
                          type="number"
                          placeholder="0"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                          className="text-center h-10 border-gray-300"
                        />
                        <span className="flex items-center justify-center text-gray-400 text-lg">×</span>
                        <Input
                          type="number"
                          placeholder="0"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          className="text-center h-10 border-gray-300"
                        />
                      </div>

                      {/* Actual Weight */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Input
                          type="number"
                          placeholder="0"
                          value={actualWeight}
                          onChange={(e) => setActualWeight(e.target.value)}
                          className="text-center h-10 border-gray-300"
                        />
                      </div>

                      {/* Additional Services */}
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="homeDelivery" 
                            checked={addHomeDelivery}
                            onCheckedChange={setAddHomeDelivery}
                            className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                          />
                          <label htmlFor="homeDelivery" className="text-sm cursor-pointer">
                            Add Home delivery Cost: $25
                          </label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="shipmentProtection" 
                            checked={addShipmentProtection}
                            onCheckedChange={setAddShipmentProtection}
                            className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
                          />
                          <label htmlFor="shipmentProtection" className="text-sm cursor-pointer">
                            Add Shipment Protection: 2% of shipping cost
                          </label>
                        </div>
                      </div>

                      {/* Total Cost */}
                      <div className="text-gray-900 pt-4">
                        <div className="text-lg font-bold">
                          All-inclusive cost with no hidden charges: ${calculateExactCost().toFixed(2)}
                        </div>
                      </div>

                      {/* Info Footer */}
                      <div className="text-gray-600 text-xs">
                        <p>
                          This shipping quote is based on our rate of $44.09/KG (equivalent to $20/pound). 
                          <a href="#" className="text-blue-600 underline">Click here</a> to learn more about what is included in the cost.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
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
