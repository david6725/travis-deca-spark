import { Instagram, MessageSquare, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Travis DECA
            </h3>
            <p className="text-sm text-background/80">
              Emerging Leaders. Future Entrepreneurs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#opportunities"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Opportunities
                </a>
              </li>
              <li>
                <a
                  href="#calendar"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://instagram.com/travisdeca"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://remind.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Remind"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a
                href="mailto:jwilliams@travishs.edu"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-background/80">
              Advisor: Ms. Jennifer Williams
              <br />
              jwilliams@travishs.edu
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>
            &copy; {currentYear} Travis High School DECA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
