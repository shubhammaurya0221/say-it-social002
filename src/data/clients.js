// // Client data for SMM section — categorized by industry
// // TODO: Update with Darshil's final categorized list and metrics
// export const clients = [
//     {
//         id: 1,
//         brand: 'CricStudio',
//         category: 'Cricket accessories',
//         description: 'Cricket content & brand building — Building a strong community around sports content',
//         instagramHandle: 'cricstudioinc',
//         metric: 'Community Built',
//     },
//     {
//         id: 2,
//         brand: 'Shiva Optics',
//         category: 'Optical retail',
//         description: 'Transforming premium eyewear brand presence with sophisticated, minimal design',
//         instagramHandle: 'shivaoptics',
//         metric: 'Brand Elevated',
//     },
//     {
//         id: 3,
//         brand: 'Shiva Enterprises',
//         category: 'Optical manufacturer',
//         description: 'Modern eyewear e-commerce social strategy — Thoughtfully selected products',
//         instagramHandle: 'shivaenterprise.in',
//         metric: 'Modern Strategy',
//     },
//     {
//         id: 4,
//         brand: 'TQC',
//         category: 'AI/VR solution',
//         description: 'AI-powered design & VR solutions — Leveraging AI and human creativity',
//         instagramHandle: 'tqc.official',
//         metric: 'Innovation Driven',
//     },
//     {
//         id: 5,
//         brand: 'Shiv Ganga Hostel',
//         category: 'Student accommodation',
//         description: 'Natural skincare & haircare brand launch — 100% herbal products',
//         instagramHandle: 'dronagiri_herbal_india',
//         metric: '100% Herbal',
//     },
//     {
//         id: 6,
//         brand: 'The Function Junction',
//         category: 'Event management',
//         description: 'Student accommodation brand building — Establishing trust within education community',
//         instagramHandle: 'shivaangi_hostel',
//         metric: 'Trust Established',
//     },
//     {
//         id: 7,
//         brand: 'Hilite Optical',
//         category: 'Optical retail',
//         description: 'Traditional fashion brand digital presence — Bridging traditional with modern',
//         instagramHandle: 'kalon.ethnic',
//         metric: 'Traditional Meets Modern',
//     },
//     {
//         id: 8,
//         brand: 'Shree Uma Corporation',
//         category: 'Solar panel cleaning services',
//         description: 'Education services marketing — Building authority and trust in education sector',
//         instagramHandle: 'vortex_educational_consultants',
//         metric: 'Authority Built',
//     },
// ];

// // Unique categories derived from clients
// export const clientCategories = ['All', ...new Set(clients.map(c => c.category))];

// // Industry color map for category pills
// export const categoryColors = {
//     'Cricket accessories': { bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30' },
//     'Optical retail': { bg: 'bg-sky-500/15', text: 'text-sky-400', border: 'border-sky-500/30' },
//     'AI/VR solution': { bg: 'bg-violet-500/15', text: 'text-violet-400', border: 'border-violet-500/30' },
//     'Beauty & Wellness': { bg: 'bg-pink-500/15', text: 'text-pink-400', border: 'border-pink-500/30' },
//     'Education & Services': { bg: 'bg-amber-500/15', text: 'text-amber-400', border: 'border-amber-500/30' },
//     'Fashion & Lifestyle': { bg: 'bg-rose-500/15', text: 'text-rose-400', border: 'border-rose-500/30' },
// };


// Client data for SMM section — categorized by industry

export const clients = [
  {
    id: 1,
    brand: "CricStudio",
    category: "Cricket accessories",
    description: "Sports brand building and cricket community engagement through creative content.",
    instagramHandle: "cricstudioinc",
    metric: "Sports Community",
  },
  {
    id: 2,
    brand: "Shiva Optics",
    category: "Optical retail",
    description: "Premium eyewear retail brand presence with clean and modern social strategy.",
    instagramHandle: "shivaoptics",
    metric: "Retail Growth",
  },
  {
    id: 3,
    brand: "Shiva Enterprises",
    category: "Optical manufacturer",
    description: "Manufacturer branding for optical products with B2B-focused digital presence.",
    instagramHandle: "shivaenterprise.in",
    metric: "B2B Expansion",
  },
  {
    id: 4,
    brand: "TQC",
    category: "AI/VR solution",
    description: "AI-powered design and virtual reality solutions for modern digital experiences.",
    instagramHandle: "tqc.official",
    metric: "Innovation Driven",
  },
  {
    id: 5,
    brand: "Shiv Ganga Hostel",
    category: "Student accommodation",
    description: "Student housing brand marketing focused on trust and campus community.",
    instagramHandle: "shivganga_hostel",
    metric: "Student Trust",
  },
  {
    id: 6,
    brand: "The Function Junction",
    category: "Event management",
    description: "Event management promotion through vibrant visual storytelling.",
    instagramHandle: "thefunctionjunction",
    metric: "Event Reach",
  },
  {
    id: 7,
    brand: "Hilite Optical",
    category: "Optical retail",
    description: "Modern eyewear retail marketing strategy focused on premium style.",
    instagramHandle: "hiliteoptical",
    metric: "Retail Visibility",
  },
  {
    id: 8,
    brand: "Shree Uma Corporation",
    category: "Solar panel cleaning services",
    description: "Sustainability-focused service brand promoting solar maintenance solutions.",
    instagramHandle: "shreeumacorp",
    metric: "Eco Service",
  },
  {
    id: 9,
    brand: "Esha Vastu",
    category: "Real estate agency",
    description: "Real estate marketing with property showcases and trust-building campaigns.",
    instagramHandle: "eshavastu",
    metric: "Property Leads",
  },
  {
    id: 10,
    brand: "Simm Boutique",
    category: "Clothing brand",
    description: "Fashion boutique social media presence showcasing curated collections.",
    instagramHandle: "simmboutique",
    metric: "Fashion Reach",
  },
  {
    id: 11,
    brand: "Kukedi Hatti",
    category: "Restaurant",
    description: "Restaurant marketing through food storytelling and local engagement.",
    instagramHandle: "kukedihatti",
    metric: "Food Community",
  },
  {
    id: 12,
    brand: "Dhanyam Herbal",
    category: "Herbal products",
    description: "Natural herbal brand highlighting organic wellness products.",
    instagramHandle: "dhanyamherbal",
    metric: "Organic Growth",
  },
  {
    id: 13,
    brand: "Makeovers by Navnisha Solanki",
    category: "Makeup artist",
    description: "Beauty and makeup portfolio showcasing bridal and professional looks.",
    instagramHandle: "navnishasolanki_makeovers",
    metric: "Beauty Portfolio",
  },
  {
    id: 14,
    brand: "Verne 82",
    category: "Real estate",
    description: "Premium real estate brand positioning through modern property campaigns.",
    instagramHandle: "verne82",
    metric: "Luxury Properties",
  },
  {
    id: 15,
    brand: "Kaii2 Couture",
    category: "Clothing brand",
    description: "High-end couture fashion marketing for designer collections.",
    instagramHandle: "kaii2couture",
    metric: "Designer Fashion",
  },
  {
    id: 16,
    brand: "Khayali",
    category: "Food joint",
    description: "Food brand storytelling with modern restaurant visuals and promotions.",
    instagramHandle: "khayali_food",
    metric: "Food Experience",
  },
  {
    id: 17,
    brand: "High Ethnic",
    category: "Clothing brand",
    description: "Traditional ethnic fashion promoted with contemporary branding.",
    instagramHandle: "highethnic",
    metric: "Ethnic Fashion",
  },
  {
    id: 18,
    brand: "Bright School Foundation Therapy",
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
  'Cricket accessories': {
    bg: 'bg-emerald-500/15',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30'
  },

  'Optical retail': {
    bg: 'bg-sky-500/15',
    text: 'text-sky-400',
    border: 'border-sky-500/30'
  },

  'Optical manufacturer': {
    bg: 'bg-cyan-500/15',
    text: 'text-cyan-400',
    border: 'border-cyan-500/30'
  },

  'AI/VR solution': {
    bg: 'bg-violet-500/15',
    text: 'text-violet-400',
    border: 'border-violet-500/30'
  },

  'Student accommodation': {
    bg: 'bg-indigo-500/15',
    text: 'text-indigo-400',
    border: 'border-indigo-500/30'
  },

  'Event management': {
    bg: 'bg-fuchsia-500/15',
    text: 'text-fuchsia-400',
    border: 'border-fuchsia-500/30'
  },

  'Solar panel cleaning services': {
    bg: 'bg-yellow-500/15',
    text: 'text-yellow-400',
    border: 'border-yellow-500/30'
  },

  'Real estate agency': {
    bg: 'bg-orange-500/15',
    text: 'text-orange-400',
    border: 'border-orange-500/30'
  },

  'Real estate': {
    bg: 'bg-amber-500/15',
    text: 'text-amber-400',
    border: 'border-amber-500/30'
  },

  'Clothing brand': {
    bg: 'bg-rose-500/15',
    text: 'text-rose-400',
    border: 'border-rose-500/30'
  },

  'Restaurant': {
    bg: 'bg-red-500/15',
    text: 'text-red-400',
    border: 'border-red-500/30'
  },

  'Food joint': {
    bg: 'bg-pink-500/15',
    text: 'text-pink-400',
    border: 'border-pink-500/30'
  },

  'Herbal products': {
    bg: 'bg-green-500/15',
    text: 'text-green-400',
    border: 'border-green-500/30'
  },

  'Makeup artist': {
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