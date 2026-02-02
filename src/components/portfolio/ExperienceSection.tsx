import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, Activity } from "lucide-react";

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

const certifications = [
  "Full Stack Development",
  "Python Machine Learning",
  "Master Data Analysis with Python – Udemy",
];

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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Training Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-card rounded-xl card-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Training / Internship
              </h3>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-foreground">{experience.title}</h4>
              <p className="text-sm text-primary">{experience.duration}</p>
              <p className="text-sm text-muted-foreground">
                {experience.organization}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">
                What I Learned:
              </p>
              <ul className="space-y-2">
                {experience.learnings.map((learning) => (
                  <li
                    key={learning}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Certifications & Achievements */}
          <div className="space-y-6">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-card rounded-xl card-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Certifications
                </h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-card rounded-xl card-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Achievements
                </h3>
              </div>
              {achievements.map((achievement) => (
                <div key={achievement.title}>
                  <h4 className="font-medium text-foreground">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Extra-Curricular */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 bg-card rounded-xl card-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Extra-Curricular
                </h3>
              </div>
              <ul className="space-y-2">
                {activities.map((activity) => (
                  <li
                    key={activity}
                    className="text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {activity}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
