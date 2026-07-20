import { ncCities } from "@/lib/nc-cities";

export const business = {
  name: "Greensboro Mold Removal Company",
  phone: "+1 (743) 373-1171",
  phoneRaw: "+17433731171",
  phoneDisplay: "(743) 373-1171",
  email: "info@greensboromoldremovalco.com",
  address: {
    street: "202 S Eugene St",
    city: "Greensboro",
    state: "NC",
    zip: "27401",
    country: "US",
  },
  hours: "Mon–Sun 24/7 for emergencies · Office Mon–Fri 8am–6pm",
  areaServed: [
    "Greensboro, NC", "High Point, NC", "Winston-Salem, NC",
    "Kernersville, NC", "Jamestown, NC", "Oak Ridge, NC",
    "Summerfield, NC", "Burlington, NC",
  ],
  geo: { lat: 36.0673, lng: -79.7899 },
};

export const services = [
  { slug: "mold-inspection", title: "Mold Inspection", short: "Full visual inspection with moisture mapping." },
  { slug: "mold-testing", title: "Mold Testing", short: "Air and surface samples sent to an accredited lab." },
  { slug: "mold-remediation", title: "Mold Remediation", short: "Safe removal following IICRC S520 standards." },
  { slug: "black-mold-removal", title: "Black Mold Removal", short: "Containment and removal of Stachybotrys and similar molds." },
  { slug: "attic-mold-removal", title: "Attic Mold Removal", short: "Fix roof leaks and ventilation, then treat the wood." },
  { slug: "basement-mold-removal", title: "Basement Mold Removal", short: "Address groundwater, humidity, and stained drywall." },
  { slug: "crawl-space-mold-removal", title: "Crawl Space Mold Removal", short: "Vapor barriers, subfloor treatment, and dehumidification." },
  { slug: "bathroom-mold-removal", title: "Bathroom Mold Removal", short: "Remove tile, grout, and drywall mold at the source." },
  { slug: "air-duct-mold-removal", title: "Air Duct & HVAC Mold Removal", short: "Clean coils, drain pans, and duct interiors." },
  { slug: "water-damage-restoration", title: "Water Damage Restoration", short: "Extract water, dry the structure, prevent mold." },
  { slug: "residential-mold-removal", title: "Residential Mold Removal", short: "Homes, condos, and rentals across the Triad." },
  { slug: "commercial-mold-removal", title: "Commercial Mold Removal", short: "Offices, retail, restaurants, and multi-unit buildings." },
  { slug: "emergency-mold-services", title: "Emergency Mold Services (24/7)", short: "Same-day response for floods and active leaks." },
];

export const locations = ncCities.map(c => ({ slug: c.slug, city: c.city, state: c.state }));
