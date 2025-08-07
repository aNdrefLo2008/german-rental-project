"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Home, MessageSquare, Plus, Edit, Trash2, Eye, Calendar, Euro } from "lucide-react"

export default function AdminPage() {
  const [apartments] = useState([
    { id: 1, name: "Modern City Center Apartment", status: "Available", bookings: 12, revenue: "€780" },
    { id: 2, name: "Spacious Family Suite", status: "Occupied", bookings: 8, revenue: "€760" },
    { id: 3, name: "Business Traveler Studio", status: "Available", bookings: 15, revenue: "€825" },
    { id: 4, name: "Cozy Garden Apartment", status: "Maintenance", bookings: 6, revenue: "€420" },
    { id: 5, name: "Executive Penthouse", status: "Available", bookings: 4, revenue: "€480" },
    { id: 6, name: "Historic District Loft", status: "Occupied", bookings: 9, revenue: "€720" },
    { id: 7, name: "Modern Minimalist Studio", status: "Available", bookings: 18, revenue: "€900" },
    { id: 8, name: "Family Comfort Suite", status: "Available", bookings: 7, revenue: "€700" },
  ])

  const [messages] = useState([
    {
      id: 1,
      name: "Maria Schmidt",
      email: "maria@email.com",
      subject: "Booking Inquiry",
      date: "2024-01-15",
      status: "New",
    },
    {
      id: 2,
      name: "Hans Mueller",
      email: "hans@email.com",
      subject: "Extended Stay",
      date: "2024-01-14",
      status: "Replied",
    },
    {
      id: 3,
      name: "Anna Weber",
      email: "anna@email.com",
      subject: "Cancellation",
      date: "2024-01-13",
      status: "Resolved",
    },
  ])

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Admin Header */}
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.svg" alt="Ferienwohnungen Gera" className="h-8 w-auto" />
              <Separator orientation="vertical" className="h-6" />
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
            <Button variant="outline" asChild>
              <a href="/" target="_blank" rel="noreferrer">
                <Eye className="h-4 w-4 mr-2" />
                View Website
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Apartments</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <Home className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Available Now</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                  <p className="text-2xl font-bold">€5,585</p>
                </div>
                <Euro className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">New Messages</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <MessageSquare className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Admin Tabs */}
        <Tabs defaultValue="apartments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="apartments">Apartments</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Apartments Management */}
          <TabsContent value="apartments">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Apartment Management</CardTitle>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Apartment
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {apartments.map((apartment) => (
                    <div key={apartment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{apartment.name}</h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <span>Bookings: {apartment.bookings}</span>
                          <span>Revenue: {apartment.revenue}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge
                          variant={
                            apartment.status === "Available"
                              ? "default"
                              : apartment.status === "Occupied"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {apartment.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bookings Management */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Booking Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Booking Calendar</h3>
                  <p className="text-muted-foreground mb-4">Manage reservations, check-ins, and availability</p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Booking
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Management */}
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Customer Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium">{message.name}</h3>
                          <Badge
                            variant={
                              message.status === "New"
                                ? "default"
                                : message.status === "Replied"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {message.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{message.subject}</p>
                        <p className="text-xs text-muted-foreground">
                          {message.email} • {message.date}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Reply
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Website Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="siteName">Site Name</Label>
                    <Input id="siteName" defaultValue="Ferienwohnungen Gera" />
                  </div>
                  <div>
                    <Label htmlFor="siteDescription">Description</Label>
                    <Textarea
                      id="siteDescription"
                      defaultValue="Premium short-term rental apartments in Gera, Germany"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input id="contactEmail" defaultValue="info@gera-apartments.de" />
                  </div>
                  <div>
                    <Label htmlFor="contactPhone">Contact Phone</Label>
                    <Input id="contactPhone" defaultValue="+49 XXX XXXXXXX" />
                  </div>
                  <Button>Save Settings</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="adminEmail">Admin Email</Label>
                    <Input id="adminEmail" type="email" defaultValue="admin@gera-apartments.de" />
                  </div>
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <Button>Update Password</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
