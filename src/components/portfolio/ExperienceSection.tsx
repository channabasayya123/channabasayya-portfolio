import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, Activity, CheckCircle } from "lucide-react";

const experience = {
  title: "Python & Machine Learning Certification",
  duration: "9 Days Training Program",
  organization: "Seminarroom & KLE BCA College, Haveri",
  learnings: [
    "Learned Python fundamentals, NumPy, and Pandas",
    "Performed data visualization using Matplotlib and Seaborn",
    "Implemented data preprocessing techniques",
    "Applied ML algorithms: Linear Regression, Polynomial Regression, SVR, and Classification models",
  ],
};


const achievements = [
  {
    title: "Taluk-Level Chess Player",
    description: "Demonstrated strong analytical and strategic thinking skills",
  },
];

const activities = [
  "Chess Competitions (Taluk Level)",
  "Technical Seminars & Workshops",
  "Team coordination and leadership activities",
];

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-muted/30">
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
            Experience & <span className="text-gradient">Achievements</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Training Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-all"
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Briefcase className="w-5 h-5 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground">
                Training / Internship
              </h3>
            </motion.div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-semibold text-foreground">{experience.title}</h4>
              <motion.p
                className="text-sm text-primary"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {experience.duration}
              </motion.p>
              <p className="text-sm text-muted-foreground">
                {experience.organization}
              </p>
            </motion.div>

            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">
                What I Learned:
              </p>
              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {experience.learnings.map((learning, index) => (
                  <motion.li
                    key={learning}
                    variants={itemVariants}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    >
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    </motion.span>
                    {learning}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* Achievements & Extra-Curricular */}
          <div className="space-y-6">

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-all"
            >
              <motion.div
                className="flex items-center gap-3 mb-4"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring" }}
                >
                  <Award className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground">
                  Achievements
                </h3>
              </motion.div>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <h4 className="font-medium text-foreground">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Extra-Curricular */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-all"
            >
              <motion.div
                className="flex items-center gap-3 mb-4"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Activity className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground">
                  Extra-Curricular
                </h3>
              </motion.div>
              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {activities.map((activity, index) => (
                  <motion.li
                    key={activity}
                    variants={itemVariants}
                    className="text-muted-foreground flex items-center gap-2"
                    whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    {activity}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
