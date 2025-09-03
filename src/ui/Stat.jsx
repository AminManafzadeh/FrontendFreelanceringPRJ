const colors = {
  orange: "bg-orange-100 text-orange-700",
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
};

function Stat({ icon, value, title, color }) {
  return (
    <div className="bg-secondary-0 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Mobile Layout - Vertical */}
      <div className="sm:hidden flex flex-col items-center text-center space-y-3">
        <div
          className={`flex items-center justify-center p-3 w-16 h-16 rounded-full ${colors[color]}`}
        >
          {icon}
        </div>
        <div className="space-y-1">
          <h5 className="font-bold text-secondary-500 text-sm">{title}</h5>
          <p className="text-2xl font-bold text-secondary-900">{value}</p>
        </div>
      </div>

      {/* Tablet+ Layout - Horizontal */}
      <div className="hidden sm:grid sm:grid-rows-2 sm:grid-cols-[5rem_1fr] lg:grid-cols-[6.4rem_1fr] gap-x-4">
        <div
          className={`row-span-2 flex items-center justify-center p-2 aspect-square rounded-full ${colors[color]}`}
        >
          {icon}
        </div>
        <h5 className="font-bold text-secondary-500 text-base lg:text-lg self-center">
          {title}
        </h5>
        <p className="text-2xl lg:text-3xl font-bold text-secondary-900">
          {value}
        </p>
      </div>
    </div>
  );
}

export default Stat;
