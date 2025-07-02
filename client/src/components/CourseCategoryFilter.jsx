// components/CourseCategoryFilter.jsx
import React from "react";

const CourseCategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="mb-4 flex flex-wrap gap-3">
      <button
        onClick={() => onCategoryChange("all")}
        className={`px-4 py-2 rounded-full text-sm font-medium border ${
          selectedCategory === "all" ? "bg-indigo-500 text-white" : "bg-white text-gray-700"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium border ${
            selectedCategory === cat ? "bg-indigo-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CourseCategoryFilter;
