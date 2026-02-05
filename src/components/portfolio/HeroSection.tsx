import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Easing } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const easeInOut: Easing = "easeInOut";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};

const pulseAnimation = {
  initial: { scale: 1, opacity: 0.5 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center hero-gradient pt-20 overflow-hidden relative"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        variants={pulseAnimation}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        variants={pulseAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-primary font-medium mb-2 flex items-center gap-2"
            >
              <Sparkles size={16} className="animate-pulse" />
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Channabasayya{" "}
              <motion.span
                className="text-gradient inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              >
                Hiremath
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-blue-200 mb-6"
            >
              Final Year BCA Student | Web Developer Fresher
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-blue-100/80 max-w-lg mb-8 leading-relaxed"
            >
              A motivated BCA final-year student skilled in C, Java, Python, and
              modern web technologies. Passionate about problem-solving and
              building real-world IT solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="gap-2 group"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1xISZ4y4c4iRrbLRUyDsLmEUVSaCKdiMh/view?usp=drivesdk",
                      "_blank"
                    )
                  }
                >
                  <Download
                    size={18}
                    className="group-hover:animate-bounce"
                  />
                  Download Resume
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 group"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Mail
                    size={18}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              className="relative"
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 flex items-center justify-center p-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={profilePhoto}
                  alt="Channabasayya Hiremath"
                  className="w-64 h-64 md:w-88 md:h-88 rounded-full object-cover object-[center_15%] border-4 border-primary/30 shadow-2xl"
                  style={{ width: "90%", height: "90%" }}
                  whileHover={{ rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              {/* Decorative Elements with animations */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
              {/* Orbiting dots */}
              <motion.div
                className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "0 160px" }}
              />
              <motion.div
                className="absolute top-0 left-1/2 w-2 h-2 bg-primary/60 rounded-full"
                animate={{
                  rotate: -360,
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "0 180px" }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-blue-200 hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <motion.span
              className="text-sm"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll Down
            </motion.span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
