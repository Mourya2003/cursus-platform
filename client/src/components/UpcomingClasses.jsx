// src/components/UpcomingClasses.jsx
import { motion } from "framer-motion";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.5 } },
};

const UpcomingClasses = ({ classes }) => (
  <div className="bg-white rounded-xl p-6 shadow">
    <h2 className="text-xl font-semibold mb-4">Upcoming Classes</h2>
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={listVariants}
    >
      {classes.map((item) => (
        <motion.li
          key={item.id}
          variants={itemVariants}
          whileHover={{ scale: 1.03, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
          className="mb-3 flex items-center transition-transform"
        >
          <div className="flex-1">
            <div className="font-medium">{item.course}</div>
            <div className="text-sm text-gray-500">
              {item.date} @ {item.time}
            </div>
          </div>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
            {item.status}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  </div>
);

export default UpcomingClasses;
