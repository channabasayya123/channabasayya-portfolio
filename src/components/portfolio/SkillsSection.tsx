import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Wrench, MessageSquare } from "lucide-react";

const technicalSkills = [
  { name: "C", level: 80 },
  { name: "Java", level: 75 },
  { name: "Python", level: 70 },
  { name: "SQL", level: 75 },
  { name: "HTML/CSS", level: 85 },
  { name: "JavaScript", level: 70 },
  { name: "React.js", level: 65 },
  { name: "MySQL", level: 75 },
];

const tools = [
  "Visual Studio Code",
  "PyCharm",
  "MySQL Workbench",
  "Notepad++",
  "Git & GitHub",
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Time Management",
  "Problem Solving",
  "Adaptability",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-muted/30">
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
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Code2 className="w-5 h-5 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground">
                Technical Skills
              </h3>
            </motion.div>
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="p-4 bg-card rounded-lg card-shadow hover:card-shadow-hover transition-all"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">
                      {skill.name}
                    </span>
                    <motion.span
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.05 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1.2,
                        delay: 0.5 + index * 0.08,
                        ease: "easeOut",
                      }}
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full relative"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: index * 0.2,
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tools & Soft Skills */}
          <div className="space-y-8">
            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="flex items-center gap-3 mb-4"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Wrench className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground">Tools</h3>
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary) / 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 bg-card text-foreground text-sm rounded-lg card-shadow hover:card-shadow-hover transition-all cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                className="flex items-center gap-3 mb-4"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <MessageSquare className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground">
                  Soft Skills
                </h3>
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      rotate: [-2, 2, -2, 0],
                    }}
                    className="px-3 py-2 bg-primary/10 text-primary text-sm font-medium rounded-lg cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
