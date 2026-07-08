/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Service, Review, Stat, FAQ } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'moto-max-4t',
    name: 'SR Lubricant Motomax 4T',
    category: 'Bike Engine Oil',
    viscosity: '10W-30',
    apiGrade: 'API SN / JASO MA2',
    sizes: ['900 ml', '1 Liter', '50 Liter', '210 Liter Drum'],
    benefits: [
      'Superior wet-clutch engagement & smooth shifting',
      'High thermal stability under city stop-and-go driving',
      'Advanced wear protection for high-RPM engines'
    ],
    description: 'High-performance semi-synthetic 4-stroke motorcycle engine oil engineered to provide smooth clutch operation, active engine cleanliness, and maximum power release under demanding conditions.',
    isBestSeller: true,
    colorTheme: 'red'
  },
  {
    id: 'power-rider-4t',
    name: 'SR Lubricant PowerRider Pro 4T',
    category: 'Bike Engine Oil',
    viscosity: '10W-40',
    apiGrade: 'API SN Fully Synthetic / JASO MA2',
    sizes: ['1 Liter', '20 Liter', '50 Liter', '210 Liter Drum'],
    benefits: [
      '100% Fully Synthetic formulation for race-grade protection',
      'Excellent shear stability preventing viscosity breakdown',
      'Reduces engine noise and minimizes vibrations'
    ],
    description: 'Ultra-premium fully synthetic engine oil for modern high-performance superbikes and sports bikes. Formulated with liquid-glass protective molecules that resist high temperature oxidation.',
    isBestSeller: true,
    colorTheme: 'gold'
  },
  {
    id: 'synthedge-pro',
    name: 'SR Lubricant SynthEdge Pro',
    category: 'Car Engine Oil',
    viscosity: '5W-30',
    apiGrade: 'API SP / ILSAC GF-6A',
    sizes: ['1 Liter', '3 Liter', '3.5 Liter', '5 Liter', '20 Liter', '210 Liter Drum'],
    benefits: [
      'Outstanding LSPI (Low-Speed Pre-Ignition) protection',
      'Maximizes fuel economy & optimizes engine performance',
      'Outstanding cold-start flow and deposit control'
    ],
    description: 'Next-generation fully synthetic passenger car motor oil designed for turbocharged, direct-injection gasoline engines. Meets the ultra-stringent API SP specification for unparalleled modern protection.',
    isBestSeller: true,
    colorTheme: 'gold'
  },
  {
    id: 'multishield-car',
    name: 'SR Lubricant MultiShield Premium',
    category: 'Car Engine Oil',
    viscosity: '15W-40',
    apiGrade: 'API SN / CF',
    sizes: ['1 Liter', '3 Liter', '3.5 Liter', '5 Liter', '20 Liter', '210 Liter Drum'],
    benefits: [
      'Robust film strength at elevated engine temperatures',
      'Advanced soot and sludge dispersant capabilities',
      'Excellent corrosion and rust inhibition for older engines'
    ],
    description: 'Premium multi-grade engine oil designed for gasoline and light diesel passenger cars. It provides continuous defense against engine wear, rust, and thermal breakdown.',
    colorTheme: 'silver'
  },
  {
    id: 'turboforce-diesel',
    name: 'SR Lubricant TurboForce Heavy Duty',
    category: 'Diesel Engine Oil',
    viscosity: '15W-40',
    apiGrade: 'API CK-4 / CJ-4 / SN',
    sizes: ['5 Liter', '7.5 Liter', '10 Liter', '20 Liter', '26 Liter', '50 Liter', '210 Liter Drum'],
    benefits: [
      'Extended drain intervals reducing fleet maintenance cost',
      'Unsurpassed soot control and viscosity regulation',
      'Outstanding wear protection in high-torque diesel applications'
    ],
    description: 'Heavy-duty diesel engine oil designed to protect emission control systems like DPF and SCR. Engineered for commercial vehicle fleets, trucks, construction equipment, and tractors.',
    isBestSeller: true,
    colorTheme: 'red'
  },
  {
    id: 'gearmax-ep90',
    name: 'SR Lubricant GearMax EP90',
    category: 'Gear Oil',
    viscosity: '80W-90',
    apiGrade: 'API GL-5 / GL-4',
    sizes: ['1 Liter', '5 Liter', '10 Liter', '20 Liter', '210 Liter Drum'],
    benefits: [
      'High load-carrying capacity with extreme-pressure additives',
      'Smooth gear engagement and noise dampening',
      'Exceptional wear shield for hypoid and spiral bevel gears'
    ],
    description: 'Extreme-pressure automotive gear lubricant suitable for manual transmissions, differentials, and final drives of cars, trucks, and agricultural equipment.',
    colorTheme: 'silver'
  },
  {
    id: 'hydroglide-aw68',
    name: 'SR Lubricant HydroGlide AW 68',
    category: 'Hydraulic Oil',
    viscosity: 'ISO VG 68',
    apiGrade: 'DIN 51524 Part 2 (HLP)',
    sizes: ['20 Liter', '26 Liter', '50 Liter', '210 Liter Drum'],
    benefits: [
      'Excellent demulsibility (water separation) properties',
      'Outstanding filterability preventing valve blockages',
      'Thermal stability under extreme pressure cycles'
    ],
    description: 'Premium anti-wear hydraulic fluid designed for high-pressure industrial hydraulic systems, pumps, CNC machinery, and heavy industrial earthmoving fleets.',
    colorTheme: 'silver'
  },
  {
    id: 'securestop-dot4',
    name: 'SR Lubricant SecureStop DOT 4',
    category: 'Brake Fluid',
    viscosity: 'DOT 4 / FMVSS 116',
    apiGrade: 'SAE J1704 / DOT 4',
    sizes: ['250 ml', '500 ml', '1 Liter', '20 Liter'],
    benefits: [
      'High wet boiling point preventing vapor lock failures',
      'Non-corrosive to copper alloy pipes and rubber seals',
      'Consistent hydraulic braking pressure under extreme heat'
    ],
    description: 'High-performance synthetic brake fluid engineered for modern hydraulic disk braking systems in cars, commercial vehicles, and high-performance motorbikes.',
    colorTheme: 'red'
  },
  {
    id: 'koolgard-coolant',
    name: 'SR Lubricant KoolGard Long Life',
    category: 'Coolant',
    viscosity: 'OAT (Organic Acid Tech)',
    apiGrade: 'JIS K2234 / ASTM D3306',
    sizes: ['1 Liter', '3 Liter', '5 Liter', '20 Liter', '210 Liter Drum'],
    benefits: [
      'Up to 5 years / 250,000km heat rejection lifespan',
      'Exceptional aluminum cylinder head corrosion protection',
      'Prevents scaling and radiator blockages'
    ],
    description: 'Advanced, ethylene glycol-based engine coolant and anti-freeze utilizing long-lasting Organic Acid Technology. Pre-diluted 50/50 and ready for immediate top-up.',
    colorTheme: 'gold'
  },
  {
    id: 'lithoshield-ep3',
    name: 'SR Lubricant LithoShield EP3',
    category: 'Grease',
    viscosity: 'NLGI Grade 3',
    apiGrade: 'Lithium Complex EP',
    sizes: ['1 kg', '3 kg', '18 kg', '180 kg'],
    benefits: [
      'Extreme drop point (>260°C) suited for wheel bearings',
      'Superior water washout resistance in heavy rains',
      'Excellent mechanical stability preventing softening'
    ],
    description: 'High-temperature, heavy-duty lithium complex grease infused with extreme pressure (EP) additives. Perfect for automotive wheel bearings, chassis pins, and industrial bushings.',
    colorTheme: 'gold'
  },
  {
    id: 'fluidshift-atf',
    name: 'SR Lubricant FluidShift ATF VI',
    category: 'Transmission Oil',
    viscosity: 'Dexron VI',
    apiGrade: 'GM Dexron VI / Mercon LV',
    sizes: ['1 Liter', '5 Liter', '20 Liter', '210 Liter Drum'],
    benefits: [
      'Ultra-low viscosity for modern multi-speed automatic boxes',
      'Extremely high friction stability preventing gear slippage',
      'Extended oxidation life under severe highway towing'
    ],
    description: 'State-of-the-art synthetic automatic transmission fluid offering exceptional wear protection and silky smooth shifting for high-performance automatic gearboxes.',
    colorTheme: 'red'
  },
  {
    id: 'indusys-gear220',
    name: 'SR Lubricant InduSys Gear 220',
    category: 'Industrial Oil',
    viscosity: 'ISO VG 220',
    apiGrade: 'AGMA 9005-E02 / DIN 51517-3',
    sizes: ['20 Liter', '50 Liter', '210 Liter Drum'],
    benefits: [
      'Micro-pitting resistance extending industrial gearbox lifespans',
      'Exceptional gear wear defense under shock load hazards',
      'Rapid air release preventing cavitation in heavy gear pumps'
    ],
    description: 'High-performance sulfur-phosphorus industrial gear oil designed to protect heavy-duty industrial spur, helical, and worm gearboxes in manufacturing plants.',
    colorTheme: 'gold'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'retail-supply',
    title: 'Retail Lubricant Supply',
    description: 'We supply high-grade engine oils, coolants, and greases directly to vehicle owners, mechanics, and local retail outlets, ensuring peak performance for daily drivers.',
    iconName: 'ShoppingBag',
    benefits: ['100% Authentic Products', 'Wide range of container sizes (900ml - 5L)', 'On-the-spot technical consultation']
  },
  {
    id: 'wholesale-supply',
    title: 'Wholesale & Dealership Network',
    description: 'We run an expansive distributor support network, supplying authorized auto spare parts stores, dealers, and garages with high margins and direct shipping terms.',
    iconName: 'Building2',
    benefits: ['Highly competitive wholesale pricing', 'Marketing and signage kit support', 'Priority dispatch and product training']
  },
  {
    id: 'bulk-industrial',
    title: 'Bulk & Industrial Lubricants',
    description: 'We deliver massive 210-liter barrels and bulk tanker supplies of hydraulic oils, turbine oils, and extreme-pressure gear oils for manufacturing and construction sites.',
    iconName: 'Container',
    benefits: ['Certified ISO standards', 'Batch testing certificates', 'Bulk volume price breaks']
  },
  {
    id: 'fleet-lubrication',
    title: 'Fleet Lubrication Services',
    description: 'Comprehensive oil audit and customized supply programs for logistics, taxi, bus, and construction fleets to lower total operating costs and extend engine life.',
    iconName: 'Truck',
    benefits: ['Oil analysis guidance', 'Fuel consumption optimization', 'Preventative maintenance diagnostics']
  },
  {
    id: 'garage-mechanic',
    title: 'Garage & Workshop Partnership',
    description: 'Partner with Shobha SR Lubricant to become an authorized oil change service center. Win customer trust with premium-grade branding and consistent product quality.',
    iconName: 'Wrench',
    benefits: ['Branded mechanics overalls & flags', 'Incentive-based loyalty rewards', 'Exclusive workshop supply rates']
  },
  {
    id: 'smart-advisor',
    title: 'Smart Oil Advisor & Matching',
    description: 'Our proprietary digital interactive recommender system matches your vehicle model, engine condition, mileage, and driving style with the exact API and viscosity grade required.',
    iconName: 'Cpu',
    benefits: ['No more guesswork', 'Protects warranty compliance', 'Improves fuel economy instantly']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Vikram Singh',
    role: 'Owner, Highway Express Logistics',
    rating: 5,
    feedback: 'Switching our heavy transport fleet of 45 trucks to SR TurboForce Heavy Duty 15W-40 has improved our oil drain intervals from 25,000km to 35,000km! The wear metal count came down significantly. Highly recommended!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'rev-2',
    name: 'Anjali Sharma',
    role: 'Automotive Mechanic, ProRide Garage',
    rating: 5,
    feedback: 'Shobha SR Lubricant has been our sole supplier for the past 4 years. Their Motomax 4T (900ml) is a huge hit among bike owners - they notice immediate drop in engine heat, smoother gear changes, and better mileage.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'rev-3',
    name: 'David Miller',
    role: 'Car Enthusiast & Tuner',
    rating: 5,
    feedback: 'The SynthEdge Pro 5W-30 is hands down the best oil for modern GDI turbocharged engines. Low-Speed Pre-Ignition is a massive issue on tuner cars, but this API SP oil runs flawlessly. Engine sounds quiet and spins freely.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'rev-4',
    name: 'Rajesh Patel',
    role: 'Plant Manager, Apex Polymers',
    rating: 5,
    feedback: 'Our injection molding machines operate 24/7 under massive hydraulic pressures. We have been using HydroGlide AW 68 from Shobha SR. Valve blockage is down to zero, and the oil maintains clean golden transparency even after 4000 hours.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop'
  }
];

export const STATS: Stat[] = [
  {
    id: 'stat-customers',
    value: '5000+',
    label: 'Happy Customers',
    description: 'Vehicle owners, logistics fleet operators, and industrial units trusting us daily.'
  },
  {
    id: 'stat-products',
    value: '250+',
    label: 'Products',
    description: 'Comprehensive lubricants range with dynamic viscosity options and pack sizes.'
  },
  {
    id: 'stat-dealers',
    value: '100+',
    label: 'Dealers Network',
    description: 'Widespread localized availability through authorized retail and garage dealers.'
  },
  {
    id: 'stat-experience',
    value: '15+ Years',
    label: 'Years Experience',
    description: 'Providing elite, friction-defeating formulation expertise to the automotive market.'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Which engine oil is suitable for my bike?',
    answer: 'The ideal bike oil depends on your bike\'s engine displacement and manufacturer guidelines. For standard commuter bikes (100cc - 150cc), SR Lubricant Motomax 4T 10W-30 is perfect. For performance motorbikes (150cc - 500cc+), we highly recommend Shobha SR PowerRider Pro 4T 10W-40 Fully Synthetic, which complies with high shear stability (JASO MA2).'
  },
  {
    id: 'faq-2',
    question: 'How often should passenger car engine oil be changed?',
    answer: 'For premium mineral or semi-synthetic oils, we recommend changing every 5,000 to 7,500 kilometers or every 6 months. For high-performance fully synthetic oils like our SR Lubricant SynthEdge Pro 5W-30 (API SP), you can comfortably extend your interval up to 10,000 to 12,000 kilometers, or once a year, depending on your driving environment.'
  },
  {
    id: 'faq-3',
    question: 'Do you supply wholesale or accept dealership inquiries?',
    answer: 'Yes! We actively support bulk, wholesale, and authorized retail dealership inquiries. Shobha SR Lubricant offers lucrative margins, localized territory protection, branding support (such as garage signage boards, worker uniforms, digital listings), and free fast delivery for volume orders. Please submit the form on our Contact Page or message us on WhatsApp.'
  },
  {
    id: 'faq-4',
    question: 'What bottle sizes and containers are available?',
    answer: 'To cater to everyone from motorcycle riders to massive cement plant operators, our premium lubricants are packed in: 900 ml, 1 Liter, 3 Liter, 3.5 Liter, 5 Liter, 7.5 Liter, 10 Liter, 20 Liter, 26 Liter, 50 Liter, and massive 210 Liter Drums.'
  },
  {
    id: 'faq-5',
    question: 'What is the benefit of API SP engine oil versus older grades?',
    answer: 'API SP is the absolute latest, most advanced petrol engine oil standard. It is engineered specifically to prevent Low-Speed Pre-Ignition (LSPI) in modern turbocharged gasoline direct injection (TGDI) engines, protect timing chains from stretching, and provide superior fuel efficiency.'
  }
];

export const VEHICLE_BRANDS = {
  bike: ['Honda', 'Yamaha', 'Suzuki', 'Kawasaki', 'Royal Enfield', 'Hero', 'TVS', 'Bajaj', 'KTM'],
  car: ['Toyota', 'Hyundai', 'Suzuki/Maruti', 'Tata Motors', 'Mahindra', 'Honda Cars', 'Kia', 'Ford', 'BMW', 'Mercedes-Benz'],
  truck: ['Tata Trucks', 'Ashok Leyland', 'BharatBenz', 'Mahindra Trucks', 'Eicher', 'Volvo Trucks', 'Scania'],
  industrial: ['CNC Machines', 'Hydraulic Systems', 'Plastics Injection Molding', 'Textile Looms', 'Heavy Compressors', 'Heavy Gearboxes']
};

export const RECOMMENDER_DATABASE = {
  bike: [
    { brand: 'Honda', model: 'Activa / Shine / Unicorn', product: 'moto-max-4t', match: 100, explanation: 'Perfect fit. Honda commuter bikes mandate a low friction 10W-30 viscosity (JASO MB or MA2) for maximum thermal cooling and 3.5% increased fuel efficiency.' },
    { brand: 'Royal Enfield', model: 'Classic 350 / Bullet / Meteor', product: 'power-rider-4t', match: 98, explanation: 'The massive heavy torque air-cooled engine of Royal Enfield runs extremely hot. The 10W-40 viscosity with fully synthetic liquid glass protection dampens metallic sound and resists oxidation.' },
    { brand: 'KTM', model: 'Duke 200 / 250 / 390', product: 'power-rider-4t', match: 100, explanation: 'High-RPM liquid-cooled KTM engines need race-grade thermal shear protection. PowerRider 4T 10W-40 Fully Synthetic provides perfect wet clutch performance and zero gear lag.' },
    { brand: 'Bajaj', model: 'Pulsar / Platina / Avenger', product: 'moto-max-4t', match: 95, explanation: 'DTS-i engines perform superbly under Motomax 4T 10W-30. Perfect start-up flow and great wear shield for clutch plates.' }
  ],
  car: [
    { brand: 'Toyota', model: 'Fortuner / Innova / Urban Cruiser', product: 'synthedge-pro', match: 98, explanation: 'Modern high-tech Toyota direct injection petrol and hybrid powertrains mandate the API SP 5W-30 spec for excellent timing chain defense and immediate fuel economy.' },
    { brand: 'Hyundai', model: 'i20 / Creta / Verna / Venue', product: 'synthedge-pro', match: 100, explanation: 'Perfect match. Hyundai Turbo GDI petrol engines require API SP fuel conservation spec to completely avoid premature LSPI combustion knock hazards.' },
    { brand: 'Tata Motors', model: 'Nexon / Altroz / Safari / Tiago', product: 'synthedge-pro', match: 97, explanation: 'SynthEdge Pro 5W-30 Fully Synthetic is ideal for Tata Revotron and Revotorq light passenger setups to keep turbochargers running deposit-free.' },
    { brand: 'Suzuki/Maruti', model: 'Swift / Baleno / Brezza / Dzire', product: 'multishield-car', match: 92, explanation: 'For standard K-Series engines with high mileage, MultiShield 15W-40 provides a reliable thermal cushion and superior sludge-cleansing action.' }
  ],
  truck: [
    { brand: 'Tata Trucks', model: 'Signa / Prima / Ultra Heavy Duty', product: 'turboforce-diesel', match: 100, explanation: 'Designed specifically for Tata high-capacity multi-axle heavy-haulers. This API CK-4 oil resists severe soot thickening and extends service intervals up to 40,000 km.' },
    { brand: 'Ashok Leyland', model: 'U-Truck / Captain / Partner', product: 'turboforce-diesel', match: 100, explanation: 'Outstanding fit. Provides continuous valve-train defense and resists shear thinning in multi-terrain long-distance hauling.' }
  ],
  industrial: [
    { brand: 'CNC Machines', model: 'High Speed Machining Spindles', product: 'hydroglide-aw68', match: 100, explanation: 'Anti-wear ISO VG 68 fluid guarantees stable hydraulic pressure controls, prevents metal-to-metal spool wear, and offers immediate rapid foam collapse.' },
    { brand: 'Heavy Gearboxes', model: 'Industrial Heavy Duty Spur Gear', product: 'indusys-gear220', match: 100, explanation: 'Extreme pressure ISO VG 220 gear oil offers ultimate micro-pitting resistance under immense shock loads, protecting gear teeth from pitting.' }
  ]
};
