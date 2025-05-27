const Card = ({ title, children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
    {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
    <div>{children}</div>
  </div>
);

export default Card;