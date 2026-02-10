import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { Input } from "@/components/ui/input"; import { Textarea } from "@/components/ui/textarea"; import { Calendar, CreditCard, Building2, Leaf } from "lucide-react"; import { motion } from "framer-motion";

function GalleryPage() { return ( <div className="font-sans text-gray-800"> <section className="bg-green-900 text-white py-16 px-6"> <div className="max-w-6xl mx-auto"> <h1 className="text-4xl font-bold mb-2">Flowerbed Gallery</h1> <p className="text-lg">Commercial flowerbed design, restoration, and seasonal color installations</p> </div> </section>

<section className="py-16 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[1,2,3,4,5,6,7,8,9].map((item) => (
        <div key={item} className="rounded-2xl overflow-hidden shadow bg-white">
          <img
            src={`https://placehold.co/600x400?text=Flowerbed+Project+${item}`}
            alt="Commercial flowerbed project"
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <p className="font-semibold text-sm">Commercial Flowerbed Project</p>
            <p className="text-xs text-gray-500">Design • Mulch • Edging • Seasonal Color</p>
          </div>
        </div>
      ))}
    </div>
  </section>
</div>

); }

export default function DavisLawnGardenSite() { return ( <div className="font-sans text-gray-800"> {/* HERO */} <section className="bg-green-900 text-white py-20 px-6"> <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto"> <h1 className="text-4xl md:text-5xl font-bold mb-4">Davis Lawn & Garden</h1> <p className="text-xl mb-6">Commercial Lawn Maintenance • Professional Flowerbed Design & Repair</p> <Button className="bg-white text-green-900 font-semibold">Request a Commercial Quote</Button> </motion.div> </section>

{/* SERVICES */}
  <section className="py-16 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      <Card>
        <CardContent className="p-6">
          <Leaf className="h-8 w-8 text-green-700 mb-3" />
          <h3 className="font-bold text-lg">Flowerbed Design & Restoration</h3>
          <p className="text-sm mt-2">Mulching, edging, planting, seasonal color installs, and full bed rebuilds for commercial properties.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <Building2 className="h-8 w-8 text-green-700 mb-3" />
          <h3 className="font-bold text-lg">Commercial Lawn Care</h3>
          <p className="text-sm mt-2">Reliable mowing, trimming, cleanups, and property-wide maintenance for offices, HOAs, and facilities.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <Calendar className="h-8 w-8 text-green-700 mb-3" />
          <h3 className="font-bold text-lg">Scheduled Service Plans</h3>
          <p className="text-sm mt-2">Weekly, bi-weekly, and seasonal contracts designed for commercial reliability and budgeting.</p>
        </CardContent>
      </Card>
    </div>
  </section>

  {/* FLOWERBED GALLERY PREVIEW */}
  <section className="py-16 px-6 bg-white">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Flowerbed Gallery</h2>
      <p className="mb-6 text-gray-600">View examples of our commercial flowerbed installations, restorations, and seasonal color work.</p>
      <Button className="bg-green-800">View Full Gallery</Button>
    </div>
  </section>

  {/* BOOKING */}
  <section className="py-16 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Book a Service Visit</h2>
      <Card>
        <CardContent className="p-6 grid gap-4">
          <Input placeholder="Business Name" />
          <Input placeholder="Contact Name" />
          <Input placeholder="Email" />
          <Input placeholder="Property Address" />
          <Textarea placeholder="Describe your service needs" />
          <Button className="bg-green-800">Submit Booking Request</Button>
        </CardContent>
      </Card>
    </div>
  </section>

  {/* PAYMENT PORTAL */}
  <section className="py-16 px-6 bg-gray-100">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Customer Payment Portal</h2>
      <Card>
        <CardContent className="p-6 grid gap-4">
          <CreditCard className="h-8 w-8 text-green-700" />
          <Input placeholder="Invoice Number" />
          <Input placeholder="Business Email" />
          <Input placeholder="Payment Amount" />
          <Button className="bg-green-900">Pay Invoice Securely</Button>
          <p className="text-xs text-gray-500">Payments can be connected to Stripe, Square, or QuickBooks.</p>
        </CardContent>
      </Card>
    </div>
  </section>

  {/* CONTACT */}
  <section className="py-16 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Davis Lawn & Garden</h2>
      <Card>
        <CardContent className="p-6 grid gap-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Textarea placeholder="Message" />
          <Button className="bg-green-800">Send Message</Button>
        </CardContent>
      </Card>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="bg-green-900 text-white py-6 text-center">
    <p className="text-sm">© {new Date().getFullYear()} Davis Lawn & Garden • Commercial Landscaping Professionals</p>
  </footer>
</div>

); }
