import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Award, Download, Palette, Zap, Users, Shield, Briefcase, Smile, Laugh } from "lucide-react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import certTemplate1 from "@/assets/cert-template-1.jpg";
import certTemplate2 from "@/assets/cert-template-2.jpg";
import certTemplate3 from "@/assets/cert-template-3.jpg";
import { CERTIFICATE_TYPES } from "@/types/certificate";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Laugh className="h-8 w-8" />,
      title: "Hilarious Certificate Types",
      description: "Over 20 funny certificate types to boost your resume with humor and creativity."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Resume Boosters",
      description: "Add some fun to your professional profile with these tongue-in-cheek achievements."
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Instant Download",
      description: "Generate and download your funny certificates in seconds, ready to share or print."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Quick & Easy",
      description: "Just enter your name, pick a certificate type, and you're done - it's that simple!"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Media Ready",
      description: "Perfect for LinkedIn, social media posts, or just to make your friends laugh."
    },
    {
      icon: <Smile className="h-8 w-8" />,
      title: "Stress Relief",
      description: "Sometimes you just need to laugh at yourself - these certificates are perfect for that."
    }
  ];

  const sampleCertificates = [
    {
      image: certTemplate1,
      title: "Professional Look",
      description: "Funny certificates that still look professional"
    },
    {
      image: certTemplate2, 
      title: "Clean Design",
      description: "Simple and elegant for any social platform"
    },
    {
      image: certTemplate3,
      title: "Eye-Catching",
      description: "Stand out from the crowd with humor"
    }
  ];

  // Split certificates into groups for better display
  const certificateGroups = [
    CERTIFICATE_TYPES.slice(0, 7),
    CERTIFICATE_TYPES.slice(7, 14),
    CERTIFICATE_TYPES.slice(14)
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      {/* Header */}
      <header className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Laugh className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                fake skills
              </h1>
            </div>
            <Button 
              onClick={() => navigate('/create')}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-sm sm:text-base px-4 py-2 sm:px-6"
              size="sm"
            >
              <span className="hidden sm:inline">Create Funny Certificate</span>
              <span className="sm:hidden">Create Certificate</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Top Ad */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <AdPlaceholder id="ad-home-top" size="leaderboard" className="mx-auto max-w-4xl" />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 text-xs sm:text-sm">
            😂 Funny Resume Boosters
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Create Hilarious
            <br />
            Certificates for Your Resume
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
            Stand out from the crowd with funny, satirical certificates that showcase your "unique skills". 
            Perfect for LinkedIn, social media, or just making people laugh!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button 
              size="lg" 
              onClick={() => navigate('/create')}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
            >
              <Laugh className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Create Your Funny Certificate
            </Button>
            <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
              See Examples
            </Button>
          </div>
        </div>
      </section>

      {/* Sample Certificates */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Sample Certificate Designs
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Professional-looking templates for your hilarious achievements
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {sampleCertificates.map((cert, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="aspect-[3/2] mb-4 rounded-lg overflow-hidden border">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mid Content Ad */}
          <div className="mt-12">
            <AdPlaceholder id="ad-home-mid" size="banner" className="mx-auto max-w-3xl" />
          </div>
        </div>
      </section>

      {/* All Available Certificates */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              All Available Funny Certificates
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Choose from {CERTIFICATE_TYPES.length} hilarious certificate types to add to your resume
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {certificateGroups.map((group, groupIndex) => (
              <Card key={groupIndex} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-center">Certificate Collection {groupIndex + 1}</h3>
                  <div className="space-y-2">
                    {group.map((cert) => (
                      <div key={cert.id} className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary/50 transition-colors">
                        <Award className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{cert.title}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              onClick={() => navigate('/create')}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            >
              <Laugh className="mr-2 h-5 w-5" />
              Pick Your Certificate Now!
            </Button>
          </div>

          {/* Certificate List Ad */}
          <div className="mt-12">
            <AdPlaceholder id="ad-home-certificates" size="rectangle" className="mx-auto" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Why Choose fake skills?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              The best way to add humor to your professional profile
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center text-primary group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Become Certified in Something Ridiculous?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
            Join thousands of people who've added some humor to their professional profiles. 
            Your LinkedIn connections will never expect this!
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/create')}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto max-w-sm mx-auto"
          >
            <Laugh className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Create My Funny Certificate
          </Button>

          {/* Bottom CTA Ad */}
          <div className="mt-12">
            <AdPlaceholder id="ad-home-bottom" size="leaderboard" className="mx-auto max-w-4xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-card/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Laugh className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">fake skills</span>
          </div>
          <p className="text-muted-foreground">
            Adding humor to professional profiles since today. All certificates are for entertainment purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;