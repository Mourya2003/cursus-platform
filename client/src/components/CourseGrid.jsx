const CourseGrid = ({ courses }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {courses.length === 0 ? (
      <div className="col-span-full text-gray-400 text-center py-12">No courses found.</div>
    ) : (
      courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 p-5 flex flex-col justify-between cursor-pointer group"
        >
          <div>
            <h4 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition">{course.title}</h4>
            <div className="text-xs text-gray-400 mb-2">{course.category} • {course.price} • {course.rating}★</div>
            <div className="flex flex-wrap gap-1 mt-2">
              {course.tags.map((tag, idx) => (
                <span
                  key={tag}
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold text-white
                    ${["bg-pink-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-indigo-500"][idx % 6]}`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))
    )}
  </div>
);

export default CourseGrid;
