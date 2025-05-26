import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2, // Longer duration for smoother motion
      ease: [0.33, 1, 0.68, 1], // easeOutExpo
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1], // smooth ease
    },
  },
};

const WelcomeBanner = ({ studentName }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    whileHover={{ scale: 1.015 }}
    className="bg-blue-600 text-white rounded-xl p-6 mb-6 shadow-lg"
  >
    <motion.h1 variants={childVariants} className="text-2xl font-bold">
      Welcome, {studentName}!
    </motion.h1>
    <motion.p variants={childVariants} className="mt-2">
      Here’s your dashboard overview.
    </motion.p>
  </motion.div>
);

export default WelcomeBanner;
