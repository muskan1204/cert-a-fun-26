export interface CertificateType {
  id: string;
  title: string;
  template: string;
}

export interface CertificateDesign {
  id: string;
  name: string;
  description: string;
  preview: string;
}

export const CERTIFICATE_DESIGNS: CertificateDesign[] = [
  {
    id: "classic-black",
    name: "Classic Black",
    description: "Professional black background with gold accents",
    preview: "🖤 Elegant & Professional"
  },
  {
    id: "academic-white", 
    name: "Academic Degree",
    description: "Traditional university diploma style with white background",
    preview: "🎓 University Style"
  },
  {
    id: "modern-gradient",
    name: "Modern Gradient",
    description: "Vibrant gradient background with contemporary styling",
    preview: "🌈 Colorful & Modern"
  },
  {
    id: "vintage-parchment",
    name: "Vintage Parchment",
    description: "Aged paper look with classic typography",
    preview: "📜 Old School Cool"
  },
  {
    id: "minimalist-clean",
    name: "Minimalist Clean",
    description: "Simple white background with clean modern fonts",
    preview: "✨ Clean & Simple"
  }
];

export const CERTIFICATE_TYPES: CertificateType[] = [
  { id: "unemployed", title: "Certified Unemployed", template: "meme-cert-1.jpg" },
  { id: "overthinker", title: "Certified Overthinker", template: "meme-cert-2.jpg" },
  { id: "monday", title: "Master in 'Next Monday' Plans", template: "meme-cert-3.jpg" },
  { id: "laziness", title: "Chief Laziness Officer", template: "meme-cert-2.jpg" },
  { id: "scrolling", title: "Expert in Reels Scrolling", template: "meme-cert-1.jpg" },
  { id: "netflix", title: "Expert in Netflix Rewatching", template: "meme-cert-1.jpg" },
  { id: "excuse-maker", title: "World's Best Excuse Maker", template: "meme-cert-1.jpg" },
  { id: "napper", title: "Professional Napper", template: "meme-cert-3.jpg" },
  { id: "meme", title: "Meme Connoisseur", template: "meme-cert-1.jpg" },
  { id: "procrastination", title: "Director of Procrastination", template: "meme-cert-2.jpg" },
  { id: "binge", title: "Bachelor of Binge Watching", template: "meme-cert-3.jpg" },
  { id: "silence", title: "Master of Awkward Silence", template: "meme-cert-2.jpg" },
  { id: "snacking", title: "Doctorate in Midnight Snacking", template: "meme-cert-3.jpg" },
  { id: "excuses", title: "CEO of Excuses", template: "meme-cert-1.jpg" },
  { id: "cricket", title: "Champion of Couch Cricket", template: "meme-cert-2.jpg" },
  { id: "dealer", title: "International Meme Dealer", template: "meme-cert-3.jpg" },
  { id: "daydreamer", title: "Licensed Daydreamer", template: "meme-cert-2.jpg" },
  { id: "snoozing", title: "Gold Medal in Alarm Snoozing", template: "meme-cert-3.jpg" },
  { id: "overcomplicating", title: "Diploma in Overcomplicating Things", template: "meme-cert-1.jpg" },
  { id: "overpacker", title: "Professional Overpacker", template: "meme-cert-2.jpg" },
];

export const SITE_NAME = "fakeskills.com";