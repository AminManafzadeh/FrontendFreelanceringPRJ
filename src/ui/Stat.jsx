const colors = {
  orange: "bg-orange-100 text-orange-700",
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
};

function Stat({ icon, value, title, color }) {
  return (
    <div className="col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] bg-secondary-0 p-4 rounded-lg gap-x-4">
      <div
        className={`row-span-2 flex items-center justify-center p-2 aspect-square rounded-full ${colors[color]}`}
      >
        {icon}
      </div>
      <h5 className="font-bold text-secondary-500 text-lg self-center">
        {title}
      </h5>
      <p className="text-3xl font-bold text-secondary-900">{value}</p>
    </div>
  );
}

export default Stat;
