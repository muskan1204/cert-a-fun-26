import { useEffect, useRef, useState } from "react";
import { CertificateType, CertificateDesign, SITE_NAME } from "@/types/certificate";
import { generateCertificateDesign } from "@/components/CertificateDesigns";

interface CertificatePreviewProps {
  name: string;
  certificateType: CertificateType | null;
  selectedDesign: CertificateDesign | null;
  canvasRef?: React.RefObject<HTMLCanvasElement>;
}


// Function to generate certificate without watermark for downloads
export const generateCleanCertificate = (name: string, certificateType: CertificateType, selectedDesign: CertificateDesign, canvas: HTMLCanvasElement) => {
  // Use the same design system but without watermark
  generateCertificateDesign(name, certificateType, selectedDesign, canvas);
};

export const CertificatePreview = ({ name, certificateType, selectedDesign, canvasRef: externalCanvasRef }: CertificatePreviewProps) => {
  const internalCanvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = externalCanvasRef || internalCanvasRef;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !certificateType || !selectedDesign) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsLoading(true);

    // Generate the certificate design directly
    generateCertificateDesign(name, certificateType, selectedDesign, canvas);

    // Add preview watermark overlay
    ctx.save();
    
    // Semi-transparent overlay
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, 1200, 800);
    
    // Large diagonal watermark
    ctx.translate(600, 400);
    ctx.rotate(-Math.PI / 6); // -30 degrees
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 120px Arial";
    
    // Watermark text with transparency
    const watermarkOpacity = selectedDesign.id === "academic-white" || selectedDesign.id === "minimalist-clean" ? 0.08 : 0.15;
    ctx.fillStyle = `rgba(${selectedDesign.id === "academic-white" || selectedDesign.id === "minimalist-clean" ? "0, 0, 0" : "255, 255, 255"}, ${watermarkOpacity})`;
    ctx.fillText("PREVIEW", 0, -60);
    ctx.fillText(`${SITE_NAME}`, 0, 60);
    
    ctx.restore();

    setIsLoading(false);
  }, [name, certificateType, selectedDesign]);

  if (!certificateType || !selectedDesign) {
    return (
      <div className="w-full aspect-[3/2] bg-muted rounded-lg border-2 border-dashed border-border flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <div className="text-lg font-semibold mb-2">Select Certificate & Design</div>
          <div className="text-sm">Choose a certificate type and design to preview</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="bg-card rounded-lg shadow-card border p-2 sm:p-4">
        <canvas
          ref={canvasRef}
          className="w-full h-auto rounded-lg shadow-lg"
          style={{ aspectRatio: "3/2", maxWidth: "100%" }}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-background/50 rounded-lg flex items-center justify-center">
            <div className="text-muted-foreground text-sm">Loading certificate...</div>
          </div>
        )}
      </div>
    </div>
  );
};

