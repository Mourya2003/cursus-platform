import React, { useState } from 'react';
import { useEnrolledCourses } from './EnrolledCoursesContext';

const AddCourses = () => {
  const { enroll } = useEnrolledCourses();
  const [course, setCourse] = useState({
    id: '',
    title: '',
    instructor: '',
    category: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCourse = () => {
    if (!course.id || !course.title || !course.instructor) {
      alert('Please fill in required fields');
      return;
    }

    enroll({ ...course, id: parseInt(course.id), price: parseFloat(course.price) });
    setCourse({ id: '', title: '', instructor: '', category: '', price: '' });
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold mb-4">Add Course</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="number"
          name="id"
          value={course.id}
          onChange={handleChange}
          placeholder="Course ID"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="text"
          name="title"
          value={course.title}
          onChange={handleChange}
          placeholder="Course Title"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="text"
          name="instructor"
          value={course.instructor}
          onChange={handleChange}
          placeholder="Instructor"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="text"
          name="category"
          value={course.category}
          onChange={handleChange}
          placeholder="Category"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="number"
          name="price"
          value={course.price}
          onChange={handleChange}
          placeholder="Price"
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <button
        onClick={handleAddCourse}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default AddCourses;
