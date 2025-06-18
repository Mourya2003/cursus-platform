export default function CourseModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-lg w-11/12 p-6 relative shadow-lg transform transition-transform animate-slideDown"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 transition text-xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
