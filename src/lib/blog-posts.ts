import hiddenMold from "@/assets/blog-hidden-mold.jpg";
import moldVsMildew from "@/assets/blog-mold-vs-mildew.jpg";
import crawlSpace from "@/assets/blog-crawl-space.jpg";
import afterFlood from "@/assets/blog-after-flood.jpg";
import insuranceClaim from "@/assets/blog-insurance-claim.jpg";
import blackMold from "@/assets/blog-black-mold.jpg";

export type BlogSection = { h2: string; body: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  desc: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  readMinutes: number;
  updated: string;
  intro: string;
  sections: BlogSection[];
  takeaways: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-of-hidden-mold",
    title: "7 Signs of Hidden Mold in Your Home",
    desc: "How to spot mold before it shows on the wall, from smells to musty laundry.",
    metaTitle: "7 Signs of Hidden Mold in Your Home | Greensboro Mold Removal",
    metaDescription: "Learn seven early warning signs of hidden mold in Greensboro homes, from musty odors to allergy flare-ups, and what to do next.",
    image: hiddenMold,
    imageAlt: "Certified inspector using a flashlight to check a ceiling for hidden mold in a Greensboro, NC home",
    readMinutes: 6,
    updated: "2026-07-01",
    intro:
      "Mold does not always show up as a black patch on the wall. In many Greensboro homes, mold grows behind drywall, under floors, or above ceiling tiles long before anyone sees it. Knowing the early signs helps you catch it before the repair gets expensive.",
    sections: [
      {
        h2: "1. A musty smell that will not go away",
        body: [
          "The most common sign of hidden mold is a damp, earthy smell. It often gets stronger after rain or when the HVAC runs.",
          "If one room smells musty and the rest of the house does not, start looking there first. Check under sinks, behind furniture, and around windows.",
        ],
      },
      {
        h2: "2. Allergy symptoms that flare up at home",
        body: [
          "Sneezing, itchy eyes, headaches, or asthma that gets worse indoors can point to mold. Symptoms often ease when you leave the house for a few days.",
          "Kids and older adults tend to react first. Track when symptoms start and stop to help your inspector narrow down the source.",
        ],
      },
      {
        h2: "3. Water stains or bubbling paint",
        body: [
          "Yellow or brown rings on the ceiling and paint that bubbles or peels are signs of moisture behind the surface. Where there is moisture, mold follows within 24 to 48 hours.",
        ],
      },
      {
        h2: "4. Warped floors or baseboards",
        body: [
          "Wood swells when it gets wet. Cupped floors, soft spots, or baseboards pulling from the wall usually mean water is sitting where you cannot see it.",
        ],
      },
      {
        h2: "5. High indoor humidity",
        body: [
          "Indoor humidity above 60 percent gives mold what it needs to grow. In the Triad, summer humidity often creeps into crawl spaces and basements without the homeowner noticing.",
          "A cheap hygrometer from any hardware store will tell you if your home runs too damp.",
        ],
      },
      {
        h2: "6. Condensation on windows and pipes",
        body: [
          "Steady condensation means warm, moist air is meeting a cold surface. Over time, this feeds mold on window frames, wall cavities, and pipe insulation.",
        ],
      },
      {
        h2: "7. A past leak that was never fully dried",
        body: [
          "A washing machine overflow, roof leak, or burst pipe from years ago can still be feeding mold today if the area was not dried within 48 hours.",
        ],
      },
    ],
    takeaways: [
      "Trust your nose. Musty smells almost always mean moisture.",
      "Track allergy symptoms room by room.",
      "Keep indoor humidity between 30 and 50 percent.",
      "If you suspect hidden mold, get a professional inspection before opening walls yourself.",
    ],
  },
  {
    slug: "mold-vs-mildew",
    title: "Mold vs Mildew: What Is Actually Growing on My Wall?",
    desc: "Plain-English differences and when to worry.",
    metaTitle: "Mold vs Mildew: How to Tell the Difference | Greensboro NC",
    metaDescription: "Learn the real difference between mold and mildew, how to tell them apart, and when to call a certified mold removal company in Greensboro.",
    image: moldVsMildew,
    imageAlt: "Side-by-side comparison of mildew and mold growth on a bathroom wall in a Greensboro home",
    readMinutes: 5,
    updated: "2026-07-01",
    intro:
      "People use the words mold and mildew like they mean the same thing. They do not. Both are fungi, but they act differently, look different, and need different cleanup.",
    sections: [
      {
        h2: "What mildew looks like",
        body: [
          "Mildew is flat and powdery. It usually starts white or gray, then turns yellow or brown. You often see it on shower tile, window sills, and damp fabric.",
          "Mildew stays on the surface. A stiff brush and a household cleaner will usually take care of it.",
        ],
      },
      {
        h2: "What mold looks like",
        body: [
          "Mold is fuzzy or slimy. It comes in black, green, blue, or dark gray. It grows into the material it lives on, not just on top.",
          "That is why scrubbing mold rarely works. The visible patch is only part of the colony.",
        ],
      },
      {
        h2: "When mildew is fine to handle yourself",
        body: [
          "A small patch of shower mildew is a weekend job. Ventilate the room, wear gloves, and use a bathroom cleaner. Dry the area fully afterward.",
        ],
      },
      {
        h2: "When to call a pro",
        body: [
          "Call a certified mold company if you see a patch larger than about 10 square feet, if the growth is behind drywall or under flooring, or if anyone in the home has asthma or a weak immune system.",
          "Cleaning big mold jobs without containment spreads spores through the rest of the house.",
        ],
      },
    ],
    takeaways: [
      "Mildew is flat and surface-only. Mold is fuzzy and grows deeper.",
      "Small mildew patches are DIY. Large or hidden mold is not.",
      "When in doubt, get an inspection before you scrub.",
    ],
  },
  {
    slug: "crawl-space-humidity",
    title: "Why Your Crawl Space Humidity Matters",
    desc: "How wet crawl space air affects the whole house and what to do about it.",
    metaTitle: "Crawl Space Humidity: Why It Matters in NC Homes",
    metaDescription: "A damp crawl space can push mold, odors, and allergens through your whole home. Learn how to fix humidity in Triad-area crawl spaces.",
    image: crawlSpace,
    imageAlt: "Technician measuring humidity in a Greensboro, NC crawl space with a vapor barrier installed",
    readMinutes: 6,
    updated: "2026-07-01",
    intro:
      "About half the air you breathe upstairs came from the crawl space. That is called the stack effect. If the crawl space is wet, your whole house feels wet, and mold follows.",
    sections: [
      {
        h2: "Why crawl spaces get damp in the Triad",
        body: [
          "North Carolina summers push hot, humid air into cool crawl spaces through foundation vents. When that warm air hits cool surfaces, it condenses. The wood, insulation, and ductwork stay wet for weeks.",
          "Groundwater from poor drainage and slow leaks from plumbing above only make it worse.",
        ],
      },
      {
        h2: "What high crawl space humidity does to the house",
        body: [
          "Mold on floor joists and subfloor. Sagging or ruined insulation. Cupped hardwood floors upstairs. Musty smells in closets. Higher energy bills because your HVAC works harder to dry indoor air.",
        ],
      },
      {
        h2: "How to fix it",
        body: [
          "The proven fix is called encapsulation. A heavy vapor barrier is sealed to the floor and walls, foundation vents are closed, and a dedicated dehumidifier keeps the space between 45 and 55 percent relative humidity.",
          "Before encapsulation, any active mold has to be treated and any standing water or drainage problem has to be fixed. Sealing over a wet crawl space just traps the problem.",
        ],
      },
      {
        h2: "Signs your crawl space needs attention now",
        body: [
          "Standing water after storms, a strong musty smell in the first floor, insulation falling out of the joist bays, or visible mold on the wood are all reasons to schedule an inspection.",
        ],
      },
    ],
    takeaways: [
      "Crawl space air rises into the living space.",
      "Keep crawl space humidity between 45 and 55 percent.",
      "Fix leaks and drainage before you encapsulate.",
    ],
  },
  {
    slug: "after-a-flood",
    title: "The First 48 Hours After a Flood",
    desc: "What to do right away to stop mold from taking hold.",
    metaTitle: "First 48 Hours After a Flood: Stop Mold Before It Starts",
    metaDescription: "A step-by-step guide to the first 48 hours after a flood or leak in your home. Prevent mold growth with fast, safe cleanup.",
    image: afterFlood,
    imageAlt: "Water damage restoration crew drying a flooded living room in Greensboro, NC with air movers",
    readMinutes: 7,
    updated: "2026-07-01",
    intro:
      "Mold can start growing on wet materials within 24 to 48 hours. What you do in the first two days after a flood decides whether you have a cleanup job or a full remediation job.",
    sections: [
      {
        h2: "Hour 1: Stop the water and stay safe",
        body: [
          "Shut off the water at the main valve if the leak is inside the house. If the flooding is from outside, wait until it stops.",
          "Turn off electricity to the affected area at the breaker before you walk into standing water. Do not use household vacuums to suck up water.",
        ],
      },
      {
        h2: "Hours 1 to 6: Document and remove standing water",
        body: [
          "Take photos and short videos of everything before you move anything. Your insurance will ask for them.",
          "Use a wet vacuum, pump, or mop to remove standing water. Move furniture and rugs to a dry area. Lift books, papers, and electronics off the floor.",
        ],
      },
      {
        h2: "Hours 6 to 24: Start drying",
        body: [
          "Open windows only if the outside air is drier than the inside. In humid weather, keep windows closed and run a dehumidifier and fans instead.",
          "Pull back wet carpet from the tack strip. Remove wet pad, since pad rarely dries in time. Cut a small inspection hole in wet drywall to see if the insulation behind it is wet.",
        ],
      },
      {
        h2: "Hours 24 to 48: Call for professional drying if needed",
        body: [
          "Home fans and box dehumidifiers are not strong enough for anything more than a small spill. If more than one room is wet, or if the water reached walls, insulation, or subfloor, call a restoration company.",
          "Commercial air movers and desiccant dehumidifiers can dry a home in days instead of weeks. That is the difference between a cleanup and a mold job.",
        ],
      },
      {
        h2: "What to throw away",
        body: [
          "Wet carpet pad, wet insulation, drywall that soaked up sewage or floodwater, and porous items that stayed wet more than 48 hours usually cannot be saved.",
        ],
      },
    ],
    takeaways: [
      "Mold starts in 24 to 48 hours. Move fast.",
      "Turn off power before entering standing water.",
      "Document everything for insurance.",
      "Call a pro if drying takes more than a day.",
    ],
  },
  {
    slug: "insurance-mold-claim",
    title: "Filing a Homeowners Insurance Claim for Mold",
    desc: "What most policies cover, and what they usually do not.",
    metaTitle: "Homeowners Insurance and Mold Claims: What Is Covered",
    metaDescription: "Understand how homeowners insurance handles mold claims, what most policies cover, and how to document your claim in North Carolina.",
    image: insuranceClaim,
    imageAlt: "Homeowner reviewing a mold insurance claim at a kitchen table in Greensboro, NC",
    readMinutes: 6,
    updated: "2026-07-01",
    intro:
      "Mold claims are one of the most confusing parts of home insurance. Whether you get paid usually depends on how the mold started, not just that it is there.",
    sections: [
      {
        h2: "What is usually covered",
        body: [
          "Mold caused by a sudden, accidental event is often covered. Common examples are a burst pipe, a washing machine hose that fails, or water damage from putting out a fire.",
          "In those cases, insurance may pay for water cleanup, mold remediation, and repairs to the damaged area.",
        ],
      },
      {
        h2: "What is usually not covered",
        body: [
          "Mold from slow leaks, poor maintenance, high humidity, or flooding from outside is usually not covered under a standard policy. Flood damage needs a separate flood policy through the National Flood Insurance Program.",
          "Many North Carolina policies also cap mold coverage at a set dollar amount, often between 5,000 and 10,000 dollars. Check the mold endorsement in your policy.",
        ],
      },
      {
        h2: "How to file a strong claim",
        body: [
          "Report the loss quickly. Most policies require you to notify the insurer within a short window.",
          "Document the damage with dated photos and videos before any cleanup begins.",
          "Save receipts for any emergency work, temporary housing, or replacement items.",
          "Get a written inspection and scope of work from a certified mold company. Insurers take third-party documentation more seriously than homeowner descriptions.",
        ],
      },
      {
        h2: "When the claim is denied",
        body: [
          "If your claim is denied, ask for the denial in writing with the specific policy language. You can request a re-inspection, hire a public adjuster, or file a complaint with the North Carolina Department of Insurance.",
        ],
      },
    ],
    takeaways: [
      "Sudden water damage is often covered. Slow leaks usually are not.",
      "Flood damage needs a separate flood policy.",
      "Document everything before cleanup starts.",
      "A written report from a certified mold company strengthens your claim.",
    ],
  },
  {
    slug: "black-mold-facts",
    title: "Black Mold: The Facts vs the Hype",
    desc: "What we actually know about Stachybotrys and health effects.",
    metaTitle: "Black Mold Facts vs Hype: What to Know About Stachybotrys",
    metaDescription: "A straight-talk guide to black mold (Stachybotrys), the real health risks, and what actually needs to happen for safe removal.",
    image: blackMold,
    imageAlt: "Lab technician examining a black mold sample from a Greensboro, NC home under a microscope",
    readMinutes: 6,
    updated: "2026-07-01",
    intro:
      "Black mold gets more attention than any other kind. Some of that attention is fair. A lot of it is not. Here is what the science actually says, and what it means for your home.",
    sections: [
      {
        h2: "What black mold really is",
        body: [
          "Black mold usually refers to Stachybotrys chartarum. It grows on materials that stay wet for a long time, especially drywall, cardboard, and wood. It is dark green to black and often slimy.",
          "Not every dark mold is Stachybotrys. Other common indoor molds like Cladosporium and Aspergillus can also look dark and need lab testing to identify.",
        ],
      },
      {
        h2: "Real health effects",
        body: [
          "Stachybotrys can trigger allergy symptoms, irritate airways, and worsen asthma. People with weak immune systems, infants, and older adults tend to react most.",
          "The scary claims about black mold causing serious neurological illness or infant deaths have not been supported by strong research. That does not mean it is safe to ignore. It means the honest answer is more limited than the headlines.",
        ],
      },
      {
        h2: "Why removal has to be done carefully",
        body: [
          "The reason black mold matters is not just the mold itself. It is the spores and mycotoxins it releases when disturbed. Ripping out moldy drywall without containment sends those particles through the rest of the house.",
          "A proper job uses plastic containment, negative air pressure with HEPA filtration, personal protective equipment, and careful removal following IICRC S520 standards.",
        ],
      },
      {
        h2: "How to know if what you have is black mold",
        body: [
          "Color alone will not tell you. A certified inspector can take a tape lift or air sample and send it to an accredited lab. You get a written report naming the species and estimated concentration.",
          "That report also protects you if you need to file an insurance claim or negotiate with a landlord.",
        ],
      },
    ],
    takeaways: [
      "Not every dark mold is Stachybotrys.",
      "Real risks are real, but usually not the extreme ones you read online.",
      "Removal without containment spreads the problem.",
      "Lab testing gives you a real answer, not a guess.",
    ],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find(p => p.slug === slug);
