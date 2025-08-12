import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CertificateType, CertificateDesign, CERTIFICATE_DESIGNS, CERTIFICATE_TYPES } from "@/types/certificate";
import { CertificateForm } from "@/components/CertificateForm";
import { CertificatePreview } from "@/components/CertificatePreview";
import { DownloadButtons } from "@/components/DownloadButtons";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Award, ArrowLeft } from "lucide-react";

export const CertificateGenerator = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateType | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<CertificateDesign | null>(null);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [showCertificateTypes, setShowCertificateTypes] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const certificateTypeRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);

  const isDownloadDisabled = !name.trim() || !selectedCertificate || !selectedDesign;

  // Handle proceeding to certificate types
  const handleProceedToCertificateTypes = () => {
    setShowCertificateTypes(true);
    setTimeout(() => {
      certificateTypeRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }, 100);
  };

  // Auto-scroll to design selection when certificate type is selected
  useEffect(() => {
    if (selectedCertificate && designRef.current) {
      setTimeout(() => {
        designRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }, 300);
    }
  }, [selectedCertificate]);

  // Auto-scroll to preview when design is selected and show download button
  useEffect(() => {
    if (name.trim() && selectedCertificate && selectedDesign && previewRef.current) {
      setTimeout(() => {
        previewRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
        setShowDownloadButton(true);
      }, 300);
    }
  }, [name, selectedCertificate, selectedDesign]);

  const handleDownloadClick = () => {
    if (downloadRef.current) {
      downloadRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      {/* Navigation Header */}
      <header className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-1 sm:space-x-2 p-2 sm:px-3"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <span className="text-sm sm:text-lg font-semibold">fakeskills.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            😂 Funny Certificate Generator
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Create hilarious certificates to boost your resume with humor! Choose from over 20 funny certificate types.
          </p>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdPlaceholder id="ad-top" size="leaderboard" className="mx-auto max-w-4xl" />
        </div>

        {/* Step 1: Name Input */}
        <div ref={nameRef} className="max-w-2xl mx-auto mb-16">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Step 1: Enter Your Name</h2>
            <p className="text-muted-foreground">Start by entering your name for the certificate</p>
          </div>
          <Card className="p-6">
            <Label htmlFor="name" className="text-base font-semibold">
              Your Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name here"
              className="mt-2 text-lg h-12"
            />
            
            {name.trim() && (
              <div className="mt-4 text-center">
                <Button 
                  onClick={handleProceedToCertificateTypes}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 py-2 font-semibold transition-all duration-300"
                >
                  Next: Choose Certificate Type →
                </Button>
              </div>
            )}
          </Card>
        </div>

        {/* Step 2: Certificate Type Selection */}
        {showCertificateTypes && (
          <div ref={certificateTypeRef} className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Step 2: Choose Your Certificate Type</h2>
              <p className="text-muted-foreground">Select the type of funny certificate you want</p>
            </div>
            <Card className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-80 overflow-y-auto pr-2">
                {CERTIFICATE_TYPES.map((cert) => (
                  <button
                    key={cert.id}
                    onClick={() => setSelectedCertificate(cert)}
                    className={`group relative p-4 text-left rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                      selectedCertificate?.id === cert.id
                        ? "border-primary bg-gradient-to-br from-primary/20 to-accent/10 shadow-fun"
                        : "border-border bg-card/50 hover:border-primary/50 hover:bg-card/80"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-3 h-3 rounded-full mt-1 transition-colors duration-300 ${
                        selectedCertificate?.id === cert.id
                          ? "bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
                          : "bg-muted-foreground/30 group-hover:bg-primary/50"
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold text-sm leading-tight transition-colors duration-300 ${
                          selectedCertificate?.id === cert.id
                            ? "text-primary"
                            : "text-foreground group-hover:text-primary"
                        }`}>
                          {cert.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to select
                        </div>
                      </div>
                    </div>
                    {selectedCertificate?.id === cert.id && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Step 3: Design Selection */}
        {selectedCertificate && (
          <div ref={designRef} className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Step 3: Choose Your Design</h2>
              <p className="text-muted-foreground">Pick a design style for your certificate</p>
            </div>
            <Card className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CERTIFICATE_DESIGNS.map((design) => (
                  <button
                    key={design.id}
                    onClick={() => setSelectedDesign(design)}
                    className={`group relative p-4 text-left rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                      selectedDesign?.id === design.id
                        ? "border-primary bg-gradient-to-br from-primary/20 to-accent/10 shadow-fun"
                        : "border-border bg-card/50 hover:border-primary/50 hover:bg-card/80"
                    }`}
                  >
                    {/* Most Popular Tag */}
                    {design.id === "academic-white" && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-accent to-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg z-10">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="flex items-start space-x-3">
                      <div className={`w-3 h-3 rounded-full mt-1 transition-colors duration-300 ${
                        selectedDesign?.id === design.id
                          ? "bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
                          : "bg-muted-foreground/30 group-hover:bg-primary/50"
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold text-sm leading-tight transition-colors duration-300 ${
                          selectedDesign?.id === design.id
                            ? "text-primary"
                            : "text-foreground group-hover:text-primary"
                        }`}>
                          {design.name}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {design.description}
                        </div>
                        <div className={`text-xs mt-1 font-medium transition-colors duration-300 ${
                          selectedDesign?.id === design.id
                            ? "text-primary"
                            : "text-accent-foreground group-hover:text-primary"
                        }`}>
                          {design.preview}
                        </div>
                      </div>
                    </div>
                    {selectedDesign?.id === design.id && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Step 4: Preview */}
        {name.trim() && selectedCertificate && selectedDesign && (
          <div ref={previewRef} className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Step 4: Preview Your Certificate</h2>
              <p className="text-muted-foreground">Here's how your certificate will look</p>
            </div>
            <CertificatePreview
              name={name}
              certificateType={selectedCertificate}
              selectedDesign={selectedDesign}
              canvasRef={canvasRef}
            />
            
            {/* Want to Download Button */}
            {showDownloadButton && (
              <div className="text-center mt-8">
                <Button 
                  onClick={handleDownloadClick}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🚀 Want to Download? Click Here!
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Mid Content Ad */}
        <div className="mt-12 mb-12">
          <AdPlaceholder id="ad-mid-content" size="leaderboard" className="mx-auto max-w-4xl" />
        </div>

        {/* Download Section */}
        <div ref={downloadRef} className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Step 5: Download Your Certificate</h2>
            <p className="text-muted-foreground">
              {isDownloadDisabled
                ? "Complete all steps above to enable downloads"
                : "Choose your preferred format below"}
            </p>
          </div>

          <DownloadButtons
            canvasRef={canvasRef}
            certificateName={name}
            certificateType={selectedCertificate!}
            selectedDesign={selectedDesign!}
            isDisabled={isDownloadDisabled}
          />

          {/* Download Section Ad */}
          <div className="mt-8">
            <AdPlaceholder id="ad-download" size="banner" className="mx-auto max-w-3xl" />
          </div>
        </div>

        {/* Bottom Ad */}
        <div className="mt-12">
          <AdPlaceholder id="ad-bottom" size="leaderboard" className="mx-auto max-w-4xl" />
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground">
          <div className="space-y-2">
            <p className="text-sm">
              Made with ❤️ for professional recognition • Share your achievements!
            </p>
            <p className="text-xs">
              High-quality certificates for official use
            </p>
          </div>
        </footer>
      </div>

      {/* Hidden canvas for certificate generation */}
      <canvas
        ref={canvasRef}
        style={{ display: "none" }}
        width={1200}
        height={800}
      />
    </div>
  );
};