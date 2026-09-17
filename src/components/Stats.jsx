import { motion } from "framer-motion";
import {
  FiCode,
  FiAward,
  FiBookOpen,
  FiCpu,
} from "react-icons/fi";

const stats = [
  {
    value: "3",
    label: "End-to-End Projects",
    icon: <FiCode />,
  },
  {
    value: "8.37",
    label: "CGPA",
    icon: <FiAward />,
  },
  {
    value: "1",
    label: "Research Publication",
    icon: <FiBookOpen />,
  },
  {
    value: "1",
    label: "Patent Application",
    icon: <FiCpu />,
  },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">

        {stats.map((stat, index) => (
          <motion.div
            className="stat-card"
            key={stat.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <div className="stat-icon">
              {stat.icon}
            </div>

            <div className="stat-info">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Stats;