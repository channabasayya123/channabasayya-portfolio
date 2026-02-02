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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Education Summary
            </h3>
            <p className="text-muted-foreground mb-6">
              Bachelor of Computer Applications (BCA) from KLE's GH BCA College, Haveri.
              Final year student with a passion for building innovative software solutions.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">
              Career Objective
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              "To apply my programming and problem-solving skills in a challenging IT role
              where I can contribute to innovative projects and grow as a software professional."
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
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
            <div className="grid sm:grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="p-4 bg-card rounded-lg card-shadow hover:card-shadow-hover transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <strength.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {strength.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {strength.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
