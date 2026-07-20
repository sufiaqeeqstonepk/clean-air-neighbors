import { services, locations } from "@/lib/business";

export type ServiceContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  sections: { h2: string; body: string; bullets?: string[] }[];
};

const nearby = "We handle jobs across Greensboro and nearby areas including High Point, Winston-Salem, Kernersville, Jamestown, Oak Ridge, Summerfield, and Burlington.";

export const serviceContent: Record<string, Omit<ServiceContent, "slug" | "title">> = {
  "mold-inspection": {
    metaTitle: "Mold Inspection in Greensboro, NC | Same-Week Appointments",
    metaDesc: "Certified mold inspection in Greensboro, NC. Moisture mapping, thermal imaging, clear reports. Call (743) 373-1171 for a quote.",
    h1: "Mold Inspection in Greensboro, NC",
    intro: "If you smell something musty, see dark spots on a wall, or had a leak that never got dried out, an inspection is the right first step. Our inspectors walk the whole home, find the source of the moisture, and tell you what is actually going on before anyone talks about removal.",
    sections: [
      { h2: "What is included in the inspection", body: "We check every room and every part of the home that touches water, including the attic, basement, crawl space, laundry, kitchen, and bathrooms.", bullets: [
        "Room-by-room visual inspection",
        "Moisture meter readings on drywall, wood, and floors",
        "Thermal imaging to spot hidden wet areas behind walls",
        "Photos of every problem area",
        "A written report you can keep and share with your insurance",
      ]},
      { h2: "How long it takes", body: "A standard home inspection takes about 60 to 90 minutes. Larger homes or commercial jobs take longer. You get your report within one business day." },
      { h2: "When testing is added", body: "If we see mold or if you plan to sell the home, we recommend adding air or surface samples. Samples go to a third-party accredited lab so the results are independent." },
      { h2: "Service area", body: nearby },
    ],
  },
  "mold-testing": {
    metaTitle: "Mold Testing in Greensboro, NC | Lab-Verified Results",
    metaDesc: "Independent mold air and surface testing in Greensboro, NC. Clear lab reports in 2 to 3 days. Call (743) 373-1171.",
    h1: "Mold Testing in Greensboro, NC",
    intro: "Testing tells you what kind of mold is in the air and how much of it. We use a third-party accredited lab so the results are not something we make up. Testing is useful before remediation to know what you are dealing with, and after remediation as a clearance test.",
    sections: [
      { h2: "Types of samples we take", body: "We match the sample type to the job.", bullets: [
        "Air samples using a spore trap and calibrated pump",
        "Surface swab samples for visible growth",
        "Tape lift samples for delicate surfaces",
        "Outdoor control samples for comparison",
      ]},
      { h2: "Reading the lab report", body: "We sit down with you and explain the numbers in plain English. High indoor counts of certain molds compared to the outdoor baseline usually mean there is a hidden source." },
      { h2: "Post-remediation verification", body: "After a job is done, we bring an independent hygienist or run our own clearance sampling so you have written proof the area is safe." },
      { h2: "Service area", body: nearby },
    ],
  },
  "mold-remediation": {
    metaTitle: "Mold Remediation in Greensboro, NC | IICRC S520 Standards",
    metaDesc: "Safe mold remediation in Greensboro, NC following IICRC S520. Containment, HEPA filtration, full cleanup. Call (743) 373-1171.",
    h1: "Mold Remediation in Greensboro, NC",
    intro: "Remediation is the full process of removing mold and fixing what caused it. We follow the IICRC S520 standard which is the industry benchmark. That means proper containment, negative air, HEPA filtration, and cleanup that does not just push spores into the next room.",
    sections: [
      { h2: "Our remediation steps", body: "Every job follows the same clear steps so nothing gets skipped.", bullets: [
        "Set up containment with plastic sheeting and zippered doors",
        "Run HEPA air scrubbers with negative pressure",
        "Remove mold-damaged materials safely and bag them",
        "HEPA vacuum and wipe down every surface",
        "Treat framing and structural wood",
        "Dry the space fully before rebuild",
        "Post-remediation verification testing",
      ]},
      { h2: "Fixing the source", body: "Cleaning mold without fixing the water problem is a waste of money. We find the leak, the humidity issue, or the drainage problem first, and we tell you exactly what needs to be done to keep it from coming back." },
      { h2: "Insurance help", body: "We work with most major carriers, document everything with photos, and can talk to your adjuster directly." },
      { h2: "Service area", body: nearby },
    ],
  },
  "black-mold-removal": {
    metaTitle: "Black Mold Removal in Greensboro, NC | Safe & Certified",
    metaDesc: "Black mold removal in Greensboro, NC. Safe containment and disposal of Stachybotrys. Call (743) 373-1171 for a fast response.",
    h1: "Black Mold Removal in Greensboro, NC",
    intro: "Black mold is the common name for a few different dark colored molds, including Stachybotrys chartarum. It grows on drywall, wood, and ceiling tiles that stay wet. It should never be scraped off dry because that sends spores into the air.",
    sections: [
      { h2: "Why it needs a professional", body: "Black mold releases spores easily when disturbed. Handling it without containment can spread the problem to the rest of the house and cause health issues for anyone inside." },
      { h2: "How we handle it safely", body: "We set up full containment before we touch it. Workers wear P100 respirators and Tyvek suits. All material comes out double bagged.", bullets: [
        "Full plastic containment with airlock",
        "Negative air machines with HEPA filters",
        "Removal of contaminated drywall and insulation",
        "HEPA vacuum and antimicrobial cleaning of framing",
        "Air clearance testing before we hand the space back",
      ]},
      { h2: "Health concerns", body: "If anyone in the home has breathing issues, allergies, or a weak immune system, stay out of the affected rooms until the job is done." },
      { h2: "Service area", body: nearby },
    ],
  },
  "attic-mold-removal": {
    metaTitle: "Attic Mold Removal in Greensboro, NC | Roof & Vent Repair",
    metaDesc: "Attic mold removal in Greensboro, NC. Fix roof leaks and ventilation, then treat sheathing. Call (743) 373-1171.",
    h1: "Attic Mold Removal in Greensboro, NC",
    intro: "Attic mold is almost always caused by a roof leak or bad ventilation. You often see it as dark stains on the underside of the roof sheathing. Cleaning it without fixing the airflow just means it will come back.",
    sections: [
      { h2: "Common causes we find", body: "Most attic mold in the Triad comes from one of these.", bullets: [
        "Blocked or missing soffit vents",
        "Bathroom fans that dump into the attic instead of outside",
        "Small roof leaks around vents or flashing",
        "Missing or wet insulation trapping moisture",
      ]},
      { h2: "Our process", body: "We inspect the whole attic, document the source, treat all affected wood with an EPA registered antimicrobial, and either sand or fog based on how deep the mold went. We can also coordinate roof and ventilation repairs." },
      { h2: "Service area", body: nearby },
    ],
  },
  "basement-mold-removal": {
    metaTitle: "Basement Mold Removal in Greensboro, NC | Humidity Fixes",
    metaDesc: "Basement mold removal in Greensboro, NC. Address groundwater, humidity, and stained drywall. Call (743) 373-1171.",
    h1: "Basement Mold Removal in Greensboro, NC",
    intro: "Basements are the number one place we find mold in Triad homes. High humidity, groundwater, and slow leaks around water heaters and washers all feed it. The good news is a proper cleanup plus a dehumidifier usually keeps it away for good.",
    sections: [
      { h2: "What causes basement mold here", body: "Greensboro summers push humidity indoors, and clay soil around foundations holds water for a long time after heavy rain. Both of those show up in the basement as damp walls and musty air." },
      { h2: "Full basement remediation", body: "We remove and replace mold-damaged drywall and insulation, HEPA vacuum the whole space, treat masonry, and set up drying equipment.", bullets: [
        "Remove wet drywall and baseboards to studs",
        "HEPA vacuum every surface including exposed framing",
        "Antimicrobial treatment of block and concrete",
        "Dehumidifier setup and humidity monitoring",
      ]},
      { h2: "Prevention that actually works", body: "We recommend a whole-basement dehumidifier set to 50 percent, gutter cleaning, and downspout extensions that push water at least 6 feet from the foundation." },
      { h2: "Service area", body: nearby },
    ],
  },
  "crawl-space-mold-removal": {
    metaTitle: "Crawl Space Mold Removal in Greensboro, NC | Vapor Barriers",
    metaDesc: "Crawl space mold removal in Greensboro, NC. Vapor barriers, subfloor treatment, and encapsulation. Call (743) 373-1171.",
    h1: "Crawl Space Mold Removal in Greensboro, NC",
    intro: "Most homes in this area have a vented crawl space, and most of them are too humid. Wet crawl space air rises into the living space, which is where the musty smell and floor sagging start. Cleaning the crawl space and sealing it makes a big difference upstairs too.",
    sections: [
      { h2: "Signs your crawl space has mold", body: "You do not need to crawl under there to know something is wrong.", bullets: [
        "Cupping or squeaky hardwood floors",
        "Musty smell in the house",
        "Higher energy bills",
        "Visible mold on floor joists when you look with a flashlight",
      ]},
      { h2: "What we do", body: "We remove standing water, treat wood joists, install a heavy vapor barrier across the ground, and set up a dehumidifier. For long-term protection we can fully encapsulate the space." },
      { h2: "Service area", body: nearby },
    ],
  },
  "bathroom-mold-removal": {
    metaTitle: "Bathroom Mold Removal in Greensboro, NC | Grout & Drywall",
    metaDesc: "Bathroom mold removal in Greensboro, NC. Fix grout, drywall, and ventilation to stop repeat mold. Call (743) 373-1171.",
    h1: "Bathroom Mold Removal in Greensboro, NC",
    intro: "Bathroom mold is common but it is not always just surface stains. Behind loose tile or under vinyl flooring, mold can eat into the drywall and subfloor. We remove it fully and fix the airflow so it stops coming back.",
    sections: [
      { h2: "What we check first", body: "We look at the fan, the caulk lines, the grout, the toilet base, and under the vanity. Any one of those can be the source." },
      { h2: "Repairs that stop the cycle", body: "Most bathrooms need three things after remediation: a properly vented bath fan, new caulk at every joint, and a fresh grout sealant. We can handle those too." },
      { h2: "Service area", body: nearby },
    ],
  },
  "air-duct-mold-removal": {
    metaTitle: "Air Duct & HVAC Mold Removal in Greensboro, NC",
    metaDesc: "HVAC and air duct mold removal in Greensboro, NC. Clean coils, drain pans, and duct interiors. Call (743) 373-1171.",
    h1: "Air Duct and HVAC Mold Removal in Greensboro, NC",
    intro: "If your AC pushes musty air through the whole house, the mold is likely in the coil, drain pan, or ducts. That is a special job because everything is sealed and moving air, and the wrong cleaning can spread spores through every room.",
    sections: [
      { h2: "How the mold gets there", body: "AC coils are cold and wet during summer. If the drain pan clogs or the coil is dirty, mold takes hold quickly. From there it spreads down the supply ducts." },
      { h2: "Our HVAC cleaning process", body: "We use negative air, HEPA filtration, and rotating brushes on flexible cables so we can reach the full length of the duct without damaging it.", bullets: [
        "Full coil and drain pan cleaning",
        "Antimicrobial fog through the system",
        "Duct interior brushing and HEPA vacuuming",
        "New filter and system test",
      ]},
      { h2: "Service area", body: nearby },
    ],
  },
  "water-damage-restoration": {
    metaTitle: "Water Damage Restoration in Greensboro, NC | Fast Response",
    metaDesc: "Water damage cleanup and drying in Greensboro, NC. Fast response to stop mold before it starts. Call (743) 373-1171.",
    h1: "Water Damage Restoration in Greensboro, NC",
    intro: "Mold can grow within 48 hours of a leak or flood. Fast, thorough drying is the best way to stop it. We pull the water, dry the structure, and monitor moisture levels until the numbers look right.",
    sections: [
      { h2: "What we handle", body: "Burst pipes, roof leaks, appliance failures, sewer backups, and storm damage." },
      { h2: "Our process", body: "We start with extraction, then set up commercial air movers and dehumidifiers. We take moisture readings every day and adjust until the structure is dry to a proven baseline." },
      { h2: "Service area", body: nearby },
    ],
  },
  "residential-mold-removal": {
    metaTitle: "Residential Mold Removal in Greensboro, NC | Homes & Condos",
    metaDesc: "Residential mold removal for homes, condos, and rentals in Greensboro, NC. Call (743) 373-1171 for a free quote.",
    h1: "Residential Mold Removal in Greensboro, NC",
    intro: "We handle single family homes, townhouses, condos, and rental properties across the Triad. The scope changes but the process is the same, containment first, then remove the source, then clean and verify.",
    sections: [
      { h2: "Homes we work on", body: "Older brick homes in Fisher Park, ranch homes in Lindley Park, newer builds in Summerfield, and everything in between." },
      { h2: "Landlord and tenant jobs", body: "We can coordinate with tenants directly, provide detailed documentation for the property owner, and work around occupancy when needed." },
      { h2: "Service area", body: nearby },
    ],
  },
  "commercial-mold-removal": {
    metaTitle: "Commercial Mold Removal in Greensboro, NC | Offices & Retail",
    metaDesc: "Commercial mold removal in Greensboro, NC. Offices, retail, restaurants, multi-unit. Call (743) 373-1171.",
    h1: "Commercial Mold Removal in Greensboro, NC",
    intro: "Businesses cannot shut down for weeks. We schedule work around your hours, keep the affected area sealed off, and document everything for property managers, insurance, and health inspectors.",
    sections: [
      { h2: "Property types we serve", body: "Offices, retail spaces, restaurants, medical facilities, warehouses, apartment complexes, and hotels." },
      { h2: "How we minimize disruption", body: "After-hours work, negative pressure containment so dust does not enter occupied areas, and a single point of contact through the whole job." },
      { h2: "Service area", body: nearby },
    ],
  },
  "emergency-mold-services": {
    metaTitle: "24/7 Emergency Mold Services in Greensboro, NC",
    metaDesc: "24/7 emergency mold and water damage response in Greensboro, NC. Fast on-site help. Call (743) 373-1171.",
    h1: "Emergency Mold Services in Greensboro, NC",
    intro: "Floods, burst pipes, and storm damage do not wait for business hours. We answer the phone around the clock and can be on-site fast to start extraction and drying before mold sets in.",
    sections: [
      { h2: "When to call us right away", body: "If you have standing water, sewage backup, or an active leak, call as soon as you can. Every hour of standing water raises the chance of mold." },
      { h2: "What happens on the emergency call", body: "We get details over the phone, dispatch a crew, and start work as soon as we arrive. Usually that means water extraction, moving contents out of the wet area, and setting up drying equipment the same visit." },
      { h2: "Service area", body: nearby },
    ],
  },
};

export function getServiceContent(slug: string): ServiceContent | null {
  const meta = services.find(s => s.slug === slug);
  const c = serviceContent[slug];
  if (!meta || !c) return null;
  return { slug, title: meta.title, ...c };
}

export const locationContent: Record<string, { metaTitle: string; metaDesc: string; h1: string; intro: string; landmarks: string; climate: string; neighborhoods: string[] }> = {
  "greensboro-nc": {
    metaTitle: "Mold Removal in Greensboro, NC | Local Certified Crew",
    metaDesc: "Mold inspection and remediation in Greensboro, NC. Local, licensed, and insured. Call (743) 373-1171 for a same-week visit.",
    h1: "Mold Inspection and Remediation in Greensboro, NC",
    intro: "Greensboro is our home. Our office is on South Eugene Street downtown, and most of our work is within a 30 minute drive. We know the local building stock, from the older homes near Fisher Park and Sunset Hills to the newer subdivisions in the north part of the city.",
    landmarks: "We serve every part of the city, including areas around UNC Greensboro, downtown, Lake Jeanette, Adams Farm, Hamilton Lakes, and the airport area.",
    climate: "Guilford County summers push humidity into the 70 to 90 percent range for weeks at a time. Combined with the region's clay soil that holds water around foundations, this creates ideal conditions for mold in crawl spaces, basements, and poorly ventilated attics.",
    neighborhoods: ["Fisher Park", "Sunset Hills", "Lindley Park", "Irving Park", "Hamilton Lakes", "Lake Jeanette", "Adams Farm", "New Garden"],
  },
  "high-point-nc": {
    metaTitle: "Mold Removal in High Point, NC | Certified Local Team",
    metaDesc: "Mold inspection and remediation in High Point, NC. Fast service, licensed, insured. Call (743) 373-1171.",
    h1: "Mold Removal in High Point, NC",
    intro: "High Point is about a 20 minute drive from our Greensboro office. We work all across the city, from Emerywood and Jamestown Road to the newer developments around Skeet Club Road.",
    landmarks: "Our crews cover High Point University, the Furniture Market district, Oak Hollow Lake, and the whole Adams Farm and Sedgefield line.",
    climate: "High Point sits at a similar elevation to Greensboro and gets the same humid summers. Older mill homes and furniture warehouses in the city core often have basement and crawl space moisture problems.",
    neighborhoods: ["Emerywood", "Jamestown Road", "Deep River", "Skeet Club", "Oak Hollow"],
  },
  "winston-salem-nc": {
    metaTitle: "Mold Removal in Winston-Salem, NC | Local Certified Crew",
    metaDesc: "Mold inspection and remediation in Winston-Salem, NC. Local team, IICRC certified. Call (743) 373-1171.",
    h1: "Mold Removal in Winston-Salem, NC",
    intro: "Winston-Salem is about 30 minutes west of our office, and we handle jobs across Forsyth County. West End, Ardmore, Buena Vista, and the newer subdivisions along Reynolda Road all keep us busy.",
    landmarks: "We cover the areas around Wake Forest University, Old Salem, Reynolda Village, Hanes Mall, and Clemmons.",
    climate: "The rolling hills around Winston-Salem drain slower than flat ground, which is one reason so many older homes in the West End see crawl space and basement mold.",
    neighborhoods: ["West End", "Ardmore", "Buena Vista", "Reynolda", "Washington Park"],
  },
  "kernersville-nc": {
    metaTitle: "Mold Removal in Kernersville, NC | Fast Local Service",
    metaDesc: "Mold inspection and remediation in Kernersville, NC. Same-week appointments. Call (743) 373-1171.",
    h1: "Mold Removal in Kernersville, NC",
    intro: "Kernersville sits right between Greensboro and Winston-Salem, so it is a short drive for our crews. We work on everything from older homes near Main Street to the growing neighborhoods around Caleb's Creek and Bull Creek.",
    landmarks: "Fourth of July Park, Körner's Folly, Bull Creek Recreation Area, and the Business 40 corridor.",
    climate: "Kernersville has a lot of homes on partial slabs with crawl spaces, and the humid summers make vapor barriers and dehumidification a smart long-term step.",
    neighborhoods: ["Caleb's Creek", "Bull Creek", "Historic District", "Oak Ridge Estates"],
  },
  "jamestown-nc": {
    metaTitle: "Mold Removal in Jamestown, NC | Local Certified Team",
    metaDesc: "Mold inspection and remediation in Jamestown, NC. Call (743) 373-1171 for a free quote.",
    h1: "Mold Removal in Jamestown, NC",
    intro: "Jamestown is a short drive south of Greensboro and we cover it every week. From the historic homes off Main Street to the newer builds around Sedgefield Country Club, we know the housing stock.",
    landmarks: "Historic Jamestown, Sedgefield Country Club, Mendenhall Homeplace, and the neighborhoods around Guilford Technical Community College.",
    climate: "Jamestown gets the same humid Piedmont summers, and many of the older homes have crawl spaces that need vapor barriers and dehumidifiers to stop mold from returning.",
    neighborhoods: ["Sedgefield", "Deep River", "Historic Jamestown"],
  },
  "oak-ridge-nc": {
    metaTitle: "Mold Removal in Oak Ridge, NC | Certified Local Service",
    metaDesc: "Mold inspection and remediation in Oak Ridge, NC. Licensed and insured. Call (743) 373-1171.",
    h1: "Mold Removal in Oak Ridge, NC",
    intro: "Oak Ridge is a quick drive northwest of Greensboro. Most of the homes are on larger lots and many have crawl spaces or full basements, both of which can hold moisture longer than owners expect.",
    landmarks: "Oak Ridge Military Academy, Town Park, and the neighborhoods along NC-68 and NC-150.",
    climate: "The area has more tree cover than downtown Greensboro, which means slower drying after heavy rain and more shaded attics prone to mold on north-facing sheathing.",
    neighborhoods: ["Linville Ridge", "Birkhaven", "Northern Shores"],
  },
  "summerfield-nc": {
    metaTitle: "Mold Removal in Summerfield, NC | Local Certified Team",
    metaDesc: "Mold inspection and remediation in Summerfield, NC. Call (743) 373-1171 for same-week service.",
    h1: "Mold Removal in Summerfield, NC",
    intro: "Summerfield is one of the fastest growing communities in Guilford County. We work on both established estate homes and newer construction, and both can have mold if drainage or ventilation is not right.",
    landmarks: "Summerfield Community Park, Bur-Mil Park, and the growing neighborhoods along US-220.",
    climate: "Many Summerfield homes are on wooded lots with rolling terrain, which slows how quickly the ground dries after storms and pushes moisture into crawl spaces.",
    neighborhoods: ["Armfield", "Henson Farms", "Polo Farms"],
  },
  "burlington-nc": {
    metaTitle: "Mold Removal in Burlington, NC | Certified Local Service",
    metaDesc: "Mold inspection and remediation in Burlington, NC. Call (743) 373-1171 for a fast, honest quote.",
    h1: "Mold Removal in Burlington, NC",
    intro: "Burlington is about 30 minutes east of us in Alamance County. We handle older mill homes near downtown, ranch homes in the west end, and the newer subdivisions along South Church Street.",
    landmarks: "City Park, Elon University nearby, Lake Mackintosh, and the neighborhoods around Alamance Regional Medical Center.",
    climate: "Alamance County shares the same humid Piedmont climate. Older Burlington homes often have shallow crawl spaces without vapor barriers, which is a common source of mold complaints.",
    neighborhoods: ["West Burlington", "Glencoe", "Mackintosh on the Lake"],
  },
};

export function getLocationContent(slug: string) {
  const meta = locations.find(l => l.slug === slug);
  const c = locationContent[slug];
  if (!meta || !c) return null;
  return { slug, city: meta.city, state: meta.state, ...c };
}
