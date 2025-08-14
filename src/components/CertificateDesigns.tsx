import { CertificateType, CertificateDesign, SITE_NAME } from "@/types/certificate";

// Classic Black Design - Enhanced Quality
export const generateClassicBlackDesign = (name: string, certificateType: CertificateType, canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Higher resolution for better quality
  canvas.width = 1600;
  canvas.height = 1200;

  // Enhanced black background with subtle gradient
  const bgGradient = ctx.createRadialGradient(800, 600, 200, 800, 600, 900);
  bgGradient.addColorStop(0, "#1a1a1a");
  bgGradient.addColorStop(1, "#000000");
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, 1600, 1200);

  // Enhanced border with glow effect
  ctx.shadowColor = "#ffffff";
  ctx.shadowBlur = 15;
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 6;
  ctx.strokeRect(30, 30, 1540, 1140);
  
  // Enhanced inner border for elegance
  ctx.shadowBlur = 8;
  ctx.strokeStyle = "#cccccc";
  ctx.lineWidth = 3;
  ctx.strokeRect(60, 60, 1480, 1080);

  // Enhanced text rendering helper with better font handling
  const drawProText = (text: string, x: number, y: number, fillColor: string | CanvasGradient, size: number = 24, weight: string = "normal", effects: any = {}) => {
    ctx.save();
    // Better font fallback chain
    ctx.font = `${weight} ${size}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
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

  // Enhanced main header with simplified emojis
  ctx.shadowColor = "transparent";
  
  const headerGradient = ctx.createLinearGradient(0, 150, 0, 200);
  headerGradient.addColorStop(0, "#ffffff");
  headerGradient.addColorStop(1, "#cccccc");
  
  drawProText("CERTIFICATE OF ACHIEVEMENT", 800, 180, headerGradient, 70, "900", {
    glow: "rgba(255, 255, 255, 0.8)",
    stroke: "#000000",
    strokeWidth: 2
  });

  // Enhanced certification text
  drawProText("This is to certify that", 800, 360, "#cccccc", 42, "600");

  if (name.trim()) {
    const nameGradient = ctx.createLinearGradient(0, 420, 0, 510);
    nameGradient.addColorStop(0, "#ffffff");
    nameGradient.addColorStop(1, "#8B5CF6");
    
    drawProText(name.trim().toUpperCase(), 800, 465, nameGradient, 112, "900", {
      glow: "rgba(139, 92, 246, 0.8)",
      stroke: "#000000",
      strokeWidth: 3
    });
  }

  if (certificateType) {
    drawProText("has successfully demonstrated LEGENDARY excellence in", 800, 600, "#ffffff", 38, "700");
    
    const achievementGradient = ctx.createLinearGradient(0, 700, 0, 760);
    achievementGradient.addColorStop(0, "#FF6B9D");
    achievementGradient.addColorStop(1, "#8B5CF6");
    
    drawProText(certificateType.title.toUpperCase(), 800, 690, achievementGradient, 64, "900", {
      glow: "rgba(255, 107, 157, 0.9)",
      stroke: "#000000",
      strokeWidth: 2
    });

    // Enhanced achievement level
    drawProText("ACHIEVEMENT LEVEL: ABSOLUTELY LEGENDARY", 800, 780, "#FFD700", 32, "800", {
      glow: "rgba(255, 215, 0, 0.9)",
      stroke: "#000000",
      strokeWidth: 2
    });

    // Enhanced funny quote
    drawProText("\"Because life is too short to be serious all the time!\"", 800, 840, "#ffffff", 28, "600");
  }

  // Enhanced skill points
  drawProText("SKILL POINTS EARNED: 9999+ | HUMOR LEVEL: MAXIMUM", 800, 900, "#00FF7F", 26, "700");

  // Enhanced footer
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long", 
    day: "numeric"
  });
  
  ctx.textAlign = "left";
  drawProText(`Issued: ${currentDate}`, 150, 1020, "#ffffff", 28, "700");
  
  ctx.textAlign = "right";
  drawProText(`Certified by: ${SITE_NAME}`, 1450, 1020, "#ffffff", 28, "700");
};

// Academic White Design (university diploma style) - Enhanced Quality
export const generateAcademicWhiteDesign = (name: string, certificateType: CertificateType, canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Higher resolution for better quality
  canvas.width = 1600;
  canvas.height = 1200;

  // White background with subtle texture
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 1600, 1200);

  // Add subtle paper texture
  const addTexturePattern = () => {
    for (let i = 0; i < 200; i++) {
      ctx.fillStyle = `rgba(248, 250, 252, ${Math.random() * 0.3})`;
      ctx.fillRect(Math.random() * 1600, Math.random() * 1200, 2, 2);
    }
  };
  addTexturePattern();

  // Enhanced border with shadow effect
  ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 5;
  ctx.strokeStyle = "#1A202C";
  ctx.lineWidth = 6;
  ctx.strokeRect(60, 60, 1480, 1080);
  
  // Multiple decorative borders for elegance
  ctx.shadowColor = "transparent";
  ctx.strokeStyle = "#2D3748";
  ctx.lineWidth = 3;
  ctx.strokeRect(80, 80, 1440, 1040);
  
  ctx.strokeStyle = "#4A5568";
  ctx.lineWidth = 1;
  ctx.strokeRect(100, 100, 1400, 1000);

  const drawEnhancedText = (text: string, x: number, y: number, color: string, size: number, weight: string = "normal", font: string = "Times New Roman", effects: any = {}) => {
    ctx.save();
    // Better font fallback for academic style
    ctx.font = `${weight} ${size}px "Times New Roman", Georgia, serif`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Add text shadow for better readability
    if (effects.shadow) {
      ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
      ctx.shadowBlur = 3;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
    }
    
    // Add stroke for important text
    if (effects.stroke) {
      ctx.strokeStyle = effects.stroke;
      ctx.lineWidth = effects.strokeWidth || 1;
      ctx.strokeText(text, x, y);
    }
    
    ctx.fillText(text, x, y);
    ctx.restore();
  };

  // Enhanced University-style header without problematic emojis
  drawEnhancedText("UNIVERSITY OF COMEDY", 800, 180, "#1A202C", 56, "900", "Times New Roman", { shadow: true, stroke: "rgba(255,255,255,0.5)", strokeWidth: 2 });
  drawEnhancedText("Department of Hilarious Studies & Advanced Meme Research", 800, 230, "#2D3748", 24, "700", "Times New Roman", { shadow: true });
  drawEnhancedText("\"Where Learning Meets Laughter\"", 800, 270, "#4A5568", 20, "600", "Times New Roman");

  // Enhanced decorative elements
  const drawOrnament = (x: number, y: number) => {
    ctx.strokeStyle = "#2D3748";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#4A5568";
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fill();
  };
  
  drawOrnament(300, 320);
  drawOrnament(1300, 320);

  // Diploma text with enhanced typography
  drawEnhancedText("This diploma hereby certifies that", 800, 360, "#1A202C", 30, "600", "Times New Roman", { shadow: true });

  if (name.trim()) {
    // Enhanced name with gradient effect simulation
    drawEnhancedText(name.trim().toUpperCase(), 800, 460, "#0F172A", 72, "900", "Times New Roman", { 
      shadow: true, 
      stroke: "rgba(45, 55, 72, 0.3)", 
      strokeWidth: 2 
    });
    
    // Enhanced decorative line under name
    const gradient = ctx.createLinearGradient(250, 520, 1350, 520);
    gradient.addColorStop(0, "rgba(45, 55, 72, 0.2)");
    gradient.addColorStop(0.5, "#2D3748");
    gradient.addColorStop(1, "rgba(45, 55, 72, 0.2)");
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(250, 520);
    ctx.lineTo(1350, 520);
    ctx.stroke();
  }

  if (certificateType) {
    drawEnhancedText("has successfully completed all requirements and demonstrated", 800, 580, "#1A202C", 26, "600", "Times New Roman", { shadow: true });
    drawEnhancedText("EXCEPTIONAL MASTERY in the field of", 800, 620, "#1A202C", 28, "800", "Times New Roman", { shadow: true });
    drawEnhancedText(certificateType.title.toUpperCase(), 800, 700, "#1A365D", 52, "900", "Times New Roman", { 
      shadow: true, 
      stroke: "rgba(26, 54, 93, 0.3)", 
      strokeWidth: 2 
    });
    
    // Enhanced funny academic credentials with better contrast
    drawEnhancedText("GRADE: A++ (Maximum Hilarity Achieved)", 800, 760, "#C53030", 22, "700", "Times New Roman", { shadow: true });
    drawEnhancedText("GPA: 4.20/4.20 (Perfect Score in Fun)", 800, 800, "#2F855A", 22, "700", "Times New Roman", { shadow: true });
  }

  // Enhanced academic seals and signatures area
  drawEnhancedText("with all the rights, privileges, and unlimited dad joke permissions", 800, 860, "#1A202C", 22, "600", "Times New Roman", { shadow: true });
  drawEnhancedText("\"Now go forth and spread joy to the world!\"", 800, 900, "#6B46C1", 22, "700", "Times New Roman", { shadow: true });

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long", 
    day: "numeric"
  });

  // Enhanced signature lines with better positioning
  ctx.textAlign = "left";
  drawEnhancedText("Dr. Chuckles McFunnyface", 240, 980, "#1A202C", 20, "700", "Times New Roman", { shadow: true });
  drawEnhancedText("Dean of Comedy & Chief Humor Officer", 240, 1010, "#2D3748", 16, "600", "Times New Roman");
  drawEnhancedText(`Date: ${currentDate}`, 240, 1040, "#1A202C", 18, "600", "Times New Roman");
  
  ctx.textAlign = "right";
  drawEnhancedText(`${SITE_NAME}`, 1360, 980, "#1A202C", 20, "700", "Times New Roman", { shadow: true });
  drawEnhancedText("Official Certificate Authority", 1360, 1010, "#2D3748", 16, "600", "Times New Roman");
  drawEnhancedText("Laughter Guaranteed Since 2024", 1360, 1040, "#1A202C", 16, "600", "Times New Roman");
};

// Modern Gradient Design - Enhanced Quality
export const generateModernGradientDesign = (name: string, certificateType: CertificateType, canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Higher resolution for better gradient quality
  canvas.width = 1600;
  canvas.height = 1200;

  // Enhanced vibrant gradient background
  const bgGradient = ctx.createLinearGradient(0, 0, 1600, 1200);
  bgGradient.addColorStop(0, "#667eea");
  bgGradient.addColorStop(0.3, "#764ba2");
  bgGradient.addColorStop(0.7, "#f093fb");
  bgGradient.addColorStop(1, "#ff9a9e");
  
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, 1600, 1200);

  // Enhanced overlay for better text readability
  ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
  ctx.fillRect(0, 0, 1600, 1200);

  const drawEnhancedModernText = (text: string, x: number, y: number, color: string, size: number, weight: string = "normal", effects: any = {}) => {
    ctx.save();
    ctx.font = `${weight} ${size}px 'Inter', -apple-system, BlinkMacSystemFont, sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Enhanced text shadow for better visibility
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    
    // Add stroke for important text
    if (effects.stroke) {
      ctx.strokeStyle = effects.stroke;
      ctx.lineWidth = effects.strokeWidth || 2;
      ctx.strokeText(text, x, y);
    }
    
    ctx.fillText(text, x, y);
    ctx.restore();
  };

  // Enhanced modern header
  drawEnhancedModernText("🚀 ACHIEVEMENT UNLOCKED 🚀", 800, 150, "#ffffff", 64, "900", { 
    stroke: "rgba(0, 0, 0, 0.7)", 
    strokeWidth: 3 
  });
  drawEnhancedModernText("✨ LEVEL UP COMPLETE ✨", 800, 210, "#FFD700", 32, "700", { 
    stroke: "rgba(0, 0, 0, 0.5)", 
    strokeWidth: 2 
  });
  
  if (name.trim()) {
    drawEnhancedModernText(name.trim().toUpperCase(), 800, 300, "#ffffff", 85, "900", { 
      stroke: "rgba(0, 0, 0, 0.8)", 
      strokeWidth: 4 
    });
    drawEnhancedModernText("🎮 PLAYER STATUS: LEGENDARY 🎮", 800, 375, "#00FF7F", 28, "700", { 
      stroke: "rgba(0, 0, 0, 0.6)", 
      strokeWidth: 2 
    });
  }

  drawEnhancedModernText("HAS MASTERED THE EPIC ART OF", 800, 450, "#ffffff", 32, "700", { 
    stroke: "rgba(0, 0, 0, 0.5)", 
    strokeWidth: 2 
  });

  if (certificateType) {
    drawEnhancedModernText(certificateType.title.toUpperCase(), 800, 555, "#FFD700", 58, "900", { 
      stroke: "rgba(0, 0, 0, 0.8)", 
      strokeWidth: 3 
    });
    drawEnhancedModernText("🏆 DIFFICULTY LEVEL: NIGHTMARE MODE CONQUERED 🏆", 800, 630, "#FF69B4", 26, "700", { 
      stroke: "rgba(0, 0, 0, 0.6)", 
      strokeWidth: 2 
    });
    drawEnhancedModernText("💎 RARITY: ULTRA RARE ACHIEVEMENT 💎", 800, 675, "#00FFFF", 24, "700", { 
      stroke: "rgba(0, 0, 0, 0.6)", 
      strokeWidth: 2 
    });
    drawEnhancedModernText("⚡ POWER LEVEL: OVER 9000! ⚡", 800, 720, "#FFD700", 28, "800", { 
      stroke: "rgba(0, 0, 0, 0.7)", 
      strokeWidth: 2 
    });
  }

  drawEnhancedModernText("🎊 Congratulations! You are now officially awesome! 🎊", 800, 795, "#ffffff", 30, "600", { 
    stroke: "rgba(0, 0, 0, 0.5)", 
    strokeWidth: 2 
  });
  drawEnhancedModernText("🌟 Share this epic achievement with the world! 🌟", 800, 840, "#00FF7F", 24, "600", { 
    stroke: "rgba(0, 0, 0, 0.5)", 
    strokeWidth: 2 
  });

  const currentDate = new Date().toLocaleDateString();
  drawEnhancedModernText(`⏰ Achievement Unlocked: ${currentDate} | 🎯 Next Level Loading... 🎯`, 800, 930, "#ffffff", 22, "500");
  drawEnhancedModernText(`🏅 Certified by: ${SITE_NAME} - Your Gateway to Greatness! 🏅`, 800, 975, "#FFD700", 22, "700");
};

// Vintage Parchment Design - Enhanced Quality
export const generateVintageParchmentDesign = (name: string, certificateType: CertificateType, canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Higher resolution for better texture quality
  canvas.width = 1600;
  canvas.height = 1200;

  // Enhanced parchment background with better texture
  const parchmentGradient = ctx.createRadialGradient(800, 600, 300, 800, 600, 1000);
  parchmentGradient.addColorStop(0, "#F7F3E9");
  parchmentGradient.addColorStop(0.7, "#E8D5B7");
  parchmentGradient.addColorStop(1, "#D4C4A0");
  
  ctx.fillStyle = parchmentGradient;
  ctx.fillRect(0, 0, 1600, 1200);

  // Enhanced aged edges effect with gradient
  const ageGradient = ctx.createLinearGradient(0, 0, 80, 0);
  ageGradient.addColorStop(0, "rgba(139, 69, 19, 0.3)");
  ageGradient.addColorStop(1, "rgba(139, 69, 19, 0.05)");
  
  ctx.fillStyle = ageGradient;
  ctx.fillRect(0, 0, 80, 1200);
  ctx.fillRect(1520, 0, 80, 1200);
  ctx.fillRect(0, 0, 1600, 80);
  ctx.fillRect(0, 1120, 1600, 80);

  const drawEnhancedVintageText = (text: string, x: number, y: number, color: string, size: number, weight: string = "normal", effects: any = {}) => {
    ctx.save();
    ctx.font = `${weight} ${size}px 'Georgia', 'Times New Roman', serif`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Add vintage text shadow
    if (effects.shadow) {
      ctx.shadowColor = "rgba(139, 69, 19, 0.3)";
      ctx.shadowBlur = 2;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
    }
    
    ctx.fillText(text, x, y);
    ctx.restore();
  };

  // Enhanced ornate header
  drawEnhancedVintageText("📜 ~ CERTIFICATE OF EXCELLENCE ~ 📜", 800, 150, "#654321", 48, "900", { shadow: true });
  drawEnhancedVintageText("🏰 Ye Olde Academy of Legendary Deeds 🏰", 800, 200, "#8B4513", 24, "700", { shadow: true });
  drawEnhancedVintageText("⚔️ Est. 2024 - Where Legends Are Born ⚔️", 800, 240, "#A0522D", 20, "600", { shadow: true });

  // Enhanced decorative flourish
  ctx.strokeStyle = "#8B4513";
  ctx.lineWidth = 3;
  ctx.shadowColor = "rgba(139, 69, 19, 0.5)";
  ctx.shadowBlur = 5;
  ctx.beginPath();
  ctx.moveTo(400, 285);
  ctx.quadraticCurveTo(800, 260, 1200, 285);
  ctx.stroke();
  ctx.shadowColor = "transparent";

  drawEnhancedVintageText("🎪 Be it known throughout the realm that 🎪", 800, 330, "#654321", 30, "700", { shadow: true });

  if (name.trim()) {
    drawEnhancedVintageText(name.trim().toUpperCase(), 800, 435, "#2F1B14", 67, "900", { shadow: true });
    drawEnhancedVintageText("🌟 Bearer of Ancient Wisdom & Modern Humor 🌟", 800, 495, "#8B4513", 22, "700", { shadow: true });
  }

  drawEnhancedVintageText("hath demonstrated unparalleled mastery in ye olde art of", 800, 555, "#654321", 28, "600", { shadow: true });

  if (certificateType) {
    drawEnhancedVintageText(certificateType.title.toUpperCase(), 800, 630, "#8B4513", 48, "900", { shadow: true });
    drawEnhancedVintageText("🏅 RANK ACHIEVED: Grand Master of Mirth 🏅", 800, 690, "#DAA520", 24, "700", { shadow: true });
    drawEnhancedVintageText("⭐ LEGEND STATUS: Confirmed by Royal Decree ⭐", 800, 727, "#B8860B", 22, "700", { shadow: true });
  }

  drawEnhancedVintageText("and is hereby granted all privileges, honors, and unlimited meme rights", 800, 787, "#654321", 24, "600", { shadow: true });
  drawEnhancedVintageText("🎭 \"May thy humor be eternal and thy jokes forever fresh!\" 🎭", 800, 832, "#800080", 22, "700", { shadow: true });

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long", 
    day: "numeric"
  });

  drawEnhancedVintageText(`🗓️ Sealed this day: ${currentDate}`, 800, 900, "#654321", 22, "600", { shadow: true });
  drawEnhancedVintageText(`👑 By Royal Authority of ${SITE_NAME} 👑`, 800, 945, "#654321", 20, "600", { shadow: true });
  drawEnhancedVintageText("🔥 \"In Laughter We Trust\" - Official Motto 🔥", 800, 990, "#8B4513", 20, "700", { shadow: true });
};

// Minimalist Clean Design - Enhanced Quality
export const generateMinimalistCleanDesign = (name: string, certificateType: CertificateType, canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Higher resolution for crisp text
  canvas.width = 1600;
  canvas.height = 1200;

  // Premium white background with subtle gradient
  const bgGradient = ctx.createLinearGradient(0, 0, 0, 1200);
  bgGradient.addColorStop(0, "#ffffff");
  bgGradient.addColorStop(1, "#fafafa");
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, 1600, 1200);

  // Enhanced minimal border with subtle shadow
  ctx.shadowColor = "rgba(0, 0, 0, 0.05)";
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 10;
  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 3;
  ctx.strokeRect(120, 120, 1360, 960);
  
  // Inner accent border
  ctx.shadowColor = "transparent";
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  ctx.strokeRect(140, 140, 1320, 920);

  const drawEnhancedCleanText = (text: string, x: number, y: number, color: string, size: number, weight: string = "normal", effects: any = {}) => {
    ctx.save();
    // Better font system for clean design
    ctx.font = `${weight} ${size}px -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Enhanced text rendering with subtle shadow
    if (effects.shadow) {
      ctx.shadowColor = "rgba(0, 0, 0, 0.08)";
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 2;
    }
    
    // Letter spacing simulation for premium look
    if (effects.letterSpacing) {
      const chars = text.split('');
      let currentX = x - (ctx.measureText(text).width / 2);
      chars.forEach((char, index) => {
        ctx.fillText(char, currentX, y);
        currentX += ctx.measureText(char).width + effects.letterSpacing;
      });
    } else {
      ctx.fillText(text, x, y);
    }
    
    ctx.restore();
  };

  // Enhanced minimal header with perfect typography - no emojis
  drawEnhancedCleanText("CERTIFICATE OF ACHIEVEMENT", 800, 240, "#0f172a", 48, "700", { shadow: true, letterSpacing: 2 });
  drawEnhancedCleanText("Excellence Recognized", 800, 290, "#475569", 22, "500", { shadow: true });

  // Subtle decorative element
  const drawMinimalOrnament = () => {
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(700, 330);
    ctx.lineTo(900, 330);
    ctx.stroke();
    
    // Small accent dots
    ctx.fillStyle = "#6366f1";
    ctx.beginPath();
    ctx.arc(690, 330, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(910, 330, 3, 0, Math.PI * 2);
    ctx.fill();
  };
  drawMinimalOrnament();

  if (name.trim()) {
    // Enhanced name with perfect weight and spacing
    drawEnhancedCleanText(name.trim().toUpperCase(), 800, 420, "#0f172a", 72, "800", { 
      shadow: true, 
      letterSpacing: 3 
    });
    drawEnhancedCleanText("Certified Professional", 800, 480, "#6366f1", 24, "600", { shadow: true });
  }

  drawEnhancedCleanText("has successfully demonstrated mastery in", 800, 560, "#374151", 28, "500", { shadow: true });

  if (certificateType) {
    // Enhanced certificate type with premium styling
    drawEnhancedCleanText(certificateType.title.toUpperCase(), 800, 640, "#1e40af", 42, "700", { 
      shadow: true, 
      letterSpacing: 2 
    });
    drawEnhancedCleanText("Performance Level: Outstanding", 800, 700, "#059669", 22, "600", { shadow: true });
    drawEnhancedCleanText("Status: Officially Awesome", 800, 740, "#7c3aed", 22, "600", { shadow: true });
  }

  // Enhanced line decoration with gradient
  const lineGradient = ctx.createLinearGradient(500, 780, 1100, 780);
  lineGradient.addColorStop(0, "rgba(99, 102, 241, 0.2)");
  lineGradient.addColorStop(0.5, "#6366f1");
  lineGradient.addColorStop(1, "rgba(99, 102, 241, 0.2)");
  
  ctx.strokeStyle = lineGradient;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(500, 780);
  ctx.lineTo(1100, 780);
  ctx.stroke();

  // Enhanced footer content
  drawEnhancedCleanText("\"Simplicity is the ultimate sophistication\"", 800, 840, "#64748b", 22, "500", { shadow: true });
  drawEnhancedCleanText("Congratulations on this remarkable achievement!", 800, 880, "#1e293b", 24, "600", { shadow: true });

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long", 
    day: "numeric"
  });
  
  // Enhanced footer with better spacing
  drawEnhancedCleanText(`Certified: ${currentDate}`, 800, 940, "#64748b", 20, "500");
  drawEnhancedCleanText(`Issued by: ${SITE_NAME}`, 800, 980, "#64748b", 18, "500");
  drawEnhancedCleanText("Where Excellence Meets Humor", 800, 1020, "#9ca3af", 16, "500");
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
