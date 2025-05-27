// // src/components/UpcomingClasses.jsx
import React, { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

const UpcomingClasses = ({ classes }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedClasses = showAll ? classes : classes.slice(0, 3); // Show only 3 classes initially

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Upcoming Classes</h2>
        <button
          className="text-gray-500 text-sm font-medium hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : "See all"}
        </button>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {displayedClasses.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{
              scale: 1.035,
              boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
            }}
            className="bg-white rounded-xl shadow p-0 overflow-hidden flex flex-col transition-transform"
          >
            {/* Image section */}
            <div className="relative h-40 w-full flex-shrink-0 group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {/* Play overlay with pulse on hover */}
              <motion.span
                className="absolute left-3 top-3 bg-white bg-opacity-90 rounded-full p-2 shadow"
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 0 0 8px rgba(59,130,246,0.12)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaPlay className="text-gray-700" size={16} />
              </motion.span>
              {/* Duration badge */}
              <span className="absolute bottom-2 right-2 bg-gray-900 bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                {item.duration}
              </span>
            </div>
            {/* Meta info */}
            <div className="flex items-center text-xs text-gray-500 space-x-2 px-4 pt-3">
              <span>{item.views} views</span>
              <span>{'\u2022'}</span>
              <span>{item.date}</span>
            </div>
            {/* Title */}
            <div className="font-semibold text-base px-4 mt-1 leading-tight">{item.title}</div>
            {/* Category */}
            <div className="text-xs text-gray-500 px-4 mt-1">{item.category}</div>
            {/* Instructor and price row */}
            <div className="flex items-center justify-between px-4 py-3 mt-auto">
              <div className="text-sm text-gray-700">
                By <span className="font-medium">{item.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base">${item.price}</span>
                <button className="p-1 rounded-full hover:bg-gray-100">
                  <FiShoppingCart size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default UpcomingClasses;
