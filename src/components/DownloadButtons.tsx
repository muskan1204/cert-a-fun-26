import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Share2 } from "lucide-react";
import { downloadAsPDF, showAdGate } from "@/utils/downloadUtils";
import { toast } from "sonner";
import { CertificateType } from "@/types/certificate";

interface DownloadButtonsProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  certificateName: string;
  certificateType: CertificateType;
  selectedDesign: any;
  isDisabled: boolean;
}

export const DownloadButtons = ({
  canvasRef,
  certificateName,
  certificateType,
  selectedDesign,
  isDisabled,
}: DownloadButtonsProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handlePDFDownload = async () => {
    if (!canvasRef.current || !certificateName) return;

    setIsDownloading(true);
    try {
      // Show ad gate before PDF download
      const adCompleted = await showAdGate();
      
      if (adCompleted) {
        await downloadAsPDF(
          canvasRef.current, 
          `certificate-${certificateName.replace(/\s+/g, "-").toLowerCase()}`,
          certificateName,
          certificateType,
          selectedDesign
        );
        toast.success("Certificate downloaded as PDF!");
      } else {
        toast.error("PDF download cancelled - Please watch the ad to unlock download.");
      }
    } catch (error) {
      toast.error("Failed to download PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleViralShare = () => {
    const shareText = "I just got certified 😂 make yours 👉 fakeskills.com";
    
    if (navigator.share) {
      navigator.share({
        text: shareText,
      }).then(() => {
        toast.success("Shared successfully!");
      }).catch(() => {
        // Fallback to clipboard
        copyToClipboard(shareText);
      });
    } else {
      copyToClipboard(shareText);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Viral message copied to clipboard!");
    }).catch(() => {
      toast.error("Failed to copy message. Please try again.");
    });
  };

  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={handlePDFDownload}
          disabled={isDisabled || isDownloading}
          size="lg"
          className="flex-1 sm:flex-none bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
        >
          <FileText className="w-5 h-5 mr-2" />
          {isDownloading ? "Processing..." : "Download PDF (Watch Ad)"}
        </Button>
        
        <Button
          onClick={handleViralShare}
          disabled={isDisabled}
          size="lg"
          variant="fun"
          className="flex-1 sm:flex-none"
        >
          <Share2 className="w-5 h-5 mr-2" />
          Share Your Achievement 🚀
        </Button>
      </div>
      
      <div className="text-center text-sm text-muted-foreground">
        <p>🎬 Watch a short ad to unlock your certificate download</p>
        <p className="text-xs">High-quality PDF • Print ready • Professional format</p>
      </div>
    </div>
  );
};