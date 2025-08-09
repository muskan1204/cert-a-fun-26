import { CertificateType, CertificateDesign, SITE_NAME } from "@/types/certificate";

// Classic Black Design (existing design)
export const generateClassicBlackDesign = (name: string, certificateType: CertificateType, canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Set canvas size
  canvas.width = 1200;
  canvas.height = 800;

  // Black background
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, 1200, 800);

  // White border on black background
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, 1160, 760);
  
  // Inner border for elegance
  ctx.strokeStyle = "#cccccc";
  ctx.lineWidth = 2;
  ctx.strokeRect(40, 40, 1120, 720);

  // Text rendering helper
  const drawProText = (text: string, x: number, y: number, fillColor: string | CanvasGradient, size: number = 24, weight: string = "normal", effects: any = {}) => {
    ctx.save();
    ctx.font = `${weight} ${size}px Arial`;
    
    if (effects.glow) {
      ctx.shadowColor = effects.glow;
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
    }
    
    if (effects.stroke) {
      ctx.strokeStyle = effects.stroke;
      ctx.lineWidth = effects.strokeWidth || 2;
      ctx.strokeText(text, x, y);
    }
    
    ctx.fillStyle = fillColor;
    ctx.fillText(text, x, y);
    ctx.restore();
  };

  // Main header
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  
  const headerGradient = ctx.createLinearGradient(0, 100, 0, 140);
  headerGradient.addColorStop(0, "#ffffff");
  headerGradient.addColorStop(1, "#cccccc");
  
  drawProText("🏆 CERTIFICATE OF ACHIEVEMENT 🏆", 600, 120, headerGradient, 52, "bold", {
    glow: "rgba(45, 27, 105, 0.5)",
    stroke: "#000000",
    strokeWidth: 1
  });

  // (keeping existing classic design logic)
  drawProText("This is to certify that", 600, 240, "#cccccc", 32, "italic");

  if (name.trim()) {
    const nameGradient = ctx.createLinearGradient(0, 280, 0, 340);
    nameGradient.addColorStop(0, "#ffffff");
    nameGradient.addColorStop(1, "#8B5CF6");
    
    drawProText(name.trim().toUpperCase(), 600, 310, nameGradient, 84, "bold", {
      glow: "rgba(139, 92, 246, 0.6)",
      stroke: "#000000",
      strokeWidth: 2
    });
  }

  if (certificateType) {
    drawProText("has successfully demonstrated LEGENDARY excellence in", 600, 400, "#ffffff", 28, "600");
    
    const achievementGradient = ctx.createLinearGradient(0, 470, 0, 510);
    achievementGradient.addColorStop(0, "#FF6B9D");
    achievementGradient.addColorStop(1, "#8B5CF6");
    
    drawProText(certificateType.title.toUpperCase(), 600, 460, achievementGradient, 48, "bold", {
      glow: "rgba(255, 107, 157, 0.8)",
      stroke: "#000000",
      strokeWidth: 1
    });

    // Add funny achievement level
    drawProText("🎯 ACHIEVEMENT LEVEL: ABSOLUTELY LEGENDARY 🎯", 600, 520, "#FFD700", 24, "bold", {
      glow: "rgba(255, 215, 0, 0.8)",
      stroke: "#000000",
      strokeWidth: 1
    });

    // Add funny quote
    drawProText("\"Because life is too short to be serious all the time!\" 😄", 600, 560, "#ffffff", 20, "italic");
  }

  // Add skill points
  drawProText("💪 SKILL POINTS EARNED: 9999+ | 🏅 HUMOR LEVEL: MAXIMUM", 600, 600, "#00FF7F", 18, "600");

  // Footer
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long", 
    day: "numeric"
  });
  
  ctx.textAlign = "left";
  drawProText(`📅 Issued: ${currentDate}`, 100, 680, "#ffffff", 20, "600");
  
  ctx.textAlign = "right";
  drawProText(`✅ Certified by: ${SITE_NAME} 🎉`, 1100, 680, "#ffffff", 20, "600");
};

// Academic White Design (university diploma style)
export const generateAcademicWhiteDesign = (name: string, certificateType: CertificateType, canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = 1200;
  canvas.height = 800;

  // White background
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 1200, 800);

  // Elegant border
  ctx.strokeStyle = "#2D3748";
  ctx.lineWidth = 3;
  ctx.strokeRect(40, 40, 1120, 720);
  
  // Inner decorative border
  ctx.strokeStyle = "#4A5568";
  ctx.lineWidth = 1;
  ctx.strokeRect(60, 60, 1080, 680);

  const drawText = (text: string, x: number, y: number, color: string, size: number, weight: string = "normal", font: string = "Times New Roman") => {
    ctx.save();
    ctx.font = `${weight} ${size}px ${font}`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, x, y);
    ctx.restore();
  };

  // University-style header
  drawText("🎓 UNIVERSITY OF COMEDY 🎓", 600, 110, "#2D3748", 36, "bold", "Times New Roman");
  drawText("Department of Hilarious Studies & Advanced Meme Research", 600, 140, "#4A5568", 16, "italic", "Times New Roman");
  drawText("📚 \"Where Learning Meets Laughter\" 📚", 600, 165, "#718096", 14, "normal", "Times New Roman");

  // Diploma text
  drawText("This diploma hereby certifies that", 600, 210, "#2D3748", 22, "normal", "Times New Roman");

  if (name.trim()) {
    drawText(name.trim(), 600, 270, "#1A202C", 54, "bold", "Times New Roman");
    
    // Decorative line under name
    ctx.strokeStyle = "#2D3748";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(200, 310);
    ctx.lineTo(1000, 310);
    ctx.stroke();
  }

  if (certificateType) {
    drawText("has successfully completed all requirements and demonstrated", 600, 360, "#2D3748", 18, "normal", "Times New Roman");
    drawText("EXCEPTIONAL MASTERY in the field of", 600, 385, "#2D3748", 20, "bold", "Times New Roman");
    drawText(certificateType.title, 600, 440, "#1A365D", 38, "bold", "Times New Roman");
    
    // Add funny academic credentials
    drawText("🏅 GRADE: A++ (Maximum Hilarity Achieved)", 600, 480, "#E53E3E", 16, "600", "Times New Roman");
    drawText("🎯 GPA: 4.20/4.20 (Perfect Score in Fun)", 600, 505, "#38A169", 16, "600", "Times New Roman");
  }

  // Academic seals and signatures area
  drawText("with all the rights, privileges, and unlimited dad joke permissions", 600, 545, "#2D3748", 16, "italic", "Times New Roman");
  drawText("💼 \"Now go forth and spread joy to the world!\" 🌍", 600, 570, "#805AD5", 16, "600", "Times New Roman");

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long", 
    day: "numeric"
  });

  // Signature lines with humor
  ctx.textAlign = "left";
  drawText("🎭 Dr. Chuckles McFunnyface", 180, 630, "#2D3748", 14, "normal", "Times New Roman");
  drawText("Dean of Comedy & Chief Humor Officer", 180, 650, "#4A5568", 12, "italic", "Times New Roman");
  drawText(`📅 Date: ${currentDate}`, 180, 680, "#2D3748", 14, "normal", "Times New Roman");
  
  ctx.textAlign = "right";
  drawText(`🏛️ ${SITE_NAME}`, 1020, 630, "#2D3748", 14, "normal", "Times New Roman");
  drawText("📜 Official Certificate Authority", 1020, 650, "#4A5568", 12, "italic", "Times New Roman");
  drawText("🎉 Laughter Guaranteed Since 2024", 1020, 680, "#2D3748", 12, "normal", "Times New Roman");
};

// Modern Gradient Design
export const generateModernGradientDesign = (name: string, certificateType: CertificateType, canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = 1200;
  canvas.height = 800;

  // Vibrant gradient background
  const bgGradient = ctx.createLinearGradient(0, 0, 1200, 800);
  bgGradient.addColorStop(0, "#667eea");
  bgGradient.addColorStop(0.5, "#764ba2");
  bgGradient.addColorStop(1, "#f093fb");
  
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, 1200, 800);

  // Overlay for better text readability
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, 1200, 800);

  const drawModernText = (text: string, x: number, y: number, color: string, size: number, weight: string = "normal") => {
    ctx.save();
    ctx.font = `${weight} ${size}px 'Arial', sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Text shadow for better visibility
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    
    ctx.fillText(text, x, y);
    ctx.restore();
  };

  // Modern header
  drawModernText("🚀 ACHIEVEMENT UNLOCKED 🚀", 600, 100, "#ffffff", 48, "bold");
  drawModernText("✨ LEVEL UP COMPLETE ✨", 600, 140, "#FFD700", 24, "600");
  
  if (name.trim()) {
    drawModernText(name.trim().toUpperCase(), 600, 200, "#ffffff", 64, "bold");
    drawModernText("🎮 PLAYER STATUS: LEGENDARY 🎮", 600, 250, "#00FF7F", 20, "600");
  }

  drawModernText("HAS MASTERED THE EPIC ART OF", 600, 300, "#ffffff", 24, "600");

  if (certificateType) {
    drawModernText(certificateType.title.toUpperCase(), 600, 370, "#FFD700", 44, "bold");
    drawModernText("🏆 DIFFICULTY LEVEL: NIGHTMARE MODE CONQUERED 🏆", 600, 420, "#FF69B4", 20, "600");
    drawModernText("💎 RARITY: ULTRA RARE ACHIEVEMENT 💎", 600, 450, "#00FFFF", 18, "600");
    drawModernText("⚡ POWER LEVEL: OVER 9000! ⚡", 600, 480, "#FFD700", 20, "bold");
  }

  drawModernText("🎊 Congratulations! You are now officially awesome! 🎊", 600, 530, "#ffffff", 22, "normal");
  drawModernText("🌟 Share this epic achievement with the world! 🌟", 600, 560, "#00FF7F", 18, "italic");

  const currentDate = new Date().toLocaleDateString();
  drawModernText(`⏰ Achievement Unlocked: ${currentDate} | 🎯 Next Level Loading... 🎯`, 600, 620, "#ffffff", 16, "normal");
  drawModernText(`🏅 Certified by: ${SITE_NAME} - Your Gateway to Greatness! 🏅`, 600, 650, "#FFD700", 16, "600");
};

// Vintage Parchment Design
export const generateVintageParchmentDesign = (name: string, certificateType: CertificateType, canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = 1200;
  canvas.height = 800;

  // Parchment background
  const parchmentGradient = ctx.createRadialGradient(600, 400, 200, 600, 400, 800);
  parchmentGradient.addColorStop(0, "#F7F3E9");
  parchmentGradient.addColorStop(1, "#E8D5B7");
  
  ctx.fillStyle = parchmentGradient;
  ctx.fillRect(0, 0, 1200, 800);

  // Aged edges effect
  ctx.fillStyle = "rgba(139, 69, 19, 0.1)";
  ctx.fillRect(0, 0, 50, 800);
  ctx.fillRect(1150, 0, 50, 800);
  ctx.fillRect(0, 0, 1200, 50);
  ctx.fillRect(0, 750, 1200, 50);

  const drawVintageText = (text: string, x: number, y: number, color: string, size: number, weight: string = "normal") => {
    ctx.save();
    ctx.font = `${weight} ${size}px 'Georgia', serif`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, x, y);
    ctx.restore();
  };

  // Ornate header
  drawVintageText("📜 ~ CERTIFICATE OF EXCELLENCE ~ 📜", 600, 100, "#8B4513", 36, "bold");
  drawVintageText("🏰 Ye Olde Academy of Legendary Deeds 🏰", 600, 135, "#A0522D", 18, "italic");
  drawVintageText("⚔️ Est. 2024 - Where Legends Are Born ⚔️", 600, 160, "#CD853F", 14, "normal");

  // Decorative flourish
  ctx.strokeStyle = "#8B4513";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(300, 190);
  ctx.quadraticCurveTo(600, 170, 900, 190);
  ctx.stroke();

  drawVintageText("🎪 Be it known throughout the realm that 🎪", 600, 220, "#654321", 22, "italic");

  if (name.trim()) {
    drawVintageText(name.trim(), 600, 290, "#2F1B14", 50, "bold");
    drawVintageText("🌟 Bearer of Ancient Wisdom & Modern Humor 🌟", 600, 330, "#8B4513", 16, "600");
  }

  drawVintageText("hath demonstrated unparalleled mastery in ye olde art of", 600, 370, "#654321", 20, "normal");

  if (certificateType) {
    drawVintageText(certificateType.title, 600, 420, "#8B4513", 36, "bold");
    drawVintageText("🏅 RANK ACHIEVED: Grand Master of Mirth 🏅", 600, 460, "#DAA520", 18, "600");
    drawVintageText("⭐ LEGEND STATUS: Confirmed by Royal Decree ⭐", 600, 485, "#B8860B", 16, "600");
  }

  drawVintageText("and is hereby granted all privileges, honors, and unlimited meme rights", 600, 525, "#654321", 18, "italic");
  drawVintageText("🎭 \"May thy humor be eternal and thy jokes forever fresh!\" 🎭", 600, 555, "#800080", 16, "600");

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long", 
    day: "numeric"
  });

  drawVintageText(`🗓️ Sealed this day: ${currentDate}`, 600, 600, "#654321", 16, "normal");
  drawVintageText(`👑 By Royal Authority of ${SITE_NAME} 👑`, 600, 630, "#654321", 15, "italic");
  drawVintageText("🔥 \"In Laughter We Trust\" - Official Motto 🔥", 600, 660, "#8B4513", 14, "600");
};

// Minimalist Clean Design
export const generateMinimalistCleanDesign = (name: string, certificateType: CertificateType, canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = 1200;
  canvas.height = 800;

  // Clean white background
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 1200, 800);

  // Minimal accent border
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  ctx.strokeRect(80, 80, 1040, 640);

  const drawCleanText = (text: string, x: number, y: number, color: string, size: number, weight: string = "normal") => {
    ctx.save();
    ctx.font = `${weight} ${size}px 'Inter', 'Arial', sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, x, y);
    ctx.restore();
  };

  // Minimal header with subtle emojis
  drawCleanText("🎯 CERTIFICATE OF ACHIEVEMENT 🎯", 600, 160, "#1e293b", 36, "300");
  drawCleanText("✨ Excellence Recognized ✨", 600, 190, "#64748b", 16, "400");

  if (name.trim()) {
    drawCleanText(name.trim(), 600, 270, "#0f172a", 54, "600");
    drawCleanText("🌟 Certified Professional 🌟", 600, 310, "#6366f1", 18, "500");
  }

  drawCleanText("has successfully demonstrated mastery in", 600, 360, "#475569", 20, "400");

  if (certificateType) {
    drawCleanText(certificateType.title, 600, 410, "#3730a3", 30, "500");
    drawCleanText("🏆 Performance Level: Outstanding 🏆", 600, 450, "#059669", 16, "500");
    drawCleanText("✅ Status: Officially Awesome ✅", 600, 475, "#7c3aed", 16, "500");
  }

  // Simple line decoration
  ctx.strokeStyle = "#6366f1";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(400, 510);
  ctx.lineTo(800, 510);
  ctx.stroke();

  drawCleanText("💼 \"Simplicity is the ultimate sophistication\" 💼", 600, 550, "#64748b", 16, "400");
  drawCleanText("🎉 Congratulations on this remarkable achievement! 🎉", 600, 580, "#1e293b", 18, "500");

  const currentDate = new Date().toLocaleDateString();
  drawCleanText(`📅 Certified: ${currentDate}`, 600, 620, "#64748b", 16, "400");
  drawCleanText(`🏅 Issued by: ${SITE_NAME} 🏅`, 600, 650, "#64748b", 14, "400");
  drawCleanText("✨ Where Excellence Meets Humor ✨", 600, 680, "#9ca3af", 12, "400");
};

// Main generator function that selects the appropriate design
export const generateCertificateDesign = (
  name: string, 
  certificateType: CertificateType, 
  selectedDesign: CertificateDesign,
  canvas: HTMLCanvasElement
) => {
  switch (selectedDesign.id) {
    case "classic-black":
      generateClassicBlackDesign(name, certificateType, canvas);
      break;
    case "academic-white":
      generateAcademicWhiteDesign(name, certificateType, canvas);
      break;
    case "modern-gradient":
      generateModernGradientDesign(name, certificateType, canvas);
      break;
    case "vintage-parchment":
      generateVintageParchmentDesign(name, certificateType, canvas);
      break;
    case "minimalist-clean":
      generateMinimalistCleanDesign(name, certificateType, canvas);
      break;
    default:
      generateClassicBlackDesign(name, certificateType, canvas);
  }
};
