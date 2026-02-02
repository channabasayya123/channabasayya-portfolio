import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import type { Easing } from "framer-motion";

const easeOut: Easing = "easeOut";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "KLE's GH BCA College, Haveri",
    university: "Haveri University",
    year: "2023 – 2026 (Expected)",
    isCurrent: true,
  },
  {
    degree: "Pre-University (PUC)",
    institution: "KLE GH PU College, Haveri",
    year: "2023",
    isCurrent: false,
  },
  {
    degree: "Secondary School (SSLC)",
    institution: "Vidya Bharati Education Society, Savanur",
    year: "2021",
    isCurrent: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding">
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
            My <span className="text-gradient">Education</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line with animation */}
            <motion.div
              className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  variants={cardVariants}
                  className={`relative mb-8 md:mb-12 ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  <motion.div
                    className={`ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-6 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-all">
                      {edu.isCurrent && (
                        <motion.span
                          className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3"
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [1, 0.8, 1],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Current
                        </motion.span>
                      )}
                      <div className="flex items-start gap-3 mb-3">
                        <motion.div
                          className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </motion.div>
                        <div className="text-left">
                          <h3 className="font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                          <motion.p
                            className="text-muted-foreground text-sm flex items-center gap-1 mt-1"
                            whileHover={{ x: 3 }}
                          >
                            <MapPin size={14} />
                            {edu.institution}
                          </motion.p>
                          {edu.university && (
                            <p className="text-muted-foreground text-sm">
                              {edu.university}
                            </p>
                          )}
                        </div>
                      </div>
                      <motion.p
                        className="text-sm text-muted-foreground flex items-center gap-1 justify-start"
                        whileHover={{ x: 3 }}
                      >
                        <Calendar size={14} />
                        {edu.year}
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Timeline Dot with pulse animation */}
                  <motion.div
                    className={`absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full ${
                      edu.isCurrent ? "bg-primary" : "bg-muted-foreground"
                    } ring-4 ring-background`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                  >
                    {edu.isCurrent && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [1, 0, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
