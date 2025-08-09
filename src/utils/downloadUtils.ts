import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { generateCleanCertificate } from "@/components/CertificatePreview";
import { CertificateType, CertificateDesign } from "@/types/certificate";

export const downloadAsPNG = async (canvas: HTMLCanvasElement, filename: string) => {
  try {
    // Convert canvas to blob
    return new Promise<void>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Failed to create image"));
          return;
        }

        // Create download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = `${filename}.png`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        resolve();
      }, "image/png", 1.0);
    });
  } catch (error) {
    throw new Error("Failed to download PNG");
  }
};

export const downloadAsPDF = async (
  canvas: HTMLCanvasElement, 
  filename: string, 
  name: string, 
  certificateType: CertificateType,
  selectedDesign: CertificateDesign
) => {
  try {
    // Create a new canvas for clean certificate without watermark
    const cleanCanvas = document.createElement("canvas");
    
    // Generate the clean certificate without watermark
    generateCleanCertificate(name, certificateType, selectedDesign, cleanCanvas);
    
    // Create PDF with certificate dimensions (landscape)
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [1200, 800]
    });

    // Convert clean canvas to data URL
    const imgData = cleanCanvas.toDataURL("image/png", 1.0);
    
    // Add image to PDF
    pdf.addImage(imgData, "PNG", 0, 0, 1200, 800);
    
    // Save PDF
    pdf.save(`${filename}.pdf`);
  } catch (error) {
    throw new Error("Failed to download PDF");
  }
};

export const showAdGate = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // Simulate ad loading/viewing for demo purposes
    const adModal = document.createElement("div");
    adModal.className = "fixed inset-0 bg-black/50 flex items-center justify-center z-50";
    adModal.innerHTML = `
      <div class="bg-white p-8 rounded-lg max-w-md mx-4 text-center">
        <h3 class="text-xl font-bold mb-4">Watch Ad to Download PDF</h3>
        <div class="bg-gray-200 h-32 rounded mb-4 flex items-center justify-center border-2 border-dashed">
          <span class="text-gray-600"><!-- Ad Content Placeholder --></span>
        </div>
        <div class="space-x-4">
          <button id="close-ad" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Skip
          </button>
          <button id="continue-download" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Continue Download
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(adModal);

    const closeBtn = adModal.querySelector("#close-ad");
    const continueBtn = adModal.querySelector("#continue-download");

    closeBtn?.addEventListener("click", () => {
      document.body.removeChild(adModal);
      resolve(false);
    });

    continueBtn?.addEventListener("click", () => {
      document.body.removeChild(adModal);
      resolve(true);
    });

    // Auto-continue after 3 seconds (simulating ad completion)
    setTimeout(() => {
      if (document.body.contains(adModal)) {
        document.body.removeChild(adModal);
        resolve(true);
      }
    }, 3000);
  });
};