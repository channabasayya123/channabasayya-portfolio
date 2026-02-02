import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {currentYear} Channabasayya Hiremath. All rights reserved.
          </p>
          <p className="text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400 fill-red-400" /> for
            placements
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
