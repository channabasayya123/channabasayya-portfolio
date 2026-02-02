import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Users, Brain } from "lucide-react";

const strengths = [
  { icon: Brain, label: "Problem Solving", description: "Strong analytical approach" },
  { icon: Lightbulb, label: "Quick Learner", description: "Adapt to new technologies" },
  { icon: Target, label: "Analytical Thinking", description: "Data-driven decisions" },
  { icon: Users, label: "Team Collaboration", description: "Effective communication" },
];

const interests = ["Web Development", "Software Engineering", "Data Analysis", "Machine Learning"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h3
              className="text-xl font-semibold text-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              Education Summary
            </motion.h3>
            <motion.p
              className="text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Bachelor of Computer Applications (BCA) from KLE's GH BCA College, Haveri.
              Final year student with a passion for building innovative software solutions.
            </motion.p>

            <motion.h3
              className="text-xl font-semibold text-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              Career Objective
            </motion.h3>
            <motion.p
              className="text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              "To apply my programming and problem-solving skills in a challenging IT role
              where I can contribute to innovative projects and grow as a software professional."
            </motion.p>

            <motion.h3
              className="text-xl font-semibold text-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              Interests
            </motion.h3>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium cursor-default"
                >
                  {interest}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Core Strengths
            </h3>
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.label}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="p-4 bg-card rounded-lg card-shadow hover:card-shadow-hover transition-shadow cursor-default"
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <strength.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {strength.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {strength.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
