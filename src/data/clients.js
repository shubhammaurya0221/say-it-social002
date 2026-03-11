// Client data for SMM section — categorized by industry

export const clients = [
  {
    id: 1,
    brand: "CricStudio",
    category: "Cricket Accessories",
    description: "Sports brand building and cricket community engagement through creative content.",
    instagramHandle: "cricstudioinc",
    metric: "Sports Community",
  },
  {
    id: 2,
    brand: "Shiva Optics",
    category: "Optical Retail",
    description: "Premium eyewear retail brand presence with clean and modern social strategy.",
    instagramHandle: "shivaoptics",
    metric: "Retail Growth",
  },
  {
    id: 3,
    brand: "Shiva Enterprise",
    category: "Optical Manufacturer",
    description: "Manufacturer branding for optical products with B2B-focused digital presence.",
    instagramHandle: "shivaenterprise.in",
    metric: "B2B Expansion",
  },
  {
    id: 4,
    brand: "TQC - The Quick Craft",
    category: "AI/VR Solution",
    description: "AI-powered design and virtual reality solutions for modern digital experiences.",
    instagramHandle: "tqc.official",
    metric: "Innovation Driven",
  },
  {
    id: 5,
    brand: "Shivaangi Hostel",
    category: "Student Accommodation",
    description: "Student housing brand marketing focused on trust and campus community.",
    instagramHandle: "shivganga_hostel",
    metric: "Student Trust",
  },
  {
    id: 6,
    brand: "The Function Junction",
    category: "Event Management",
    description: "Event management promotion through vibrant visual storytelling.",
    instagramHandle: "thefunctionjunction",
    metric: "Event Reach",
  },
  {
    id: 7,
    brand: "Hilite Optical",
    category: "Optical Retail",
    description: "Modern eyewear retail marketing strategy focused on premium style.",
    instagramHandle: "hiliteoptical",
    metric: "Retail Visibility",
  },
  {
    id: 8,
    brand: "Shree Uma Corporation",
    category: "Solar Panel Cleaning Services",
    description: "Sustainability-focused service brand promoting solar maintenance solutions.",
    instagramHandle: "shreeumacorp",
    metric: "Eco Service",
  },
  {
    id: 9,
    brand: "Esta Verse",
    category: "Real Estate Agency",
    description: "Real estate marketing with property showcases and trust-building campaigns.",
    instagramHandle: "eshavastu",
    metric: "Property Leads",
  },
  {
    id: 10,
    brand: "Sim Boutique",
    category: "Clothing Brand",
    description: "Fashion boutique social media presence showcasing curated collections.",
    instagramHandle: "simmboutique",
    metric: "Fashion Reach",
  },
  {
    id: 11,
    brand: "Kake Di Hatti",
    category: "Restaurant",
    description: "Restaurant marketing through food storytelling and local engagement.",
    instagramHandle: "kukedihatti",
    metric: "Food Community",
  },
  {
    id: 12,
    brand: "Dhronagiri Herbal",
    category: "Herbal Products",
    description: "Natural herbal brand highlighting organic wellness products.",
    instagramHandle: "dhanyamherbal",
    metric: "Organic Growth",
  },
  {
    id: 13,
    brand: "Makeovers By Namrata Solani",
    category: "Makeup Artist",
    description: "Beauty and makeup portfolio showcasing bridal and professional looks.",
    instagramHandle: "navnishasolanki_makeovers",
    metric: "Beauty Portfolio",
  },
  {
    id: 14,
    brand: "Venue 82",
    category: "Real Estate",
    description: "Premium real estate brand positioning through modern property campaigns.",
    instagramHandle: "verne82",
    metric: "Luxury Properties",
  },
  {
    id: 15,
    brand: "Kaviz Couture",
    category: "Clothing Brand",
    description: "High-end couture fashion marketing for designer collections.",
    instagramHandle: "kaii2couture",
    metric: "Designer Fashion",
  },
  {
    id: 16,
    brand: "Khau Gali",
    category: "Food Joint",
    description: "Food brand storytelling with modern restaurant visuals and promotions.",
    instagramHandle: "khayali_food",
    metric: "Food Experience",
  },
  {
    id: 17,
    brand: "Kalon Ethnic",
    category: "Clothing Brand",
    description: "Traditional ethnic fashion promoted with contemporary branding.",
    instagramHandle: "highethnic",
    metric: "Ethnic Fashion",
  },
  {
    id: 18,
    brand: "Bright Start Foundation Center - Thaltej",
    category: "Preschool",
    description: "Early childhood education and therapy center building trust with parents.",
    instagramHandle: "brightschoolfoundation",
    metric: "Education Trust",
  },
];

// Unique categories derived from clients
export const clientCategories = ["All", ...new Set(clients.map(c => c.category))];

// Industry color map for category pills
export const categoryColors = {
  'Cricket Accessories': {
    bg: 'bg-emerald-500/15',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30'
  },

  'Optical Retail': {
    bg: 'bg-sky-500/15',
    text: 'text-sky-400',
    border: 'border-sky-500/30'
  },

  'Optical Manufacturer': {
    bg: 'bg-cyan-500/15',
    text: 'text-cyan-400',
    border: 'border-cyan-500/30'
  },

  'AI/VR Solution': {
    bg: 'bg-violet-500/15',
    text: 'text-violet-400',
    border: 'border-violet-500/30'
  },

  'Student Accommodation': {
    bg: 'bg-indigo-500/15',
    text: 'text-indigo-400',
    border: 'border-indigo-500/30'
  },

  'Event Management': {
    bg: 'bg-fuchsia-500/15',
    text: 'text-fuchsia-400',
    border: 'border-fuchsia-500/30'
  },

  'Solar Panel Cleaning Services': {
    bg: 'bg-yellow-500/15',
    text: 'text-yellow-400',
    border: 'border-yellow-500/30'
  },

  'Real Estate Agency': {
    bg: 'bg-orange-500/15',
    text: 'text-orange-400',
    border: 'border-orange-500/30'
  },

  'Real Estate': {
    bg: 'bg-amber-500/15',
    text: 'text-amber-400',
    border: 'border-amber-500/30'
  },

  'Clothing Brand': {
    bg: 'bg-rose-500/15',
    text: 'text-rose-400',
    border: 'border-rose-500/30'
  },

  'Restaurant': {
    bg: 'bg-red-500/15',
    text: 'text-red-400',
    border: 'border-red-500/30'
  },

  'Food Joint': {
    bg: 'bg-pink-500/15',
    text: 'text-pink-400',
    border: 'border-pink-500/30'
  },

  'Herbal Products': {
    bg: 'bg-green-500/15',
    text: 'text-green-400',
    border: 'border-green-500/30'
  },

  'Makeup Artist': {
    bg: 'bg-purple-500/15',
    text: 'text-purple-400',
    border: 'border-purple-500/30'
  },

  'Preschool': {
    bg: 'bg-blue-500/15',
    text: 'text-blue-400',
    border: 'border-blue-500/30'
  }
};

// // Industry color map for category pills
// export const categoryColors = {
//   'Cricket accessories': {
//     bg: 'bg-emerald-500/15',
//     text: 'text-emerald-400',
//     border: 'border-emerald-500/30'
//   },

//   'Optical retail': {
//     bg: 'bg-sky-500/15',
//     text: 'text-sky-400',
//     border: 'border-sky-500/30'
//   },

//   'Optical manufacturer': {
//     bg: 'bg-cyan-500/15',
//     text: 'text-cyan-400',
//     border: 'border-cyan-500/30'
//   },

//   'AI/VR solution': {
//     bg: 'bg-violet-500/15',
//     text: 'text-violet-400',
//     border: 'border-violet-500/30'
//   },

//   'Student accommodation': {
//     bg: 'bg-indigo-500/15',
//     text: 'text-indigo-400',
//     border: 'border-indigo-500/30'
//   },

//   'Event management': {
//     bg: 'bg-fuchsia-500/15',
//     text: 'text-fuchsia-400',
//     border: 'border-fuchsia-500/30'
//   },

//   'Solar panel cleaning services': {
//     bg: 'bg-yellow-500/15',
//     text: 'text-yellow-400',
//     border: 'border-yellow-500/30'
//   },

//   'Real estate agency': {
//     bg: 'bg-orange-500/15',
//     text: 'text-orange-400',
//     border: 'border-orange-500/30'
//   },

//   'Real estate': {
//     bg: 'bg-amber-500/15',
//     text: 'text-amber-400',
//     border: 'border-amber-500/30'
//   },

//   'Clothing brand': {
//     bg: 'bg-rose-500/15',
//     text: 'text-rose-400',
//     border: 'border-rose-500/30'
//   },

//   'Restaurant': {
//     bg: 'bg-red-500/15',
//     text: 'text-red-400',
//     border: 'border-red-500/30'
//   },

//   'Food joint': {
//     bg: 'bg-pink-500/15',
//     text: 'text-pink-400',
//     border: 'border-pink-500/30'
//   },

//   'Herbal products': {
//     bg: 'bg-green-500/15',
//     text: 'text-green-400',
//     border: 'border-green-500/30'
//   },

//   'Makeup artist': {
//     bg: 'bg-purple-500/15',
//     text: 'text-purple-400',
//     border: 'border-purple-500/30'
//   },

//   'Preschool': {
//     bg: 'bg-blue-500/15',
//     text: 'text-blue-400',
//     border: 'border-blue-500/30'
//   }
// };
