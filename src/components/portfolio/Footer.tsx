import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-8 bg-foreground text-background/80"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.p
            className="text-sm"
            whileHover={{ scale: 1.02 }}
          >
            © {currentYear} Channabasayya Hiremath. All rights reserved.
          </motion.p>
          <motion.p
            className="text-sm flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            Made with{" "}
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-400 fill-red-400" />
            </motion.span>{" "}
            for placements
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
