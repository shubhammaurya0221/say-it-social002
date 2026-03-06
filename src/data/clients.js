// Client data for SMM section — categorized by industry
// TODO: Update with Darshil's final categorized list and metrics
export const clients = [
    {
        id: 1,
        brand: 'Cricstudioinc',
        category: 'Sports & Fitness',
        description: 'Cricket content & brand building — Building a strong community around sports content',
        instagramHandle: 'cricstudioinc',
        metric: 'Community Built',
    },
    {
        id: 2,
        brand: 'Shiva Optics Plus',
        category: 'Retail & Eyewear',
        description: 'Transforming premium eyewear brand presence with sophisticated, minimal design',
        instagramHandle: 'shivaoptics',
        metric: 'Brand Elevated',
    },
    {
        id: 3,
        brand: 'Shiva Enterprise',
        category: 'Retail & Eyewear',
        description: 'Modern eyewear e-commerce social strategy — Thoughtfully selected products',
        instagramHandle: 'shivaenterprise.in',
        metric: 'Modern Strategy',
    },
    {
        id: 4,
        brand: 'The Quick Craft',
        category: 'AI & VR Solutions',
        description: 'AI-powered design & VR solutions — Leveraging AI and human creativity',
        instagramHandle: 'tqc.official',
        metric: 'Innovation Driven',
    },
    {
        id: 5,
        brand: 'Dronagiri Herbal',
        category: 'Beauty & Wellness',
        description: 'Natural skincare & haircare brand launch — 100% herbal products',
        instagramHandle: 'dronagiri_herbal_india',
        metric: '100% Herbal',
    },
    {
        id: 6,
        brand: 'Shivaangi Hostel',
        category: 'Education & Services',
        description: 'Student accommodation brand building — Establishing trust within education community',
        instagramHandle: 'shivaangi_hostel',
        metric: 'Trust Established',
    },
    {
        id: 7,
        brand: 'Kalon Ethnic',
        category: 'Fashion & Lifestyle',
        description: 'Traditional fashion brand digital presence — Bridging traditional with modern',
        instagramHandle: 'kalon.ethnic',
        metric: 'Traditional Meets Modern',
    },
    {
        id: 8,
        brand: 'Vortex Educational Consultants',
        category: 'Education & Services',
        description: 'Education services marketing — Building authority and trust in education sector',
        instagramHandle: 'vortex_educational_consultants',
        metric: 'Authority Built',
    },
];

// Unique categories derived from clients
export const clientCategories = ['All', ...new Set(clients.map(c => c.category))];

// Industry color map for category pills
export const categoryColors = {
    'Sports & Fitness': { bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30' },
    'Retail & Eyewear': { bg: 'bg-sky-500/15', text: 'text-sky-400', border: 'border-sky-500/30' },
    'AI & VR Solutions': { bg: 'bg-violet-500/15', text: 'text-violet-400', border: 'border-violet-500/30' },
    'Beauty & Wellness': { bg: 'bg-pink-500/15', text: 'text-pink-400', border: 'border-pink-500/30' },
    'Education & Services': { bg: 'bg-amber-500/15', text: 'text-amber-400', border: 'border-amber-500/30' },
    'Fashion & Lifestyle': { bg: 'bg-rose-500/15', text: 'text-rose-400', border: 'border-rose-500/30' },
};
