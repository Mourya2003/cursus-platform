export default function CourseCard({ title, description, image, onOpenModal }) {
  return (
    <div
      className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={onOpenModal}
    >
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal();
          }}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          More Info
        </button>
      </div>
    </div>
  );
}
