// Extra content for service pages: images, benefits, problems, and FAQs.
// Keeps content.ts light and lets us add rich, unique sections per service.

import insp1 from "@/assets/svc-mold-inspection-1.jpg";
import insp2 from "@/assets/svc-mold-inspection-2.jpg";
import test1 from "@/assets/svc-mold-testing-1.jpg";
import test2 from "@/assets/svc-mold-testing-2.jpg";
import rem1 from "@/assets/svc-mold-remediation-1.jpg";
import rem2 from "@/assets/svc-mold-remediation-2.jpg";
import black1 from "@/assets/svc-black-mold-removal-1.jpg";
import black2 from "@/assets/svc-black-mold-removal-2.jpg";
import attic1 from "@/assets/svc-attic-mold-removal-1.jpg";
import attic2 from "@/assets/svc-attic-mold-removal-2.jpg";
import bsmt1 from "@/assets/svc-basement-mold-removal-1.jpg";
import bsmt2 from "@/assets/svc-basement-mold-removal-2.jpg";
import crawl1 from "@/assets/svc-crawl-space-mold-removal-1.jpg";
import crawl2 from "@/assets/svc-crawl-space-mold-removal-2.jpg";
import bath1 from "@/assets/svc-bathroom-mold-removal-1.jpg";
import bath2 from "@/assets/svc-bathroom-mold-removal-2.jpg";
import duct1 from "@/assets/svc-air-duct-mold-removal-1.jpg";
import duct2 from "@/assets/svc-air-duct-mold-removal-2.jpg";
import water1 from "@/assets/svc-water-damage-restoration-1.jpg";
import water2 from "@/assets/svc-water-damage-restoration-2.jpg";
import res1 from "@/assets/svc-residential-mold-removal-1.jpg";
import res2 from "@/assets/svc-residential-mold-removal-2.jpg";
import com1 from "@/assets/svc-commercial-mold-removal-1.jpg";
import com2 from "@/assets/svc-commercial-mold-removal-2.jpg";
import em1 from "@/assets/svc-emergency-mold-services-1.jpg";
import em2 from "@/assets/svc-emergency-mold-services-2.jpg";

export type ServiceImage = { src: string; alt: string; caption?: string };
export type ServiceFAQ = { q: string; a: string };

export type ServiceExtras = {
  images: [ServiceImage, ServiceImage];
  benefits: string[];
  problems: string[];
  faqs: ServiceFAQ[];
};

export const serviceExtras: Record<string, ServiceExtras> = {
  "mold-inspection": {
    images: [
      { src: insp1, alt: "Certified mold inspector using a moisture meter on drywall in a Greensboro home", caption: "Moisture mapping every wet-prone surface" },
      { src: insp2, alt: "Thermal imaging camera showing hidden moisture behind a wall during a Greensboro mold inspection", caption: "Thermal imaging finds leaks behind finished walls" },
    ],
    benefits: [
      "Know for sure whether the smell or spot is really mold",
      "Written report you can share with insurance or a real estate agent",
      "Same-week appointments across the Triad",
      "Independent findings, no pressure to buy more work",
    ],
    problems: [
      "Musty smell that stays after cleaning",
      "Dark spots on ceilings, baseboards, or around windows",
      "Recent water leak that never got dried out",
      "New allergy symptoms only when you are home",
    ],
    faqs: [
      { q: "How much is a mold inspection?", a: "Most residential inspections in Greensboro run $199 to $399 depending on square footage and if a crawl space or attic is included. You get a firm price before the visit." },
      { q: "Do you charge for a quote if you find no mold?", a: "The inspection fee covers the visit and the written report. If we find nothing, that is the answer, and you still get the paperwork." },
      { q: "Should I get an inspection before buying a home?", a: "Yes, especially for older brick homes, homes with a basement, or any property with a crawl space. A one hour inspection can save tens of thousands in surprises." },
      { q: "Will you also test the air during the inspection?", a: "Air sampling is a separate step and an added fee. We recommend it when there is visible growth or when you plan to file an insurance claim." },
    ],
  },
  "mold-testing": {
    images: [
      { src: test1, alt: "Air sampling pump with spore trap cassette running in a Greensboro home during mold testing" },
      { src: test2, alt: "Independent lab technician analyzing mold samples under a microscope" },
    ],
    benefits: [
      "Independent, third-party accredited lab results",
      "Clear numbers you can compare to the outdoor baseline",
      "Works for pre-purchase, post-remediation, and health concerns",
      "Written report in 2 to 3 business days",
    ],
    problems: [
      "You can smell mold but cannot see it",
      "A family member has unexplained allergies or asthma flare-ups",
      "You need clearance proof after a cleanup",
      "A landlord or buyer is asking for verification",
    ],
    faqs: [
      { q: "Do I really need testing if I can already see mold?", a: "Usually no. If growth is visible you already have the answer. Testing helps when the source is hidden, when you need proof for insurance, or after remediation to confirm the space is safe." },
      { q: "How is the sample taken?", a: "For air testing we use a calibrated pump and a spore trap cassette for 5 to 10 minutes per room. For surfaces we use a swab or tape lift. Nothing invasive." },
      { q: "How long until I get results?", a: "Two to three business days from the lab. We call you as soon as the report is in and walk through the numbers together." },
      { q: "Can I trust the results if the same company does the removal?", a: "That is why we use an independent lab and can also arrange a separate third-party hygienist for post-remediation clearance if you prefer." },
    ],
  },
  "mold-remediation": {
    images: [
      { src: rem1, alt: "Mold remediation containment with plastic sheeting and HEPA air scrubber inside a Greensboro home" },
      { src: rem2, alt: "Technician in Tyvek suit HEPA vacuuming wall framing after mold removal" },
    ],
    benefits: [
      "IICRC S520 compliant process from start to finish",
      "Full containment so spores stay in the work area",
      "Written scope, firm price, and photo documentation",
      "Post-remediation verification testing included on request",
    ],
    problems: [
      "Mold that keeps coming back after DIY cleaning",
      "Damage larger than a 10 square foot patch",
      "Growth inside walls, floors, or ceilings",
      "Health issues that started after a leak or flood",
    ],
    faqs: [
      { q: "How long does a full remediation take?", a: "Small jobs finish in 2 to 3 days. A whole basement or attic can take 5 to 10 days plus any reconstruction. We give you a day-by-day schedule up front." },
      { q: "Do you rebuild after removal?", a: "We handle drywall, insulation, paint, and basic trim. For larger reconstruction we bring in a licensed general contractor we have worked with for years." },
      { q: "How do I know the mold is actually gone?", a: "We run air clearance sampling after the containment comes down and share the lab report. That is your written proof." },
      { q: "Will bleach work instead of remediation?", a: "Bleach only kills surface mold on hard, non-porous surfaces. On drywall or wood the roots stay behind and it grows back within weeks." },
    ],
  },
  "black-mold-removal": {
    images: [
      { src: black1, alt: "Close up of black Stachybotrys mold on drywall being safely removed by a gloved technician" },
      { src: black2, alt: "Technician in full hazmat suit and respirator carrying double bagged black mold debris out of a Greensboro home" },
    ],
    benefits: [
      "Safe removal without spreading spores through the house",
      "P100 respirators and full body suits on every crew",
      "Air clearance testing before we release the space",
      "Written warranty on the treated area",
    ],
    problems: [
      "Dark greenish-black spots that feel slimy when wet",
      "Strong musty odor that gets worse in humid weather",
      "Chronic cough, sinus issues, or headaches inside the home",
      "Prior water damage that dried on its own",
    ],
    faqs: [
      { q: "How dangerous is black mold really?", a: "Stachybotrys does not affect everyone the same way. Kids, older adults, and anyone with asthma or a weak immune system are most at risk. Do not disturb it dry." },
      { q: "Can I just spray it and wipe it off?", a: "No. Dry brushing or spraying without containment sends millions of spores into the air. That is how it spreads to other rooms." },
      { q: "How much does black mold removal cost?", a: "Most residential black mold jobs run $1,500 to $6,000. Cost depends on the square footage, the material affected, and whether reconstruction is needed." },
      { q: "Is it safe to stay in the house during the work?", a: "In most cases yes because the work area is fully sealed. If the mold is in a central living area or if anyone has serious breathing issues, we suggest staying elsewhere for a night or two." },
    ],
  },
  "attic-mold-removal": {
    images: [
      { src: attic1, alt: "Dark mold stains on roof sheathing inside a Greensboro attic during inspection" },
      { src: attic2, alt: "Clean attic with fresh insulation and treated wood after mold remediation in Greensboro" },
    ],
    benefits: [
      "Fix the airflow problem so the mold does not come back",
      "Sanding, HEPA vacuuming, or fogging based on how deep the growth is",
      "Coordination with roofing and insulation crews when needed",
      "Two-year warranty on the treated sheathing",
    ],
    problems: [
      "Dark staining on the underside of the roof deck",
      "Wet or matted insulation",
      "Bathroom exhaust fans venting into the attic",
      "Ice dams or roof leaks in the last two winters",
    ],
    faqs: [
      { q: "Why did mold grow in my attic?", a: "Almost always it is trapped moisture. Common causes are blocked soffit vents, a bath fan dumping into the attic, or a slow roof leak around a vent or flashing." },
      { q: "Should I replace all the plywood?", a: "Usually no. If the wood is still structurally sound we treat, sand or fog, and seal it. Full replacement is only needed if the wood is soft or delaminating." },
      { q: "Will insurance pay for attic mold?", a: "If it is from a sudden covered event like a storm-damaged roof, often yes. Long-term ventilation issues are usually excluded." },
      { q: "Can I finish the attic after this?", a: "Only after the ventilation is fixed and the wood is fully dry for at least a week of monitoring. Otherwise you seal the moisture in." },
    ],
  },
  "basement-mold-removal": {
    images: [
      { src: bsmt1, alt: "Damp Greensboro basement with mold stains on drywall near a water heater before remediation" },
      { src: bsmt2, alt: "Clean finished basement with a commercial dehumidifier running after mold removal" },
    ],
    benefits: [
      "Handles the moisture source and the mold in one visit",
      "Whole-basement dehumidifier setup and humidity monitoring",
      "Antimicrobial treatment of block, concrete, and framing",
      "Recommendations for drainage, gutters, and grading",
    ],
    problems: [
      "Musty smell that carries up the stairs",
      "White chalky efflorescence on block walls",
      "Warped baseboards or peeling paint near the floor",
      "Standing water after a heavy rain",
    ],
    faqs: [
      { q: "How much does basement mold removal cost?", a: "Most basement jobs in Greensboro run $2,000 to $8,000. Cost depends on drywall removal, dehumidifier install, and any exterior drainage work." },
      { q: "Do I need to waterproof the basement first?", a: "Not always. Often a dehumidifier plus gutter and downspout fixes are enough. We only recommend interior or exterior waterproofing when the water problem is beyond humidity." },
      { q: "How long will a finished basement take?", a: "Removal is 3 to 5 days. Rebuild depends on how much drywall and flooring came out, usually another 1 to 2 weeks." },
      { q: "What humidity level should I keep the basement at?", a: "Below 55 percent year round. A properly sized dehumidifier with a built-in humidistat holds it there without your input." },
    ],
  },
  "crawl-space-mold-removal": {
    images: [
      { src: crawl1, alt: "Crawl space under a Greensboro home with heavy white vapor barrier installed across the ground" },
      { src: crawl2, alt: "Technician treating floor joists with antimicrobial spray inside a crawl space" },
    ],
    benefits: [
      "Removes the musty smell coming up through the floors",
      "Vapor barrier and encapsulation options",
      "Treatment of joists, subfloor, and piers",
      "Optional dehumidifier install with remote monitoring",
    ],
    problems: [
      "Cupping, cracking, or squeaky hardwood floors",
      "Cold, damp floors in winter",
      "Higher energy bills with no other cause",
      "Standing water or wet soil in the crawl space",
    ],
    faqs: [
      { q: "Do I need full encapsulation?", a: "Not always. A heavy 10 to 20 mil vapor barrier plus a dehumidifier fixes most crawl spaces in Guilford County. Full encapsulation is worth it for chronic groundwater or homes with severe allergy issues." },
      { q: "Will this fix the smell in my house?", a: "In most homes, yes. Up to half of the air upstairs comes from the crawl space. Sealing it usually clears the smell within a few days." },
      { q: "Can you remove old insulation too?", a: "Yes. Wet or moldy fiberglass gets bagged and hauled out. We can install new insulation once the space is dry and treated." },
      { q: "How long does a crawl space job take?", a: "Most jobs are 2 to 4 days. Full encapsulation with a dehumidifier install can push to a week." },
    ],
  },
  "bathroom-mold-removal": {
    images: [
      { src: bath1, alt: "Bathroom tile shower with black mold on grout and caulk before remediation" },
      { src: bath2, alt: "Clean bright bathroom with fresh grout and a working exhaust fan after mold remediation" },
    ],
    benefits: [
      "Fixes the airflow and moisture so mold stops coming back",
      "New caulk, grout sealant, and vented bath fan when needed",
      "Same-day work on most small bathrooms",
      "Written warranty on the treated area",
    ],
    problems: [
      "Black spots along grout lines and around the tub",
      "Peeling paint on the ceiling above the shower",
      "Fan that runs but does not actually vent outside",
      "Warped baseboards near the toilet",
    ],
    faqs: [
      { q: "Can I just replace the caulk?", a: "If the mold is only on the caulk surface, yes. If it has gone into the drywall behind the tile, replacing caulk hides the problem for a few months and then it comes back darker." },
      { q: "Do I need a bigger exhaust fan?", a: "Most bathrooms need at least 80 CFM of ventilation ducted straight to the outside, not into the attic. We can size and install the right fan." },
      { q: "How long does a bathroom job take?", a: "Most bathrooms are done in one day. If drywall or subfloor needs to come out, plan on 2 to 3 days." },
      { q: "Will a dehumidifier help?", a: "In whole-house terms yes. For a single bathroom, a properly vented fan run for 20 minutes after every shower does more." },
    ],
  },
  "air-duct-mold-removal": {
    images: [
      { src: duct1, alt: "HVAC technician cleaning a moldy evaporator coil inside an air handler in Greensboro" },
      { src: duct2, alt: "Rotating brush and HEPA vacuum hose cleaning the interior of an air duct" },
    ],
    benefits: [
      "Removes the musty smell every time the AC starts",
      "Coil, drain pan, and duct interior cleaning in one visit",
      "Antimicrobial fog through the full system",
      "New filter and a system test before we leave",
    ],
    problems: [
      "Musty smell out of the vents when the AC kicks on",
      "Visible dust or dark buildup around register grilles",
      "Water pooling under the air handler",
      "New allergy symptoms only when the system runs",
    ],
    faqs: [
      { q: "Is duct cleaning worth it?", a: "For mold, yes. For general dust, only sometimes. If you can see mold at the coil or smell it at every vent, cleaning is the right call." },
      { q: "How often should this be done?", a: "For most Triad homes, once every 3 to 5 years unless you had a mold event, water leak, or major renovation. Then do it right away." },
      { q: "Will you damage the flex duct?", a: "No. We use soft rotating brushes on flexible cables that are made for residential ducts. If any run is beyond cleaning we tell you and quote replacement." },
      { q: "How long does a whole-system cleaning take?", a: "Most single-system homes are done in 4 to 6 hours." },
    ],
  },
  "water-damage-restoration": {
    images: [
      { src: water1, alt: "Emergency water extraction from a flooded Greensboro home with a truck-mounted wand" },
      { src: water2, alt: "Commercial air movers and dehumidifiers drying a home interior after water damage" },
    ],
    benefits: [
      "Fast response stops mold before it starts",
      "Direct billing to most major insurance carriers",
      "Daily moisture readings until the structure is dry to baseline",
      "Full documentation for your claim",
    ],
    problems: [
      "Burst pipe or supply line leak",
      "Roof or window leak after a storm",
      "Overflowing appliance or hot water heater",
      "Sewer backup or sump pump failure",
    ],
    faqs: [
      { q: "How fast can you get here?", a: "Same day for most Greensboro area calls. Emergencies within a 30 mile radius usually see a crew within 90 minutes." },
      { q: "Will you work with my insurance?", a: "Yes. We photograph and document everything, talk directly to your adjuster, and can bill most carriers directly." },
      { q: "How long does drying take?", a: "Typical residential drying is 3 to 5 days. Hardwood floors and plaster walls can take longer because they hold water." },
      { q: "Do I need to move out?", a: "Only if the affected area is a main living space or if the electricity has to be turned off. Most jobs let you stay in unaffected rooms." },
    ],
  },
  "residential-mold-removal": {
    images: [
      { src: res1, alt: "Suburban Greensboro home with a professional mold remediation service van in the driveway" },
      { src: res2, alt: "Certified technician meeting with a homeowner in the living room to review a mold remediation plan" },
    ],
    benefits: [
      "Free estimates for homeowners and landlords",
      "Work scheduled around your family's routine",
      "Kid, pet, and asthma-safe cleaning products",
      "Written report you can keep with your home records",
    ],
    problems: [
      "Musty smell that guests notice before you do",
      "Recurring allergy or asthma issues at home only",
      "Discolored spots after a leaky roof or window",
      "Selling a home and want a clean report",
    ],
    faqs: [
      { q: "Can you work while we live in the home?", a: "Yes. Containment keeps the mess and the spores in the work area. We schedule loud or disruptive tasks around your family." },
      { q: "Do you handle rental properties?", a: "Yes. We can coordinate directly with tenants, provide detailed reports to owners, and invoice to the landlord or property manager." },
      { q: "What about pets?", a: "The products we use are safe for pets once dry. We ask that pets stay out of the immediate work area during active removal." },
      { q: "Do you offer a warranty?", a: "Yes. Every residential job comes with a written warranty on the treated area, as long as the moisture source we identified stays repaired." },
    ],
  },
  "commercial-mold-removal": {
    images: [
      { src: com1, alt: "Commercial office with a mold remediation containment set up during after hours work in Greensboro" },
      { src: com2, alt: "Two certified technicians inspecting a restaurant kitchen for hidden mold and moisture" },
    ],
    benefits: [
      "After-hours and weekend scheduling to keep you open",
      "Detailed reports for property managers and adjusters",
      "Handles offices, retail, medical, restaurants, and multi-unit",
      "COI and hold harmless paperwork on request",
    ],
    problems: [
      "Health complaints from staff or tenants",
      "Musty smell in a tenant space affecting business",
      "Water event in one unit spreading to neighbors",
      "Health inspector or insurance requirement for cleanup",
    ],
    faqs: [
      { q: "Can you work at night to keep our business open?", a: "Yes. Most commercial jobs run after close through the early morning. We seal the work area so you can open the next day." },
      { q: "Do you carry a Certificate of Insurance?", a: "Yes. We carry $2 million general liability and workers comp and can send a COI to your property manager before we start." },
      { q: "Can you handle a whole apartment complex?", a: "Yes. We have crews sized for multi-unit and can phase the work by building or floor." },
      { q: "Do you handle mold in food-service kitchens?", a: "Yes, with food-safe products and coordination with your health inspector. We work when the kitchen is closed and clean-verify before you reopen." },
    ],
  },
  "emergency-mold-services": {
    images: [
      { src: em1, alt: "Emergency response service van outside a Greensboro home at night for water and mold emergency" },
      { src: em2, alt: "Technician extracting water from a flooded basement at night during an emergency call" },
    ],
    benefits: [
      "24/7 phone answered by a real person, not a machine",
      "Same-day dispatch across the Triad",
      "Extraction, drying, and containment on the first visit",
      "Full documentation from minute one for your insurance",
    ],
    problems: [
      "Standing water on the floor right now",
      "Burst pipe or hot water heater failure",
      "Sewer backup or sump pump failure",
      "Storm or roof damage soaking the ceiling",
    ],
    faqs: [
      { q: "How fast can you actually be here?", a: "For most Greensboro addresses we can have a crew on-site within 60 to 90 minutes, 24 hours a day." },
      { q: "What should I do before you arrive?", a: "If it is safe, turn off the water at the main and the electricity to affected rooms. Move small valuables out. Do not use a household vacuum on standing water." },
      { q: "Is emergency service more expensive?", a: "There is a modest after-hours dispatch fee. The extraction and drying rates are the same. Fast response almost always saves money because it prevents mold." },
      { q: "Will insurance cover this?", a: "Sudden, accidental water events like burst pipes are usually covered up to a limit. We document everything and can talk to your adjuster while we work." },
    ],
  },
};

export function getServiceExtras(slug: string): ServiceExtras | null {
  return serviceExtras[slug] ?? null;
}
