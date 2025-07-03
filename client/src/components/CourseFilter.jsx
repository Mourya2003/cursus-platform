import React, { useState, useEffect, useCallback, useRef } from "react";
import debounce from "lodash.debounce";
import CourseGrid from "./CourseGrid";

const categories = ["Programming", "Design", "Marketing", "Business"];
const prices = ["Free", "Paid"];
const ratings = [5, 4, 3, 2, 1];

const CourseFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  const catDropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (catDropdownRef.current && !catDropdownRef.current.contains(event.target)) {
        setCatOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeFilters = [
    ...selectedCategories.map((c) => ({ type: "Category", value: c })),
    ...selectedPrices.map((p) => ({ type: "Price", value: p })),
    ...selectedRatings.map((r) => ({ type: "Rating", value: r })),
  ];

  const fetchCourses = useCallback(
    debounce(async (filters) => {
      setLoading(true);
      const params = new URLSearchParams();
      if (filters.categories.length) params.append("categories", filters.categories.join(","));
      if (filters.prices.length) params.append("prices", filters.prices.join(","));
      if (filters.ratings.length) params.append("ratings", filters.ratings.join(","));
      try {
        const res = await fetch(`/api/courses?${params.toString()}`);
        const data = await res.json();
        setCourses(data.courses);
      } catch (e) {
        setCourses([]);
      }
      setLoading(false);
    }, 400),
    []
  );

  useEffect(() => {
    fetchCourses({
      categories: selectedCategories,
      prices: selectedPrices,
      ratings: selectedRatings,
    });
    return fetchCourses.cancel;
  }, [selectedCategories, selectedPrices, selectedRatings, fetchCourses]);

  const toggle = (value, arr, setArr) =>
    setArr((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  const removeFilter = (type, value) => {
    if (type === "Category") setSelectedCategories((prev) => prev.filter((v) => v !== value));
    if (type === "Price") setSelectedPrices((prev) => prev.filter((v) => v !== value));
    if (type === "Rating") setSelectedRatings((prev) => prev.filter((v) => v !== value));
  };
  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedRatings([]);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Filter Courses</h3>
      {/* Category Dropdown */}
      <div className="mb-3" ref={catDropdownRef}>
        <div className="font-medium mb-1">Category</div>
        <div className="relative">
          <button
            type="button"
            className="w-full bg-gray-800 text-left px-3 py-2 rounded border border-gray-700 focus:outline-none"
            onClick={() => setCatOpen((open) => !open)}
          >
            {selectedCategories.length === 0
              ? "Select categories"
              : selectedCategories.join(", ")}
            <span className="float-right">
              <svg
                className={`inline w-4 h-4 ml-2 transition-transform ${catOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {catOpen && (
            <div className="absolute z-10 mt-1 w-full bg-gray-900 border border-gray-700 rounded shadow-lg">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="block px-4 py-2 hover:bg-gray-800 cursor-pointer text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggle(cat, selectedCategories, setSelectedCategories)}
                    className="mr-2 accent-blue-600"
                  />
                  {cat}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Price */}
      <div className="mb-3">
        <div className="font-medium mb-1">Price</div>
        <div className="flex gap-2">
          {prices.map((p) => (
            <button
              key={p}
              className={`px-2 py-1 rounded text-sm ${
                selectedPrices.includes(p)
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => toggle(p, selectedPrices, setSelectedPrices)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      {/* Rating */}
      <div className="mb-3">
        <div className="font-medium mb-1">Rating</div>
        <div className="flex gap-2">
          {ratings.map((r) => (
            <button
              key={r}
              className={`px-2 py-1 rounded text-sm flex items-center ${
                selectedRatings.includes(r)
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => toggle(r, selectedRatings, setSelectedRatings)}
            >
              {r}★
            </button>
          ))}
        </div>
      </div>
      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="mb-3">
          <div className="font-medium mb-1">Active Filters</div>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((f, i) => (
              <span key={i} className="bg-gray-700 px-2 py-1 rounded text-xs flex items-center">
                {f.type}: {f.value}
                <button
                  className="ml-1 text-red-400 hover:text-red-600"
                  onClick={() => removeFilter(f.type, f.value)}
                  aria-label="Remove filter"
                >
                  ×
                </button>
              </span>
            ))}
            <button
              className="ml-2 text-xs underline text-blue-400 hover:text-blue-600"
              onClick={clearAll}
            >
              Clear All
            </button>
          </div>
        </div>
      )}
      {/* Loading Indicator */}
      {loading && (
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          Loading courses...
        </div>
      )}
      {/* Course Grid */}
      <CourseGrid courses={courses} />
    </div>
  );
};

export default CourseFilter;
