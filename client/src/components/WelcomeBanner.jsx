import { motion } from "framer-motion";

const WelcomeBanner = ({ studentName }) => (
  <motion.div
    initial={{ opacity: 0, y: -30, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // easeOutCubic
    }}
    className="bg-blue-600 text-white rounded-xl p-6 mb-6 shadow"
  >
    <h1 className="text-2xl font-bold">Welcome, {studentName}!</h1>
    <p className="mt-2">Here’s your dashboard overview.</p>
  </motion.div>
);

export default WelcomeBanner;
