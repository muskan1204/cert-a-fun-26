import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { CertificateType, CERTIFICATE_TYPES, CertificateDesign, CERTIFICATE_DESIGNS } from "@/types/certificate";

interface CertificateFormProps {
  name: string;
  setName: (name: string) => void;
  selectedCertificate: CertificateType | null;
  setSelectedCertificate: (cert: CertificateType) => void;
  selectedDesign: CertificateDesign | null;
  setSelectedDesign: (design: CertificateDesign) => void;
}

export const CertificateForm = ({
  name,
  setName,
  selectedCertificate,
  setSelectedCertificate,
  selectedDesign,
  setSelectedDesign,
}: CertificateFormProps) => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="space-y-4">
          <div>
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
          </div>

          <div>
            <Label className="text-base font-semibold">
              Choose Certificate Design
            </Label>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                      <div className="text-xs text-accent-foreground mt-1 font-medium">
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
          </div>

          <div>
            <Label className="text-base font-semibold">
              Choose Your Funny Certificate
            </Label>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 max-h-80 sm:max-h-96 overflow-y-auto pr-2">
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
          </div>
        </div>
      </Card>
    </div>
  );
};