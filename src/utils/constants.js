/**
 * Constants and static data for Advocate Shankar Chavan Website
 */



import adv1 from '../assets/adv1.jpg';
import adv2 from '../assets/adv2.jpg'
import adv3 from '../assets/adv3.jpg'

export const ADVOCATE_INFO = {
  name: "Adv. Shankar Chavan",
  title: "Advocate, High Court of Bombay",
  shortTitle: "Adv. Shankar Chavan",
  phone: "+91 9769759737",
  whatsappPhone: "919769759737", // Used for wa.me link
  email: "adv.shankarchavan@gmail.com",
  mainOffice: {
    title: "Chambers - Bombay High Court",
    address: "Dr Kane Road, Fort, Mumbai, Maharashtra 400032",
    googleMapsLink: "https://maps.google.com/?q=Bombay+High+Court,+Fort,+Mumbai",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.220199589333!2d72.82903747582531!3d18.932731982743115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e7cfffffff%3A0x6bfa3b632db2a3fc!2sHigh%20Court%20Of%20Bombay!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  puneOffice: {
    title: "Pune Branch Chamber",
    address: "Shivajinagar District Court Compound, Pune, Maharashtra 411005",
    googleMapsLink: "https://maps.google.com/?q=Shivajinagar+District+Court,+Pune",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/shankarchavan",
    facebook: "https://www.facebook.com/bloggershankar/",
    whatsapp: "https://wa.me/919769759737",
    topmate: "https://topmate.io/adv_shankar_chavan"
  },
  education: [
    {
      degree: "Bachelor of Laws (LLB)",
      institution: "Swami Ramanand Teerth Marathwada University (SRTMU), Nanded",
      period: "2022 - 2024"
    },
    {
      degree: "Master of Business Administration (MBA) - HR Management",
      institution: "Yashwantrao Chavan Maharashtra Open University (YCMOU)",
      period: "2015 - 2017"
    },
    {
      degree: "Bachelor of Arts (BA) - Sociology",
      institution: "Yashwantrao Chavan Maharashtra Open University (YCMOU)",
      period: "2006 - 2009"
    }
  ],
  experience: [
    {
      role: "High Court Advocate",
      organization: "High Court of Bombay",
      period: "2019 - Present",
      description: "Practicing advocate representing corporate clients, public bodies, and individuals in critical Writ Petitions, Criminal Appeals, Civil Appeals, and Commercial Arbitrations before the Principal Bench (Mumbai) and Circuit Benches."
    },
    {
      role: "Special Public Prosecutor (Former)",
      organization: "State of Maharashtra",
      period: "2016 - 2022",
      description: "Appointed by the Government of Maharashtra to prosecute high-profile corruption, economic offence, and financial irregularity cases on behalf of state agencies."
    },
    {
      role: "Founder & Director",
      organization: "Infodad Technologies Private Limited",
      period: "2020 - Present",
      description: "Pioneering technology solutions at the intersection of legal tech, software development, and digital advisory, combining deep legal compliance expertise with advanced technology frameworks."
    }
  ],
  workingHours: [
    { day: "Monday - Friday", hours: "10:00 AM - 07:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 04:00 PM" },
    { day: "Sunday & Public Holidays", hours: "Closed (By Appointment Only)" }
  ],
  mission: "To provide premium, diligent, and uncompromising legal advocacy, ensuring our clients receive the highest tier of representation while upholding the foundational values of justice, integrity, and the rule of law.",
  vision: "To merge traditional legal rigour with modern, innovative digital solutions—providing world-class legal consultation that is accessible, strategic, and result-oriented."
};

export const PRACTICE_AREAS = [
  {
    id: "criminal-defense",
    title: "Criminal Law & Defense",
    icon: "FiShield",
    shortDescription: "Robust defense strategies, bail petitions, and criminal trials in High Court and Session Courts.",
    detailedDescription: "Providing aggressive and meticulous representation for complex white-collar crimes, financial frauds, Prevention of Corruption Act (PCA) cases, cyber offenses, and criminal defense in both trial and appellate courts. We specialize in regular bail, anticipatory bail, quashing of FIRs, and appellate representation in the High Court.",
    features: ["Anticipatory & Regular Bail", "FIR Quashing Writs", "Economic & White-Collar Defense", "Appeals & Revisions"]
  },
  {
    id: "civil-litigation",
    title: "Civil Litigation & Property",
    icon: "FiHome",
    shortDescription: "Property disputes, land acquisitions, contract enforcement, and civil suits.",
    detailedDescription: "Handling high-stake civil litigations, real estate disputes, partition suits, landlord-tenant matters, land acquisition claims, and breach of contracts. Our team is expert in ensuring title protection, seeking injunctions, and navigating complex land regulatory frameworks of Maharashtra.",
    features: ["Specific Performance Suits", "Property Title Disputes", "Injunctions & Stay Orders", "RERA & Land Revenue Appeals"]
  },
  {
    id: "corporate-law",
    title: "Corporate & Commercial Law",
    icon: "FiBriefcase",
    shortDescription: "Business compliance, contracts, mergers, and legal advisory for companies.",
    detailedDescription: "Serving businesses from tech startups to established companies. We guide on company incorporation, shareholder disputes, regulatory compliance, venture capital funding, draft commercial contracts, NDA, Service Agreements, and provide executive HR advisory backed by professional MBA expertise.",
    features: ["M&amp;A and Corporate Drafting", "Shareholder Agreements", "Employment &amp; Labor Advisory", "IPR &amp; Trademark Protection"]
  },
  {
    id: "arbitration",
    title: "Alternative Dispute Resolution",
    icon: "FiUsers",
    shortDescription: "Efficient commercial arbitration, mediation, and out-of-court settlements.",
    detailedDescription: "Offering strategic counsel in commercial arbitrations and dispute resolution. We focus on achieving swift, cost-effective, and business-oriented resolutions for high-value claims, commercial contract disputes, and partnership breakdowns outside the court where possible.",
    features: ["Domestic &amp; Int. Arbitration", "Mediation Proceedings", "Settlement Agreements", "Arbitral Award Enforcement"]
  },
  {
    id: "constitutional-law",
    title: "Constitutional & Writ Petitions",
    icon: "FiBookmark",
    shortDescription: "Writ petitions, PILs, and enforcement of fundamental rights in High Court.",
    detailedDescription: "Pioneering advocacy in defending citizens' fundamental rights and challenge ultra-vires administrative actions. We regularly draft and argue Writ of Habeas Corpus, Mandamus, Prohibition, Quo Warranto, and Certiorari, as well as Public Interest Litigations (PIL) addressing broad systemic grievances.",
    features: ["Writ Petitions (Art. 226/227)", "Public Interest Litigation", "Administrative Law Appeals", "Fundamental Rights Violations"]
  },
  {
    id: "family-law",
    title: "Family & Matrimonial Law",
    icon: "FiHeart",
    shortDescription: "Divorce, child custody, alimony, and mutual partition settlements with empathy.",
    detailedDescription: "Navigating delicate matrimonial issues with deep empathy, strict confidentiality, and strategic legal posture. We handle mutual divorces, contested divorces, maintenance, domestic violence issues, dowry harassment claims, child custody battles, and family estate distribution.",
    features: ["Mutual &amp; Contested Divorce", "Maintenance &amp; Alimony", "Child Custody &amp; Guardianship", "Domestic Violence Protection"]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Advocate Shankar Chavan represented our corporate firm in a multi-crore contractual dispute. His combination of technical expertise and commercial understanding, likely owing to his MBA background, is rare and incredibly effective.",
    author: "Rajesh Singhania",
    role: "Director, Singhania Logistics",
    location: "Mumbai"
  },
  {
    quote: "We were facing a complicated criminal charge and were extremely stressed. Adv. Chavan not only secured anticipatory bail for us in the High Court but also showed incredible empathy and guidance throughout the process.",
    author: "Pradeep Deshmukh",
    role: "Retd. Government Officer",
    location: "Pune"
  },
  {
    quote: "His command over constitutional matters and writ petitions is outstanding. His representation before the Bombay High Court was rigorous, analytical, and highly persuasive. Highly recommended for complex appellate matters.",
    author: "Dr. Ananya Mehta",
    role: "Professor of Law & Activist",
    location: "Aurangabad"
  },
  {
    quote: "As a technology founder, finding a lawyer who speaks software and copyright law fluently was tough. Adv. Shankar, being a legal tech founder himself, understands intellectual property and startup needs perfectly.",
    author: "Vikram Kulkarni",
    role: "Co-Founder, DevNext Labs",
    location: "Mumbai"
  }
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    url: adv1,
    title: "Bombay High Court Principal Bench",
    category: "Court"
  },
  {
    id: 2,
    url: adv2,
    title: "Legal Chambers and Consultation Area",
    category: "Office"
  },
  {
    id: 3,
    url: adv3,
    title: "Advocating at the Bench",
    category: "Court"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200",
    title: "Legal Research and Case Law Library",
    category: "Office"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    title: "Speaking at Legal Tech & Ethics Seminar",
    category: "Event"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&q=80&w=1200",
    title: "Strategic Client Discussion",
    category: "Office"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200",
    title: "Infodad Technologies Launch",
    category: "Event"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=1200",
    title: "Bandra-Worli Sea Link, Mumbai",
    category: "Mumbai"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "High Court Practice Focus",
    description: "Extensive experience practicing directly at the Principal Bench in Mumbai, and benches in Aurangabad and Nagpur. Equipped for strategic appellate challenges.",
    icon: "FiCheckCircle"
  },
  {
    title: "Multidisciplinary Expertise",
    description: "Combining legal intelligence (LLB) with professional human resource leadership (MBA) and sociology insights. A unique blend for commercial and civil disputes.",
    icon: "FiCheckCircle"
  },
  {
    title: "Former Prosecutor's Insight",
    description: "Years spent serving as a Special Public Prosecutor for the State of Maharashtra offer a comprehensive perspective on state agencies and criminal trial tactics.",
    icon: "FiCheckCircle"
  },
  {
    title: "Tech-Forward Mindset",
    description: "As a LegalTech founder, Adv. Shankar leverages modern AI, case-law tracking databases, and streamlined digital tools to build bulletproof cases.",
    icon: "FiCheckCircle"
  }
];
